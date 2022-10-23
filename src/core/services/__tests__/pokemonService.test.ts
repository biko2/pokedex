import { pokemonService } from "../pokemonService";
import { mappedBulbasaur } from "../__fixtures__/mappedBulbasaur";

describe("pokemonService", () => {
  it("returns pokemon", async () => {
    const pokemon = await pokemonService.getPokemon("bulbasaur");

    expect(pokemon).toEqual(mappedBulbasaur);
  });

  it("throws error getting invalid name pokemon", async () => {
    await expect(pokemonService.getPokemon("fake")).rejects.toThrow(
      "Invalid pokemon"
    );
  });
});
