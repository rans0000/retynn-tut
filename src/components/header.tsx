import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import HeaderStatus from "./header-status";

function Header() {
  return (
    <header className="header-wrapper  fixed w-full h-14  px-2 flex justify-between items-center gap-5 shadow-md">
      <span className="font-bold">Shopper</span>
      <nav className="ml-auto flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <Separator decorative orientation="vertical" />
      <HeaderStatus />
    </header>
  );
}

export default Header;
