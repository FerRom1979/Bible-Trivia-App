import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputField from "./index";

export default {
  title: "Input",

  argTypes: {
    label: {
      defaultValue: "Name",
      control: { type: "text" },
    },
    flexDirection: {
      defaultValue: "column",
      options: ["row", "column"],
      control: { type: "select" },
    },
    isError: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    placeholder: {
      defaultValue: "Enter your name",
      control: { type: "text" },
    },
    required: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof InputField>;

export const Template: ComponentStory<typeof InputField> = (props) => (
  <div style={{ width: "400px", margin: "auto" }}>
    <InputField name="input" {...props} />
  </div>
);
