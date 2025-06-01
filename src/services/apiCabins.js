import { data } from "react-router-dom";
import supabase from "./supabase";

export default async function getCabins() {
  const { data, error } = await supabase.from("cabin").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  if(data){
    console.log(data);
    
  }
  return data;
}

export async function DeleteCabin (id) {

const { error } = await supabase
  .from('cabin')
  .delete()
  .eq('id', id)

    
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

 return data;
}
