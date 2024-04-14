import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./Footer.module.css";
import TextSmall from "./ui/Typography/TextSmall";
import Grid from "./ui/Grid/Grid";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const redirectToLogin = () => router.push("/signin");
  return (
    <Grid>
      <div
        className={`${styles.footer} flex justify-center items-center gap-4 p-2 col-span-12`}
      >
        <TextSmall>
          Join the Conversation: Log in to Discuss Conservation Findings{" "}
        </TextSmall>
        <Button onClick={redirectToLogin} variant="outline">Log in</Button>
      </div>
    </Grid>
  );
};

export default Footer;
