import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./index";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["basic", "with-branding"],
      description: "Controls the style variant of the Navbar.",
    },
    navItems: {
      control: { type: "object" },
      description: "An array of navigation items with label and href.",
    },
    logo: {
      control: { type: "text" },
      description: "A logo or branding element.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navItems: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export const WithBranding: Story = {
  args: {
    variant: "with-branding",
    logo: "BRAND",
    navItems: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
