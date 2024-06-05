"use client";

import "./header.css";
import React, { useState, useEffect } from "react";
import { Location } from "./Location";
import { Logo } from "./Logo";
import { Navbar } from "./NavBar";
import UseWindowWidth from "../UseWindowWidth";
import Link from "next/link";

export function Header() {
  const windowWidth = UseWindowWidth();
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickInside = () => {
      setIsOpen(false);
  };

  useEffect(() => {
    if (windowWidth > 768) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  return (
    <header className="header">
      <div className="header__container_content">
        <div className="header__menu">
          <div className="header__menu-logo">
            <Link href={"/"}>
              <Logo />
            </Link>
            {windowWidth > 768 && <Navbar />}
          </div>
          {windowWidth > 390 && <Location />}
          {windowWidth < 768 && (
            <button
                       className={`hamburger-menu__button ${
                isOpen ? "hamburger-menu__button--white" : "hamburger-menu__button--black"
              }`}
              onClick={toggleMenu}
            ></button>
          )}
        </div>
        {isOpen && (
          <div onClick={handleClickInside}>
            <Navbar onItemClick={toggleMenu} />
          </div>
        )}
      </div>
    </header>
  );
}
