import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Searchbar } from "../Searchbar";

const onSearchMock = jest.fn();
const onButtonClickMock = jest.fn();

describe("Searchbar", () => {
  it("renders component", () => {
    render(<Searchbar onSearch={onSearchMock} />);

    const searchInput = screen.getByTestId("searchbar");
    const icon = screen.getByRole("img");
    const placeholder = searchInput.getAttribute("placeholder");

    expect(searchInput).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(placeholder).toEqual("Search a Pokemon...");
  });

  it("sends onSearch event", () => {
    render(<Searchbar onSearch={onSearchMock} />);

    const searchInput = screen.getByTestId("searchbar");

    expect(searchInput).toBeInTheDocument();

    userEvent.type(searchInput, "Irrelevant");
    userEvent.type(searchInput, "{enter}");

    expect(onSearchMock).toHaveBeenCalledWith("Irrelevant");
  });

  it("renders component with button", () => {
    render(<Searchbar onSearch={onSearchMock} buttonText="irrelevantButton" />);

    const button = screen.getByText("irrelevantButton");

    expect(button).toBeInTheDocument();
  });

  it("sends onButtonClick event", () => {
    render(
      <Searchbar
        onSearch={onSearchMock}
        buttonText="irrelevantButton"
        onButtonClick={onButtonClickMock}
      />
    );

    const button = screen.getByText("irrelevantButton");
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(onButtonClickMock).toHaveBeenCalled();
  });
});
