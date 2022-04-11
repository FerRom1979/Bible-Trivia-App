import React from "react";
import { render, screen } from "@testing-library/react";
import HeroImage from "./index";

describe("initial input field state", () => {
  test("input renders the correct label field", () => {
    render(<HeroImage>Hero Image</HeroImage>);
    const inputField = screen.getByTestId("hero-image");
    expect(inputField.textContent).toBe("Hero Image");
  });
});
