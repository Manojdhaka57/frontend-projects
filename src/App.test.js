import { render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "./contexts/theme-context";

test("renders learn react link", () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/Home theme/i);
  expect(linkElement).toBeInTheDocument();
});
