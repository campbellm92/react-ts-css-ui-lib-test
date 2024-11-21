import { ComponentProps } from "react";
import styles from "./styles.module.css";

type CardProps = ComponentProps<"div"> & {
  variant?: "basic-primary" | "basic-secondary";
  image?: React.ReactNode;
  title?: string;
  content?: string | React.ReactNode;
};

export const Card = ({
  variant = "basic-primary",
  image,
  title,
  content,
  ...props
}: CardProps) => {
  const className = [styles.card, styles[`card-${variant}`]].join(" ");

  return (
    <div {...props} className={className}>
      {image && <div className={styles.cardImage}>{image}</div>}
      {title && <div className={styles.cardTitle}>{title}</div>}
      {content && <div className={styles.cardContent}>{content}</div>}
    </div>
  );
};
