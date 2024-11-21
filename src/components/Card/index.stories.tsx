import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./index";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible card component that can display images, titles, and content.",
      },
    },
  },

  argTypes: {
    variant: {
      options: ["basic-primary", "basic-secondary"],
      control: { type: "radio" },
      description: "Defines the style variant of the card.",
    },
    image: {
      control: { type: "text" },
      description: "An image or React node to display in the card.",
    },
    title: {
      control: { type: "text" },
      description: "The title text of the card.",
    },
    content: {
      control: { type: "text" },
      description: "The content text or React node of the card.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicCardPrimary: Story = {
  args: {
    variant: "basic-primary",
    title: "Card Title",
    content: "This is basic card content. Add more details here.",
  },
};

export const BasicCardSecondary: Story = {
  args: {
    variant: "basic-secondary",
    title: "Card Title",
    content: "This is basic card content. Add more details here.",
  },
};

export const OutlineCardPrimary: Story = {
  args: {
    variant: "outline-primary",
    title: "Card Title",
    content: "This is basic card content. Add more details here.",
  },
};

export const OutlineCardSecondary: Story = {
  args: {
    variant: "outline-secondary",
    title: "Card Title",
    content: "This is basic card content. Add more details here.",
  },
};
