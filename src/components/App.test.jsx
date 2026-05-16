import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "./Header";
import About from "./About";
import Article from "./Article";

test("Header renders correctly with name prop", () => {
  render(<Header name="Under the Dome" />);
  const headerEl = screen.getByRole("heading", { level: 1 });
  expect(headerEl.textContent).toBe("Under the Dome");
});

test("About renders an aside with image and text", () => {
  render(<About image="https://via.placeholder.com/215" about="My blog description" />);
  const aside = screen.getByRole("complementary");
  const img = screen.getByAltText("blog logo");
  expect(aside).toBeInTheDocument();
  expect(img.src).toBe("https://via.placeholder.com/215");
});

test("Article renders a title, date, and preview", () => {
  render(<Article title="My First Post" date="January 1, 2026" preview="Hello world!" />);
  const title = screen.getByRole("heading", { level: 3 });
  expect(title.textContent).toBe("My First Post");
});