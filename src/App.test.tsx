import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

describe("App", () => {
  it("renders empty component", () => {
    render(<App />);

    const emptyStatusMessage = screen.getByText(
      /Write a pokemon name to start!/i
    );
    const linkElement = screen.getByText(/My Pokedex/i);

    expect(linkElement).toBeInTheDocument();
    expect(emptyStatusMessage).toBeInTheDocument();
  });

  it("renders empty result component", async () => {
    render(<App />);

    const emptyStatusMessage = screen.getByText(
      /Write a pokemon name to start!/i
    );

    expect(emptyStatusMessage).toBeInTheDocument();

    const searchInput = screen.getByRole("searchbox", { name: "searchbar" });
    userEvent.type(searchInput, "irrelevant");
    userEvent.type(searchInput, "{enter}");

    const emptyResultStatusMessage = await screen.findByText(
      /Oops, it seems like you haven't made a good search... try again!/i
    );

    expect(emptyResultStatusMessage).toBeInTheDocument();
  });

  it("renders result component", async () => {
    render(<App />);

    const emptyStatusMessage = screen.getByText(
      /Write a pokemon name to start!/i
    );

    expect(emptyStatusMessage).toBeInTheDocument();

    const searchInput = screen.getByRole("searchbox", { name: "searchbar" });
    userEvent.type(searchInput, "bulbasaur");
    userEvent.type(searchInput, "{enter}");

    const pokemonCardName = await screen.findByText(/bulbasaur/i);

    expect(pokemonCardName).toBeInTheDocument();
  });
});
