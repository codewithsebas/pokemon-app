import axios from "axios";
import { Pokemon, PokemonListItem } from "../types";

export const fetchPokemonList = async (
  limit: number,
  offset: number
): Promise<Pokemon[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );

  const results: Pokemon[] = await Promise.all(
    response.data.results.map(async (pokemon: PokemonListItem) => {
      const details = await fetchPokemonDetails(pokemon.name);
      return {
        name: pokemon.name,
        image: details.sprites.front_default,
      };
    })
  );

  return results;
};


export const fetchPokemonDetails = async (name: string) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon/${name}`);
    return response.data;
};
