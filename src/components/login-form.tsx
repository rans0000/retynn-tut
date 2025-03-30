"use client";

import { authenticateUser } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TAuthFormState } from "@/lib/types";
import { useActionState } from "react";

const initialState: TAuthFormState = { email: "" };

function LoginForm() {
  // we use server actionss to manage this form

  const [state, formAction, isPending] = useActionState(
    authenticateUser,
    initialState
  );
  return (
    <form className="w-full max-w-lg" action={formAction}>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Login with your retyn id..."
                defaultValue={state.email}
              />
              {state.error && (
                <span className="text-xs text-red-500">
                  User name is wrong!!
                </span>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="default"
            type="submit"
            disabled={isPending}
            className="cursor-pointer"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default LoginForm;
