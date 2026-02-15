"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          alt="logo-hero-kidz"
          src={"/assets/logo.png"}
          width={60}
          height={60}
        />

         <h2 className="text-xl font-bold">Hero Kidz</h2>
      </Link>

     
    </>
  );
};

export default Logo;
