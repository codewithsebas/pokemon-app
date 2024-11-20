import { Search } from "lucide-react";
import PokeCard from "./PokeCard";
import { PokeListProps } from "../types";

const PokeList = ({ pokemonList }: PokeListProps) => {
  return (
    <>
      {
        pokemonList.length > 1 ? (
          <div className="duration-200 overflow-hidden shadow-sm bg-white rounded-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {pokemonList.map((poke) => (
              <PokeCard key={poke.name} pokemon={poke} />
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col gap-2 items-center justify-center text-white mt-5">
            <p className="text-lg">No hay Pokemones.</p>
            <Search />
          </div>
        )
      }
    </>
  );
};

export default PokeList;
