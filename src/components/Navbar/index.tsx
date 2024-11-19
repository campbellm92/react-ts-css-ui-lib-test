import { ComponentProps } from "react";
import styles from "./styles.module.css";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = ComponentProps<"nav"> & {
  variant?: "basic" | "with-branding";
  navItems?: NavItem[];
  logo?: React.ReactNode;
};

export const Navbar = ({
  variant = "basic",
  navItems = [],
  logo,
  ...props
}: NavbarProps) => {
  const className = [styles.navbar, styles[`navbar-${variant}`]].join(" ");

  return (
    <nav {...props} className={className}>
      {logo && <div className={styles.logo}>{logo}</div>}
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
