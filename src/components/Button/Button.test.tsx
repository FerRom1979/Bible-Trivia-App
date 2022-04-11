import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("initial input field state", () => {
  test("input renders the correct label field", () => {
    render(<Button text="BUTTON" />);
    const inputField = screen.getByTestId("button");
    expect(inputField.textContent).toBe("BUTTON");
  });
});
