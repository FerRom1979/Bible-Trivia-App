import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./index";

export default {
  title: "Button",

  argTypes: {
    text: {
      defaultValue: "Button",
      control: { type: "text" },
    },
    type: {
      defaultValue: "button",
      control: { type: "select" },
      options: ["submit", "reset", "button"],
    },
    className: {
      defaultValue: "Enter your name",
      control: { type: "select" },
      options: ["text", "button-login"],
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (props) => (
  <div style={{ width: "400px", margin: "auto" }}>
    <Button {...props} />
  </div>
);
