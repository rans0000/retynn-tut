"use client";

import { myAction } from "@/actions/servercalls";
import { useTimer } from "@/utils/hooks";
import { TFormData } from "@/utils/types";
import { useActionState } from "react";

const initialData: TFormData = { name: "", email: "", message: "" };

function ContactForm() {
  const [state, formAction, isPending] = useActionState<TFormData, FormData>(
    myAction,
    initialData
  );

  const { a, updateValue } = useTimer(200);

  return (
    <div>
      Timer is {a}
      <br />
      <button type="button" onClick={() => updateValue(5)}>
        Update
      </button>
      <form action={formAction} className="flex flex-col gap-1 w-max">
        <input
          type="text"
          name="name"
          className="border-2"
          defaultValue={state.name}
        />
        <input
          type="text"
          name="email"
          className="border-2"
          defaultValue={state.email}
        />
        <textarea
          name="message"
          className="border-2"
          defaultValue={state.message}
        ></textarea>
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </form>
      {state.success && <p>Success: {state.success}</p>}
      {state.error && <p>Error: {state.error}</p>}
    </div>
  );
}

export default ContactForm;
