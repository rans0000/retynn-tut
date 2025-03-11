"use client";

import { myAction } from "@/actions/servercalls";
import React, { useActionState } from "react";

function ContactForm() {
  const [state, formAction, isPending] = useActionState(myAction, null);

  return (
    <div>
      <form action={formAction} className="flex flex-col gap-1 w-max">
        <input type="text" name="name" className="border-2" />
        <input type="text" name="email" className="border-2" />
        <textarea name="message" className="border-2"></textarea>
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </form>
      <p>state is {state}</p>
    </div>
  );
}

export default ContactForm;
