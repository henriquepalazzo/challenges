import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Jacinto Gloria"></Player>);
  const playerInformation = screen.getByText(/Jacinto Gloria/i);
  const buttons = screen.getAllByRole("button");
  expect(playerInformation).toBeInTheDocument();
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {});
