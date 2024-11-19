import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button", // Category in Storybook UI
  component: Button,
  parameters: {
    layout: "centered", // Centers the component in the preview
  },
  tags: ["autodocs"], // Enables automatic documentation
  argTypes: {
    variant: {
      control: { type: "select" }, // Dropdown control
      options: ["primary", "secondary", "outline"], // Available variants
    },
    size: {
      control: { type: "select" }, // Dropdown control
      options: ["small", "medium", "large"], // Available sizes
    },
    isLoading: {
      control: { type: "boolean" }, // Toggle control
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me", // Default label
    variant: "primary", // Default variant
    size: "medium", // Default size
    isLoading: false, // Default loading state
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "medium",
    isLoading: false,
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "medium",
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    variant: "primary",
    size: "medium",
    isLoading: true, // Shows a loading spinner
  },
};
