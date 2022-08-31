import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders link", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});

// test style
test("button has correct inital color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("button has correct inital text", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toHaveTextContent("Change to Midnight Blue");
});

test("button turns MidnightBlue after click", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  //click button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("checkbox disables on first click enables on second click", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
  expect(colorButton).toBeEnabled();

  //check button starts enabled
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

  //check that checkbox starts unchecked
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
});

test("checkbox is grey when disabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  //change button to MidnightBlue
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

//combine in a describe

describe("spaces before camel letetrs", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("RedBlood")).toBe("Red Blood");
  });
  test("works for multiple inner capital letter", () => {
    expect(replaceCamelWithSpaces("RedBloodTomorrow")).toBe(
      "Red Blood Tomorrow"
    );
  });
});
