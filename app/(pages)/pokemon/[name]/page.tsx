import BackButton from "@/app/components/BackButton";
import { fetchPokemonDetails } from "@/app/services/pokeApi";
import { PokemonDetails } from "@/app/types";
import { Ban } from "lucide-react";
import Image from "next/image";


export default async function Pokemon({params}: {params: Promise<{ name: string }>})  {
    const name = (await params).name

    let pokemonDetails: PokemonDetails | null = null;
    let error: string | null = null;

    try {
        pokemonDetails = await fetchPokemonDetails(name);
    } catch {
        error = "No se pudo obtener los detalles del Pokémon.";
    }

    if (error) {
        return (
            <main className="flex items-center justify-center bg-red-400 min-h-screen p-5">
                <div className="w-full max-w-xl p-5 rounded-xl flex flex-col items-center gap-2 text-red-500 bg-white relative">
                    <BackButton title="Volver" link="/" />
                    <h1 className="font-medium text-center">{error}</h1>
                    <Ban />
                </div>
            </main>
        );
    }

    if (!pokemonDetails) {
        return (
            <main className="flex items-center justify-center bg-c-blue min-h-screen p-5">
                <div className="w-full max-w-xl p-5 rounded-xl flex flex-col items-center gap-2 text-gray-500 bg-white relative">
                    <BackButton title="Volver" link="/" />
                    <h1 className="font-medium text-center">Cargando...</h1>
                </div>
            </main>
        );
    }

    const { abilities, types, sprites } = pokemonDetails;
    const imageUrl = sprites.front_default;

    return (
        <main className="flex items-center justify-center bg-c-blue min-h-screen p-5">
            <article className="w-full max-w-xl p-5 rounded-xl flex flex-col gap-2 bg-white relative group">
                <BackButton title="Volver" link="/" />
                <div className="flex flex-col-reverse justify-between items-center sm:flex-row sm:items-start">
                    <div className="w-full flex flex-col justify-between gap-5">
                        <header className="text-gray-600">
                            <h1 className="font-bold text-2xl capitalize">{name}</h1>
                            <p className="font-light text-sm">
                                Detalle de tu Pokémon <b>{name}.</b>
                            </p>
                        </header>
                        <section className="text-gray-600 flex flex-col gap-6 items-start">
                            <div className="flex flex-col gap-2 w-full">
                                <h2 className="font-semibold text-lg">Habilidades</h2>
                                <ul className="list-none">
                                    {abilities.map((ability) => (
                                        <li key={ability.ability.name} className="text-gray-700 capitalize">
                                            {ability.ability.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <h2 className="font-semibold text-lg">Tipos</h2>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                    {types.map((type) => (
                                        <li
                                            key={type.type.name}
                                            className="px-4 py-1 capitalize text-xs text-center rounded-full text-gray-600 font-semibold bg-c-green"
                                        >
                                            {type.type.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="w-fit">
                        <Image
                            src={imageUrl}
                            alt={name}
                            className="w-80 h-60 object-contain duration-200 group-hover:scale-110"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </article>
        </main>
    );
}
