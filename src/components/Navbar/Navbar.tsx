"use client";

import { useState, Fragment } from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SideNav from "./SideNav";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = usePathname()
  return (
    <header>
      <nav
        className="app-width flex items-center justify-between p-6 text-white"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src="/svgs/logo.svg" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div
          className="hidden lg:flex lg:gap-x-12 -ml-16"
          suppressHydrationWarning
        >
          <Link href="/" className={`text-sm font-normal leading-6 border-b-2 ${router === "/" ? " border-white" : "border-transparent"}`}>
            Home
          </Link>
          <Link href="/about" className={`text-sm font-normal leading-6 border-b-2 ${router === "/about" ? " border-white" : "border-transparent"}`}>
            About Us
          </Link>
          <Link href="#" className={`text-sm font-normal leading-6 `}>
            Featured
          </Link>
          <Link href="#" className={`text-sm font-normal leading-6 `}>
            Contact Us
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <MagnifyingGlassIcon className="w-10 h-10" />
          <button className="rounded-lg px-5 py-3 drop-shadow-3xl bg-secondary text-primary font-medium text-sm">
            <Link href="/login">Buy Now</Link>
          </button>
        </div>
      </nav>
      <SideNav
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Navbar;
