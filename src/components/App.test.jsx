// @vitest-environment jsdom
import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";
import About from "./About";
import Article from "./Article";

test("Header renders correctly with name prop", () => {
  const { container } = render(<Header name="Under the Dome" />);
  const h1 = container.querySelector("h1");
  expect(h1).not.toBeNull();
  expect(h1.textContent).toBe("Under the Dome");
});

test("About renders an aside with image and text", () => {
  const { container } = render(<About image="https://via.placeholder.com/215" about="My blog description" />);
  const img = container.querySelector("img");
  expect(img).not.toBeNull();
  expect(img.getAttribute("src")).toBe("https://via.placeholder.com/215");
});

test("Article renders a title, date, and preview", () => {
  const { container } = render(<Article title="My First Post" date="January 1, 2026" preview="Hello world!" />);
  const h3 = container.querySelector("h3");
  expect(h3).not.toBeNull();
  expect(h3.textContent).toBe("My First Post");
});