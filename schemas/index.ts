import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required!" })
    .min(1, "Email is required!")
    .email("Invalid email!"),

  password: z
    .string({ required_error: "Password is required!" })
    .min(1, "Password is required!")
    .min(8, "Password must be more than 8 characters!")
    .max(32, "Password must be less than 32 characters!"),

  code: z.optional(z.string()),
});

export const ResetSchema = z.object({
  email: z
    .string({ required_error: "Email is required!" })
    .min(1, "Email is required!")
    .email("Invalid email!"),
});

export const NewPasswordSchema = z.object({
  password: z
    .string({ required_error: "Password is required!" })
    .min(1, "Password is required!")
    .min(8, "Password must be more than 8 characters!")
    .max(32, "Password must be less than 32 characters!"),
});

export const RegisterSchema = z.object({
  name: z
    .string({ required_error: "Name is required!" })
    .min(1, { message: "Name is required!" }),

  email: z
    .string({ required_error: "Email is required!" })
    .min(1, "Email is required!")
    .email("Invalid email!"),

  password: z
    .string({ required_error: "Password is required!" })
    .min(1, "Password is required!")
    .min(8, "Password must be more than 8 characters!")
    .max(32, "Password must be less than 32 characters!"),
});
