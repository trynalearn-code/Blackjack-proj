import { updateChips } from "../repos/playerRepo.js";
import { createRound } from "../repos/roundsRepo.js";
import { findActiveRoundsById } from "../repos/roundsRepo.js";
import { drawCard, determineValue, dealerTurn } from "../utils/logic.js";

async function createRoundService(player, bet) {
    const playing = await findActiveRoundsById(player.id)
    if (bet <= 0) throw new Error("Your bet must be positive")

    if (bet > player.chips) throw new Error("You don't have enough chips to bet so much")

    if (playing) throw new Error("Bro in the middle of another game")

    const playersCards = [drawCard(), drawCard()]


    const dealerCards = [drawCard(), drawCard()]

    const newRound = {
        player_id: player.id,
        player_cards: playersCards,
        dealer_cards: dealerCards,
        bet,
        status: "in-progress"
    }

    const newChips = player.chips - bet
    const round = await createRound(newRound)
    return {
        roundId:round.id,
        player_cards:round.player_cards,
        dealer_cards: round.dealer_cards[0],
        chips:newChips
    }
}

async function hitService(player) {
    const round = await findActiveRoundsById(player.id)
    if(!round)throw new Error("Round not found")
}
const actualPlayerCards = round.playersCards.push(drawCard())
const total = determineValue(actualPlayerCards)
if (total>21){
    round.status = "player_bust"
}
await updateRound(round)
const actualChips = player.chips-round.bet
await updateChips(actualChips)
return {
    player_cards:actualPlayerCards,
    playerTotal:total,
    status:round.status,
    chips:actualChips
}

// console.log(await createRoundService(
//     {
//         id: 4,
//         chips: 1500,
//         created_at: '2026-08-18T09:06:57.778158+00:00'
//     }
// , 67))