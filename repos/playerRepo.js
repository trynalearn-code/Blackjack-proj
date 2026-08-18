import supabase from "../supabase.js"

export async function createPlayer() {
  const { data, error } = await supabase
    .from('players')
    .insert({})
    .select()

  if (error) throw error
  console.log(data)
  return data
}

export async function findPlayerById(ids) {
    const { data, error } = await supabase
    .from('players')
    .select(`*`)
    .eq(`id`,ids)
    if (error) throw error
    return data
}

export async function updateChips(chips, id) {
  const { data, error } = await supabase
  .from('players')
  .update({ chips })
  .eq('id', id)
  .select()
  if (error) throw error
  return data
}

console.log(await findPlayerById(4))