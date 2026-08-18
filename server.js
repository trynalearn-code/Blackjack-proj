import express from "express"
import "dotenv/config"
import supabase from "./supabase.js"

const app = express()
app.use(express.json())


app.listen(process.env.PORT, ()=> console.log(`listening on port ${process.env.PORT}`))
