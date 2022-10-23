import { Pokemon } from "core/models/Pokemon";

const mapPokemonData = (pokemonResponse: any): Pokemon => {
  return {
    index: pokemonResponse.id,
    name: pokemonResponse.name,
    imageUrl: pokemonResponse.sprites.other["official-artwork"].front_default,
    types: pokemonResponse.types.map(({ type }: any) => type.name),
    weight: pokemonResponse.weight / 10,
    height: pokemonResponse.height / 10,
    description: "Lorem ipsum",
  };
};

const getPokemon = async (name: string) => {
  try {
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    ).then((response) => response.json());

    return mapPokemonData(pokemonResponse);
  } catch (error: unknown) {
    throw new Error("Invalid pokemon");
  }
};

export const pokemonService = {
  getPokemon,
};
