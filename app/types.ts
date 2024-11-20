// Type of pokeApi functions
export interface PokemonListItem {
    name: string;
    url: string;
}
// Type of pokeApi functions
export interface Pokemon {
    name: string;
    image: string;
}

// Pagination component
export interface PaginationProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    total: number;
}

// Button back
export interface BackButtonProps {
    title: string;
    link: string;
}

// PokeCard component and PokeListProps
export interface PokeProps {
    pokemon: { name: string; image: string };
}

export interface PokeListProps {
    pokemonList: { name: string; image: string }[];
}


// SearchBar component
export interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}


// Page pokemon name params and Details
export interface PokemonProps {
    params: { name: string };
}

export interface PokemonDetails {
    abilities: { ability: { name: string } }[];
    types: { type: { name: string } }[];
    sprites: { front_default: string };
}