import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input></Input>);
  const input = screen.get;
});

test("calls callback on every user input", async () => {
  const onChange = jest.fn();
  const user = userEvent.setup();

  render(<Input onChange={onChange}></Input>);
  const input = screen.getByRole("textbox");
  await user.type(input, "Anything");
  expect(onChange).toHaveBeenCalledTimes(8);
});
