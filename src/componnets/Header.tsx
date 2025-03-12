import Link from "next/link";
import React from "react";

const menuItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Company", url: "/about/company" },
  { title: "Blog", url: "/blog" },
  { title: "Contact", url: "/contact" },
];

function Header() {
  return (
    <div className="flex bg-amber-400">
      <ul>
        {menuItems.map((menu) => (
          <Link className="px-1" key={menu.url} href={menu.url}>
            {menu.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Header;
