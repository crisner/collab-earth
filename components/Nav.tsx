"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlignLeft, ChevronsLeft } from "lucide-react";
import NavButtons from "./NavButtons";
import { TextLarge } from "./ui/Typography/TextLarge";
import TextSmall from "./ui/Typography/TextSmall";
import { useSession } from "next-auth/react";
import styles from "./Nav.module.css";

const Nav = () => {
  const { data: session } = useSession();
  const [showNav, setShowNav] = useState(false);
  return (
    <nav>
      <Button
        variant="outline"
        size="icon"
        className={`absolute ${styles.nav_hamburger__button}  bg-white my-2 ml-2 nav-toggle${showNav ? "--on hidden" : "--off inline-flex"}`}
        onClick={() => setShowNav(!showNav)}
      >
        <AlignLeft />
      </Button>
      <section
        className={`nav ${showNav ? "nav-open block" : "hidden"} ${
          styles.nav
        } bg-background shadow-lg  h-full`}
      >
        <header className={styles.header}>
          <div>
            <TextLarge>{session?.user?.username}</TextLarge>
            {session?.user?.role && (
              <TextSmall>{session?.user?.role}</TextSmall>
            )}
          </div>
          <div className={styles.collapse}>
            <Button variant="ghost" size="icon" className="h-8 w-8 my-2" onClick={() => setShowNav(!showNav)}>
              <ChevronsLeft />
            </Button>
          </div>
        </header>
        <NavButtons />
      </section>
    </nav>
  );
};

export default Nav;
