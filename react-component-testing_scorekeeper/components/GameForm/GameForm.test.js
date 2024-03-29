import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm></GameForm>);
  const inputFields = screen.getAllByRole("textbox");
  const button = screen.getByRole("button", { name: /Create game/i });
  expect(inputFields).toHaveLength(2);
  inputFields.forEach((input) => expect(input).toBeInTheDocument());
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm></GameForm>);
  const name = screen.getByRole("heading", {
    level: 2,
    name: /Create a new game/i,
  });
  expect(name).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const mockCreateGame = jest.fn();
  render(<GameForm onCreateGame={mockCreateGame}></GameForm>);
  const user = userEvent.setup();
  const inputGameName = screen.getByLabelText(/Name of game/i);
  expect(inputGameName).toBeInTheDocument();
  const inputPlayersName = screen.getByLabelText(
    /Player names, separated by comma/i
  );
  expect(inputPlayersName).toBeInTheDocument();
  await user.type(inputGameName, "Backgamon");
  await user.type(inputPlayersName, "Marcos Kraus");
  const button = screen.getByRole("button", { name: /Create game/i });
  await user.click(button);

  await waitFor(() => {
    expect(mockCreateGame).toHaveBeenCalledWith({
      nameOfGame: "Backgamon",
      playerNames: ["Marcos Kraus"],
    });
  });
});

test("does not submit form if one input field is left empty", async () => {
  const mockCreateGame = jest.fn();
  render(<GameForm onCreateGame={mockCreateGame}></GameForm>);
  const user = userEvent.setup();

  const inputGameName = screen.getByLabelText(/Name of game/i);
  const inputPlayersName = screen.getByLabelText(
    /Player names, separated by comma/i
  );
  const button = screen.getByRole("button", { name: /Create game/i });
  await user.click(button);
  await waitFor(() => {
    expect(mockCreateGame).not.toHaveBeenCalled();
  });
});
