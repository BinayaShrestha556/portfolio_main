"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

import React, { useEffect, useState } from "react";
interface NavbarActionsProps {
  routes: {
    label: string;
    href: string;
  }[];
}

const NavbarActions: React.FC<NavbarActionsProps> = ({ routes }) => {
  const [active, setActive] = useState("#home");

  const [mounted, isMounted] = useState(false);
  useEffect(() => {
    isMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <ul className="flex gap-1 bg-white/10 items-center px-2 backdrop-blur-sm shadow-inner py-2.5 lg:px-3.5 lg:py-4 shadow-white/5 h-fit rounded-full text-sm">
      {routes.map((e) => (
        <li key={e.label}>
          {" "}
          <Link
            className={cn(
              "md:hover:text-white  text-nowrap px-3 py-1.5 md:hover:underline rounded-full text-muted-foreground transition",
              active === e.href &&
                " text-black pointer-events-none bg-primary font-bold"
            )}
            onClick={() => setActive(e.href)}
            href={e.href}
          >
            {e.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarActions;
