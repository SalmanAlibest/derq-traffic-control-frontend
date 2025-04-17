import { render, screen } from "@testing-library/react";
import App from "./src/App";
describe("App Component", () => {
  it("renders Traffic Dashboard", () => {
    render(<App />);
    expect(screen.getByText("Traffic Dashboard")).toBeInTheDocument();
  });
});
