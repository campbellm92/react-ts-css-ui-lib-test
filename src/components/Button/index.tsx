import { ComponentProps } from "react";
import "./styles.module.css";

type ButtonProps = ComponentProps<"button">;

export const Button = ({ ...props }: ButtonProps) => {
  return <button {...props} />;
};
