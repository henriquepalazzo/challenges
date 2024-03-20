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

test("calls callbacks when increasing or decreasing score", async () => {
  const handleIncreaseScore = jest.fn();
  const handleDecreaseScore = jest.fn();

  render(
    <Player
      onIncreasePlayerScore={handleIncreaseScore}
      onDecreasePlayerScore={handleDecreaseScore}
    ></Player>
  );

  const buttonIncreaseScore = screen.getByRole("button", {
    name: "Increase Score",
  });
  const buttonDecreaseScore = screen.getByRole("button", {
    name: "Decrease Score",
  });

  const user = userEvent.setup();

  await user.click(buttonIncreaseScore);
  await user.click(buttonDecreaseScore);

  expect(handleIncreaseScore).toHaveBeenCalled();
  expect(handleDecreaseScore).toHaveBeenCalled();
});
