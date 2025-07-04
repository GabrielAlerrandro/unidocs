import type { InputHTMLAttributes } from "react"

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base  placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        {...rest}
      />
    </>
  )
}
