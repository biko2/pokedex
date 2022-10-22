import { render, screen } from "@testing-library/react";
import { Tag } from "../Tag";

describe("Tag", () => {
  it("renders component with ground color", () => {
    render(<Tag color="ground">Ground</Tag>);

    const tag = screen.getByText(/ground/i);

    expect(tag).toBeInTheDocument();
    expect(tag).toHaveStyle(`background-color: var(--type-ground)`);
  });
});
