import { render, screen } from "@testing-library/react";
import { PokemonCard } from "../PokemonCard";

const cardData = {
  index: 1,
  name: "Bulbasaur",
  imageUrl:
    "https://static.wikia.nocookie.net/ultimate-pokemon-fanon/images/e/ea/001Bulbasaur_AG_anime.png/revision/latest/scale-to-width-down/1200?cb=20160513022152",
  types: ["grass", "poison"],
  weight: 6.9,
  height: 0.7,
  description:
    "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
};

describe("PokemonCard", () => {
  it("renders component", () => {
    render(<PokemonCard {...cardData} />);

    const cardTitle = screen.getByText(/bulbasaur/i);
    const cardTag = screen.getByText(/grass/i);
    const cardIndex = screen.getByText(/#001/i);
    const cardWeight = screen.getByText(/6\.9 kg/i);
    const cardHeight = screen.getByText(/0\.7 m/i);

    expect(cardTitle).toBeInTheDocument();
    expect(cardTag).toBeInTheDocument();
    expect(cardIndex).toBeInTheDocument();
    expect(cardWeight).toBeInTheDocument();
    expect(cardHeight).toBeInTheDocument();
  });
});
