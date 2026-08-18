import { findPlayerById } from "../repos/playerRepo.js";

export async function authentication(req, res, next){
    try {
        const playerId = req.get("x-player-id")
        if(!playerId){
            return res.status(401).json({
                message: "Player id is missing"
            });
        }

        const player = await findPlayerById(playerId)
        if(!player){
            return res.status(401).json({
                message: "Player not found"
            });
        }

        req.player = player
        next()
    } catch (error) {
        next(error)
    }
}