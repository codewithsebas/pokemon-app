"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchPokemonList } from "./services/pokeApi";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokeList";
import Pagination from "./components/Pagination";
import { Ban, LoaderCircle } from "lucide-react";

export default function Home() {
  const [pokemonList, setPokemonList] = useState<{ name: string; image: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchPokemonList(20, (currentPage - 1) * 20);
      setPokemonList(data);
      setError(null);
    } catch {
      setError("Hubo un error al cargar los Pokémon. Intenta nuevamente.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const filteredList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className={`flex items-start justify-center bg-c-blue min-h-screen ${error && 'bg-red-400'}`}>
      <article className="w-full max-w-2xl min-w-2xl p-5 flex flex-col gap-3 min-h-screen duration-200">
        <header className="text-white">
          <h1 className="font-bold text-2xl mt-3">Pokémon App - API</h1>
          <p className="font-light">Encuentra tu Pokémon favorito y descubre más detalles sobre él.</p>
        </header>

        <section className="flex flex-col gap-3">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {error ? (
            <div className="w-full flex flex-col gap-2 items-center justify-center text-white mt-5">
              <p className="text-lg">{error}</p>
              <Ban />
            </div>
          ) : pokemonList.length === 0 ? (
            <div className="w-full flex flex-col gap-2 items-center justify-center text-white mt-5">
              <p className="text-lg">Cargando Pokemones.</p>
              <LoaderCircle className="animate-spin" />
            </div>
          ) : (
            <PokemonList pokemonList={filteredList} />
          )}
        </section>

        {!error && pokemonList.length > 0 && (
          <footer className="pb-5">
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} total={100} />
          </footer>
        )}
      </article>
    </main>
  );
}
