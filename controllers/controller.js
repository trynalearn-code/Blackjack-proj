import service from "../services/playerService.js";

async function startGameController(req, res, next) {
    try {
        const player = await service.startGameService()

        return res.status(201).json({
            playerId:player.id,
            chips:player.chips
        })

    } catch (error) {
        return res.status(401).json({
                message: "Player id is missing"
            });
    }
}