import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "gradient" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function sizeClasses(size: Size) {
  switch (size) {
    case "sm":
      return "px-4 py-2 text-sm";
    case "lg":
      return "px-8 py-4 text-base";
    case "md":
    default:
      return "px-6 py-3 text-sm";
  }
}

function variantClasses(variant: Variant) {
  switch (variant) {
    case "outline":
      return "border border-slate-300 text-slate-900 bg-white hover:bg-slate-50";
    case "ghost":
      return "border border-transparent text-slate-900 hover:bg-slate-100";
    case "gradient":
    default:
      // Match the deeper hero blues (PageHero uses `via-blue-900`)
      return "text-white bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 shadow-sm";
  }
}

const base =
  "inline-flex items-center justify-center rounded-xl font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

export default function Button(props: ButtonProps) {
  const { variant = "gradient", size = "md", className, children } = props;

  const cls = cn(base, sizeClasses(size), variantClasses(variant), className);

  if (typeof props.href === "string") {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} target={target} rel={rel} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}


