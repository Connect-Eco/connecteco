"use client";

import Link from "next/link";
import CustomButton from "../CustomButton";
import { NavbarItem } from "./NavBarItem";
import { Location } from "./Location";
import UseWindowWidth from "../UseWindowWidth";

const linksMenu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Sobre a Connect Eco",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export function Navbar({ onItemClick }) {
  const windowWidth = UseWindowWidth();

  return (
    <nav className="nav">
      <ul className="nav__menu">
        {linksMenu.map((link) => (
          <NavbarItem key={link.href} href={link.href} onClick={onItemClick}>
            {link.label}
          </NavbarItem>
        ))}
        <CustomButton className={"button"} onClick={onItemClick}>
          <Link href={"/faca-parte"}>Faça parte</Link>
        </CustomButton>
        {windowWidth < 390 && <Location />}
      </ul>
    </nav>
  );
}
