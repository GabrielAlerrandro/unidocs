import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .string()
    .email("Enter a valid email address")
    .refine((val) => val.endsWith("@uni.edu"), {
      message: "Email must end with @uni.edu",
    }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .nonempty("Password is required"),
})

export type LoginSchema = z.infer<typeof loginSchema>
