import Header from "@/components/header";
import { cookies } from "next/headers";
import React from "react";

export default async function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userId = !!(await cookies()).get("userId");

  return (
    <>
      <Header userId={userId} />
      <main className="main-wrapper flex flex-col h-dvh overflow-y-auto mt-14 mb-10 px-2 py-4">
        {children}
      </main>
    </>
  );
}
