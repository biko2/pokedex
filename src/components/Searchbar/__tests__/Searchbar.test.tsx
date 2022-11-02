import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Searchbar } from "../Searchbar";

const onSearchMock = jest.fn();

describe("Searchbar", () => {
  it("renders component", () => {
    render(<Searchbar onSearch={onSearchMock} />);

    const searchInput = screen.getByRole("searchbox", { name: "searchbar" });
    const icon = screen.getByRole("img");
    const placeholder = searchInput.getAttribute("placeholder");

    expect(searchInput).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(placeholder).toEqual("Search a Pokemon...");
  });

  it("sends onSearch event", () => {
    render(<Searchbar onSearch={onSearchMock} />);

    const searchInput = screen.getByRole("searchbox", { name: "searchbar" });

    expect(searchInput).toBeInTheDocument();

    userEvent.type(searchInput, "Irrelevant");
    userEvent.type(searchInput, "{enter}");

    expect(onSearchMock).toHaveBeenCalledWith("Irrelevant");
  });
});
