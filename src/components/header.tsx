import HeaderStatus from "./header-status";

function Header() {
  return (
    <header className="header-wrapper  fixed w-full h-14 border-b-1 border-gray-400 px-2 flex justify-between items-center">
      <span className="font-bold">Shopper</span>
      <HeaderStatus />
    </header>
  );
}

export default Header;
