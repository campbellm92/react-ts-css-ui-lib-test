import { ComponentProps } from "react";
import styles from "./styles.module.css";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large"; 
  isLoading?: boolean;
};

export const Button = ({
  variant = "primary",
  size = "medium",
  isLoading = false,
  ...props
}: ButtonProps) => {
  const className = [
    styles.button,
    styles[`button-${variant}`], // Use `styles` for the variant
    styles[`button-${size}`], // Use `styles` for the size
    props.className, // Allow additional custom classes
  ]
    .filter(Boolean) // Remove any undefined or falsy values
    .join(" ");

  return (
    <button
      {...props}
      className={className}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? <span className="spinner"></span> : props.children}
    </button>
  );
};
