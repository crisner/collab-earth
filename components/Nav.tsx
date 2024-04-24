"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AlignLeft, ChevronsLeft } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/public/logo.svg";
import { signOut } from "next-auth/react"
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className="py-4 ml-4 ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <AlignLeft />
          </Button>
        </SheetTrigger>
        <SheetContent className={`nav ${styles.nav}`} side="left">
          <SheetHeader>
            <SheetTitle>
              <Logo className="logo" />
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Button variant="ghost" className="justify-start">
              Profile
            </Button>
            <Button variant="ghost" className="justify-start">
              Notes
            </Button>
            <Button variant="ghost" onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })} className="justify-start">
              Signout
            </Button>
          </div>
          <SheetClose className={styles.collapse} asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronsLeft />
            </Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Nav;
