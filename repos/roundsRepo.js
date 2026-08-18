import supabase from "../supabase.js";

export async function createRound(round) {
    const { data, error } = await supabase
    .from('rounds')
    .insert(round)
    .select()
    .single()
    if (error) throw error

    return data
}

export async function findActiveRoundsById(id) {
    const { data, error } = await supabase
    .from('rounds')
    .select(`*`)
    .eq(`player_id`,id)
    .eq(`status`, `in_progress`)
    .maybeSingle()
    if (error) throw error

    return data
}

export async function updateRound(round, id) {
    const { data, error } = await supabase
  .from('rounds')
  .update(round)
  .eq('id', id)
  .select()
    if (error) throw error

    return data
}