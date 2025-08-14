import { FormState, SignupFormSchema } from "@/lib/definition";
import { z } from "zod";

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    username: formData.get("username"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    const err = z.treeifyError(validatedFields.error);

    return {
      errors: err.errors,
    };
  }

  // Call the provider or db to create a user...
}
