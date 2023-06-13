import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import AppHeader from "./header";

describe("AppHeader", () => {
  it("should render", () => {
    render(<AppHeader />);
  });

  it("should render title", () => {
    render(<AppHeader />);
    expect(screen.getByText("Cats World")).toBeInTheDocument();
  });

  it("should render add cat button", () => {
    render(<AppHeader />);
    expect(screen.getByText("Add Cat")).toBeInTheDocument();
  });

  it("should render link to home page", () => {
    render(<AppHeader />);
    expect(screen.getByText("Cats World")).toHaveAttribute("href", "/");
  });
});
