import { createClient } from '@supabase/supabase-js'
import "dotenv/config"

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY)


console.log("Connected to Supabase!")


export default supabase

