"use client";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});
export default function Home() {
  const { status } = useSession();

  if (status === "authenticated") {
    redirect("/dashboard");
  }

  return status === "unauthenticated"  && (
    <main className={styles.main}>
      <Header fixed />
      <Map
        position={[51.505, -0.09]}
        zoom={13}
        className={styles.mapContainer}
      />
      <Footer />
    </main>
  );
}
