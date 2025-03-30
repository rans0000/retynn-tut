"use server";

import { TAuthFormState } from "@/lib/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const authenticateUser = async (
  state: TAuthFormState,
  formData: FormData
): Promise<TAuthFormState> => {
  const email = (formData.get("email") || "").toString().trim();

  /**
   * Validation & sanitation:
   * Never trust data from client side.
   * We'll use libraries like Zod to properly validate & sanitize user data in actual production.
   */

  if (!email) {
    return { email: email, error: "Please enter your 'retyn' Id" };
  }

  //   valid emails end with '@retyn.ai'
  const matched = email.match(/^\w+@retyn.ai$/g);

  if (!matched) {
    return { email, error: "User Id not recognised!" };
  }

  /**
   *   if user data is valid, set the auth cookies and redirect him to the home page.
   * the middleware will notice the cookie and will make sure it reaches the protected pages.
   * this is an http only cookie, to make sure clients don't have access to this.
   * the expires/maxAge prop makes sure that the cookie becomes invalid after the given interval.
   *
   * since this is a simple project, we wont be using any encryption.
   * In production, always encrypt sensitive data like clientkeys, env vars etc if they are accessible to outsiders.
   */

  const cookiesStore = await cookies();
  cookiesStore.set({
    name: "userId",
    value: email,
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60, // expires in 1 hour
  });

  redirect("/");
};

export const logoutUser = async () => {
  (await cookies()).delete("userId");
  redirect("/login");
};
