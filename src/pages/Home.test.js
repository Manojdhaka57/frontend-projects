import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { ThemeProvider } from "../contexts/theme-context";
describe("HomePage", () => {
  test("Home page theme provided", () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    );
    const linkElement = screen.getByText(/Home theme/i);
    expect(linkElement).toBeInTheDocument();
  });
});
