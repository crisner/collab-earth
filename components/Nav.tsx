import React from "react";
import { Button } from "@/components/ui/button";
import { AlignLeft } from "lucide-react";
import {
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Logo from "@/public/logo.svg";

const Nav = () => {
  return (
    <div className="py-4 ml-4 ">
      <Sheet>
          <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
      <AlignLeft />
      </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetHeader>
              <SheetTitle><Logo className='logo' /></SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
              <Button variant="link" >Profile</Button>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
              <Button variant="link" >Notes</Button>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
              <Button variant="link" >Signout</Button>
              </div>
              
            </div>
            
          </SheetContent>
        </Sheet>
    </div>
  );
};

export default Nav;
