"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react"

const NavButtons = () => {
  return (
    <div className="grid gap-4 py-4">
      <Button variant="ghost" className="justify-start">
        Profile
      </Button>
      <Button variant="ghost" className="justify-start">
        Notes
      </Button>
      <Button
        variant="ghost"
        onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
        className="justify-start"
      >
        Signout
      </Button>
    </div>
  );
};

export default NavButtons;
