import { PokemonCard } from "components/Card";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Searchbar } from "components/Searchbar";

export const App = () => {
  const cardData = {
    index: 1,
    name: "Bulbasaur",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["grass", "poison"],
    weight: 6.9,
    height: 0.7,
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
  };

  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
  };

  return (
    <>
      <Header />
      <Searchbar onSearch={handleSearch} />
      <main>
        <PokemonCard {...cardData} />
      </main>
      <Footer />
    </>
  );
};
