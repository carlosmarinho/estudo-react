import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render the app", () => {
  render(<App />);
  const app = screen.getByText(/minha aplicação/i);
  expect(app).toBeInTheDocument();
});
