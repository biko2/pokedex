import { useState } from "react";
import { PokemonCard } from "components/Card";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Searchbar } from "components/Searchbar";
import { Pokemon } from "core/models/Pokemon";
import { pokemonService } from "core/services/pokemonService";
import styles from "./App.module.css";

export const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFirstSearch, setIsFirstSearch] = useState<boolean>(true);

  const handleSearch = async (searchValue: string) => {
    setIsLoading(true);
    try {
      const searchedPokemon = await pokemonService.getPokemon(
        searchValue.toLowerCase()
      );
      const newPokemons = [...pokemons, searchedPokemon];
      setPokemons(newPokemons);
    } catch (error: unknown) {
      console.log("Error getting data...");
    }

    setIsFirstSearch(false);
    setIsLoading(false);
  };

  const getPokemonsContent = () => {
    if (isFirstSearch)
      return <p className={styles.status}>Write a pokemon name to start!</p>;

    if (pokemons.length === 0)
      return (
        <p className={styles.status}>
          Oops, it seems like you haven't made a good search... try again!
        </p>
      );

    return (
      <section className={styles.grid}>
        {pokemons.map((pokemon: Pokemon, index: number) => (
          <PokemonCard key={`pokemon-card-${index}`} {...pokemon} />
        ))}
        {isLoading && <p>Loading...</p>}
      </section>
    );
  };

  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>
        <section className={styles.searchWrapper}>
          <Searchbar onSearch={handleSearch} />
        </section>
        {getPokemonsContent()}
      </main>

      <Footer />
    </div>
  );
};
