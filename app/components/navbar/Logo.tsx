"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Logo = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="hidden md:block cursor-pointer transition-shadow duration-300 ease-in-out"
      height="80"
      width="80"
      src="/images/logo.png"
      style={{
        boxShadow: isHovered
          ? "0 4px 6px -1px rgba(56, 189, 248, 0.7), 0 2px 4px -1px rgba(56, 189, 248, 0.06)"
          : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default Logo;
