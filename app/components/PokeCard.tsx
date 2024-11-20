import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { PokeProps } from "../types";

const PokeCard = ({ pokemon }: PokeProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (pokemon.image) {
            setIsLoading(false);
        }
    }, [pokemon.image])

    return (
        <Link href={`/pokemon/${pokemon.name}`} className="border flex flex-col gap-2 h-min p-4 text-center bg-white group duration-200 cursor-pointer hover:scale-105 hover:shadow-xl hover:rounded-md hover:border-c-blue">
            {isLoading ? (
                <Skeleton />
            ) : (
                <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="w-24 h-24 mx-auto duration-200 group-hover:scale-110"
                    width={80}
                    height={80}
                />
            )}
            <h2 className="text-gray-700 font-medium capitalize">{pokemon.name}</h2>
        </Link>
    );
};

export default PokeCard;
