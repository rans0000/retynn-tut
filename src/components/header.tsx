import Link from "next/link";
import HeaderStatus from "./header-status";
import { Separator } from "@/components/ui/separator";

function Header() {
  return (
    <header className="header-wrapper  fixed w-full h-14 border-b-1 border-gray-400 px-2 flex justify-between items-center gap-5">
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
