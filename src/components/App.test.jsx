import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

test("renders App component without crashing", () => {
  render(<App />);
});

test("Header renders a header element with an h1 inside", () => {
  render(<Header name="Test Blog" />);
  const headerEl = screen.getByRole("banner");
  expect(headerEl).toBeInTheDocument();
  const h1El = screen.getByRole("heading", { level: 1 });
  expect(h1El).toHaveTextContent("Test Blog");
});

test("About renders an aside element with an img and a p", () => {
  render(<About about="About this blog" />);
  const asideEl = screen.getByRole("complementary");
  expect(asideEl).toBeInTheDocument();
  const imgEl = screen.getByRole("img");
  expect(imgEl).toBeInTheDocument();
  expect(imgEl).toHaveAttribute("src", "https://via.placeholder.com/215");
  expect(imgEl).toHaveAttribute("alt", "blog logo");
});

test("Article List renders a main element containing articles", () => {
  const mockPosts = [
    { id: 1, title: "Post 1", date: "Jan 1", preview: "Preview 1" }
  ];
  render(<ArticleList posts={mockPosts} />);
  const mainEl = screen.getByRole("main");
  expect(mainEl).toBeInTheDocument();
});

test("Article renders an article element with title, date, and preview", () => {
  render(<Article title="My Title" preview="My Preview" />);
  const articleEl = screen.getByRole("article");
  expect(articleEl).toBeInTheDocument();
  const h3El = screen.getByRole("heading", { level: 3 });
  expect(h3El).toHaveTextContent("My Title");
  const smallEl = screen.getByText("January 1, 1970");
  expect(smallEl).toBeInTheDocument();
});