"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/product",
      name: "Product",
    },
  ];
  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="flex gap-x-4 w-full bg-blue-300">
        {links.map(({ href, name }, idx) => {
          return (
            <Link
              key={idx}
              href={href}
              className="text-white hover:text-red-400 hover:underline"
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
