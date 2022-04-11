import React from "react";
import { render, screen } from "@testing-library/react";
import InputField from "./index";

describe("initial input field state", () => {
  test("input renders the correct label field", () => {
    render(<InputField label="label" />);
    const inputField = screen.getByTestId("input");
    expect(inputField.textContent).toBe("label");
  });

  test("input should not be disabled", () => {
    render(<InputField label="User ID" disabled />);
    const inputField = screen.getByTestId("input");
    const input = inputField.querySelector("input");
    expect(input).toBeDisabled();
  });
});
