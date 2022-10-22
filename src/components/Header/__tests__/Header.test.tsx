import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header", () => {
  it("renders component", () => {
    render(<Header />);

    const headerTitle = screen.getByText(/my pokedex/i);
    const headerLogo = screen.getByAltText(/Pokedex logo/i);

    expect(headerTitle).toBeInTheDocument();
    expect(headerLogo).toBeInTheDocument();
  });
});
