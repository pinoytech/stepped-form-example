import { z } from "zod";

export const trainerSchema = z.object({
  name: z.string().min(1, "Pokemon trainer name is required"),
  birthdate: z
    .string()
    .refine(
      (date) => new Date(date) <= new Date(),
      "Birthdate must be in the past"
    )
    .refine(
      (date) =>
        new Date(date) <=
        new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      "Pokemon trainer must be at least 18 years old"
    ),
});

export const pokemonSchema = z.object({
  pokemons: z
    .array(
      z.object({
        name: z.string().min(1, "Pokemon name is required"),
      })
    )
    .min(1, "At least one pokemon is required")
    .max(6, "You can only add up to 6 pokemons"),
});

export const agreeToTermsSchema = z.object({
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});
