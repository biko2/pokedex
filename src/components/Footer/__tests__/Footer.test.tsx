import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  it("renders component", () => {
    render(<Footer />);

    const githubLogo = screen.getByRole("img", { name: /github logo/i });
    const pokeapiLogo = screen.getByRole("img", { name: /pokeapi logo/i });

    expect(githubLogo).toBeInTheDocument();
    expect(pokeapiLogo).toBeInTheDocument();
  });
});
