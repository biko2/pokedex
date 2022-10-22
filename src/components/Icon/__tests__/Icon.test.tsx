import { render, screen } from "@testing-library/react";
import { Icon } from "../Icon";
import { Pokeball } from "../icons/Pokeball";

describe("Icon", () => {
  it("renders component", () => {
    render(<Icon icon={Pokeball} />);

    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });
});
