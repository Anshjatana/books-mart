"use client";
import React from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = ({ size, setShow }) => {
  const router = useRouter();

  const GoToHome = () => {
    router.push("/");
  };
  return (
    <nav>
      <div className="flex items-center justify-between text-white bg-[darkcyan] px-4 py-4 fixed top-0 left-0 w-full z-50">
        <Link href={"/"}>
          {" "}
          <span className="font-sans cursor-pointer font-bold ml-10 text-lg uppercase">
            Books Mart
          </span>{" "}
        </Link>
        <div className="">
          <Link href={"/cart"}>
            <div className="relative right-4 cursor-pointer">
              <ShoppingCart size={40} />
              <span className="bg-red-600 absolute -top-2 -right-3 text-sm font-normal px-2 py-1 rounded-full text-white">
                {size}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
