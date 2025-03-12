"use server";

import { TFormData } from "@/utils/types";
import { redirect } from "next/navigation";

export const myAction = async (
  prevState: TFormData,
  formData: FormData
): Promise<TFormData> => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log("in server....ss");

  // validation
  if (!name || !email || !message) {
    return { name, email, message, error: "invalid form" } as TFormData;
  }
  // db

  redirect("/");

  return { name, email, message, success: "form submitted" } as TFormData;
};
