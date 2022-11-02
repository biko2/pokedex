import { render, screen } from "@testing-library/react";
import { Tag } from "../Tag";

describe("Tag", () => {
  it("renders component with ground type", () => {
    render(<Tag color="ground">ground</Tag>);

    const tag = screen.getByText(/ground/i);

    expect(tag).toBeInTheDocument();
    expect(tag).toHaveStyle(`background-color: var(--type-ground)`);
  });

  it("renders component with ghost type", () => {
    render(<Tag color="ghost">ghost</Tag>);

    const tag = screen.getByText(/ghost/i);

    expect(tag).toBeInTheDocument();
    expect(tag).toHaveStyle(`background-color: var(--type-ghost)`);
  });
});
