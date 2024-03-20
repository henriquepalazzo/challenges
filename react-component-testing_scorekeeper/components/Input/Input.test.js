import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      name={"Testing"}
      labelText="Testing label"
      placeholder={"Write here"}
      type={"text"}
      value={"Some value"}
      required={"required"}
    ></Input>
  );
  const input = screen.getByRole("textbox");

  expect(input).toHaveAttribute("id");
  expect(input).toHaveAttribute("name", "Testing");
  expect(input).toHaveAttribute("placeholder", "Write here");
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("value", "Some value");
  expect(input).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {
  const onChange = jest.fn();
  const user = userEvent.setup();

  render(<Input onChange={onChange}></Input>);
  const input = screen.getByRole("textbox");
  await user.type(input, "Anything");
  expect(onChange).toHaveBeenCalledTimes(8);
});
