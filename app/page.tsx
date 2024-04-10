"use client";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className={styles.main}>
      <Map
        position={[51.505, -0.09]}
        zoom={13}
        className={styles.mapContainer}
      />
      <Footer />
    </main>
  );
}
