"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavbarItem({ children, href, onClick, ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="mav__menu_direction">
      <Link
        href={href}
        {...props}
        onClick={onClick}
        className={`nav__menu__link
          ${isActive ? "nav__menu__link-active" : "nav__menu__link-inactive"}`
      }
      >
        {children}
      </Link>
    </li>
  );
}
 