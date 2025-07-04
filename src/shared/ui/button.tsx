import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant: "primary" | "secondary" | "destructive" | "link" | "icon"
  size: "sm" | "md" | "lg" | "icon"
  className?: string
  icon?: ReactNode
}

const typeVariant = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  link: "text-blue-600 underline-offset-4 hover:underline text-center text-sm text-blue-600 hover:text-blue-800 text-center",
  icon: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900",
}

const sizeVariant = {
  sm: "h-9 px-3",
  md: "h-10 px-4 py-2",
  lg: "h-11 px-8",
  icon: "h-10 w-10",
}

const baseStyle =
  "rounded-md text-sm font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer disabled:cursor-not-allowed  disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"

export function Button({
  children,
  variant,
  size,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${baseStyle} ${typeVariant[variant]} ${sizeVariant[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
