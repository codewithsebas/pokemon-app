import { SearchBarProps } from "../types";

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
    return (
        <input
            type="text"
            placeholder="Buscar Pokémon"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 w-full rounded-full ps-4 outline-none"
        />
    );
};

export default SearchBar;
