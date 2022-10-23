import { useState } from "react";
import { PokemonCard } from "components/Card";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Searchbar } from "components/Searchbar";
import { Pokemon } from "core/models/Pokemon";
import { pokemonService } from "core/services/pokemonService";

export const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSearch = async (searchValue: string) => {
    setIsLoading(true);
    try {
      const searchedPokemon = await pokemonService.getPokemon(searchValue);
      setPokemon(searchedPokemon);
    } catch (error: unknown) {
      setPokemon(undefined);
    }

    setIsLoading(false);
  };

  const getPokemonsContent = () => {
    if (isLoading) return <p>Loading data...</p>;
    if (!pokemon)
      return (
        <p>Oops, it seems like you haven't made a good search... try again!</p>
      );
    return <PokemonCard {...pokemon} />;
  };

  return (
    <>
      <Header />
      <Searchbar onSearch={handleSearch} />
      <main>{getPokemonsContent()}</main>
      <Footer />
    </>
  );
};
