import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
}

export async function createEditCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // https://cyuucsgruyivyzlwcrah.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg

  // creating cabin
  const { data, error } = await supabase
    .from("cabins")
    // cabin data get from Form are equal to supabase table data.that why we can directly insert the new cabin
    .insert([{ ...newCabin, image: imagePath }])
    .select()
    .select()
    .single();
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  // upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3.Delete the abin if there was an storage error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabins image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}
