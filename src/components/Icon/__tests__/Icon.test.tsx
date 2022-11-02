import { render, screen } from "@testing-library/react";
import { Icon } from "../Icon";
import { Search } from "../icons/Search";

describe("Icon", () => {
  it("renders component", () => {
    render(<Icon icon={Search} />);

    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });
});
