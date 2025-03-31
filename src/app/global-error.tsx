"use client";
import { Button } from "@/components/ui/button";

// Error boundaries must be Client Components

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    // global-error must include html and body tags
    <html>
      <body className="w-svw h-svh flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2>Something went wrong!</h2>
          <Button onClick={() => reset()} className="cursor-pointer">
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
