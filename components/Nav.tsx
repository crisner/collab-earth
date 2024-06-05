import React from "react";
import { Button } from "@/components/ui/button";
import { AlignLeft, ChevronsLeft } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavButtons from "./NavButtons";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import styles from "./Nav.module.css";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    // <div className="py-4 ml-4 ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full bg-white my-4 ml-4">
            <AlignLeft />
          </Button>
        </SheetTrigger>
        <SheetContent className={`nav ${styles.nav}`} side="left">
          <SheetHeader className={styles.header}>
            <SheetTitle>
              {session?.user?.username}
            </SheetTitle>
            {session?.user?.role && <SheetDescription>
            {session?.user?.role}
            </SheetDescription>}
          </SheetHeader>
          <NavButtons />
          <SheetClose className={styles.collapse} asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronsLeft />
            </Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    // </div>
  );
};

export default Nav;
