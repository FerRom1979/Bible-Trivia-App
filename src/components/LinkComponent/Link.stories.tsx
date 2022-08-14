import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LinkComponent from "./index";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

export default {
  title: "Link",
  argTypes: {
    text: {
      defaultValue: "Link Component",
      control: { type: "text" },
    },
    routed: {
      defaultValue: "/",
      control: { type: "text" },
    },
    color: {
      defaultValue: "#000",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof LinkComponent>;

export const Template: ComponentStory<typeof LinkComponent> = ({ ...rest }) => (
  <div style={{ width: "400px", margin: "auto" }}>
    <Router location="/" navigator={createMemoryHistory({ initialEntries: ["/"] })}>
      <LinkComponent {...rest} />
    </Router>
  </div>
);
