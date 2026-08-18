import { createPlayer } from "../repos/playerRepo.js";

async function startGameService(){
    return await createPlayer()
}

export default service