// File path: components/Header.js

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

// Utility function to manage conditional classes
const classNames = (...classes) => classes.filter(Boolean).join(" ");

const Header = () => {
  const { hash: currentPath } = useLocation(); // Destructure to get the current URL hash
  const [openNavigation, setOpenNavigation] = useState(false); // State for navigation menu

  // Toggle the navigation menu and page scroll
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  // Close the navigation menu when a link is clicked
  const handleNavLinkClick = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-full z-50 border-b border-n-6",
        "lg:bg-n8/90 lg:backdrop-blur-sm",
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop:blur-sm"
      )}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave logo" />
        </a>

        {/* Navigation Menu */}
        <nav
          className={classNames(
            openNavigation ? "flex" : "hidden",
            "fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent"
          )}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleNavLinkClick}
                className={classNames(
                  "block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1",
                  item.onlyMobile && "lg:hidden",
                  "px-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold",
                  item.url === currentPath ? "z-2 lg:text-n-1" : "lg:text-n-1/50",
                  "lg:leading-5 lg:hover:text-n-1 xl:px-12"
                )}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        {/* Signup Link */}
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>

        {/* Sign In Button */}
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>

        {/* Mobile Menu Toggle Button */}
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
