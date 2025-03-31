import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import HeaderStatus from "./header-status";
import LogoutBtn from "./logout-btn";

type TProps = {
  userId: boolean;
};

function Header({ userId }: TProps) {
  return (
    <header className="header-wrapper  fixed w-full h-14  px-2 flex justify-between items-center gap-5 shadow-md shadow-blue-100">
      <span className="font-bold">Shopper</span>
      <nav className="ml-auto flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <Separator decorative orientation="vertical" />
      <HeaderStatus />
      {userId && (
        <>
          <Separator decorative orientation="vertical" />
          <LogoutBtn />
        </>
      )}
    </header>
  );
}

export default Header;
