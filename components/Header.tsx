import React from "react";
import Grid from "./ui/Grid/Grid";
import Logo from "@/public/logo.svg";
import styles from "./Header.module.css";

const Header = ({ fixed, ...props }: any) => {
  return (
    <Grid className={`${fixed ? "absolute " : ""}${styles.header}`}>
{props.children}
      <div className="py-4 col-span-1 col-start-2 flex items-center">
        <Logo className={styles.logo} />
      </div>
    </Grid>
  );
};

export default Header;
