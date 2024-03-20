import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation></Navigation>);
  const linkPlay = screen.getByText(/Play/i);
  const linkHistory = screen.getByText(/History/i);
  expect(linkPlay).toBeInTheDocument();
  expect(linkHistory).toBeInTheDocument();
});
