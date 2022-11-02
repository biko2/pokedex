import { pokemonService } from "../pokemonService";
import { mappedBulbasaur } from "../__fixtures__/mappedBulbasaur";

describe("pokemonService", () => {
  it("returns pokemon by name", async () => {
    const pokemon = await pokemonService.getPokemon("bulbasaur");

    expect(pokemon).toEqual(mappedBulbasaur);
  });

  it("returns pokemon by index", async () => {
    const pokemon = await pokemonService.getPokemon("1");

    expect(pokemon).toEqual(mappedBulbasaur);
  });

  it("throws error getting pokemon by invalid name", async () => {
    await expect(pokemonService.getPokemon("fake")).rejects.toThrow(
      "Invalid pokemon"
    );
  });
});
