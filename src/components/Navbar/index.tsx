import { ComponentProps, useEffect, useState } from "react";
import styles from "./styles.module.css";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = ComponentProps<"nav"> & {
  variant?:
    | "basic"
    | "with-branding"
    | "with-branding-sticky"
    | "with-branding-sticky-fade";
  navItems?: NavItem[];
  logo?: React.ReactNode;
};

export const Navbar = ({
  variant = "basic",
  navItems = [],
  logo,
  ...props
}: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (variant === "with-branding-sticky-fade") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [variant]);

  const className = [
    styles.navbar,
    styles[`navbar-${variant}`],
    scrolled && variant === "with-branding-sticky-fade" ? styles.scrolled : "",
  ]
    .filter(Boolean)
    .join(" ");

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
