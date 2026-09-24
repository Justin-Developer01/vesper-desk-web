import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const variantClass = variant === "primary" ? "btn-primary" : "btn-ghost";
  const classes = ["btn", variantClass, className].filter(Boolean).join(" ");

  return <a className={classes} {...props} />;
}
