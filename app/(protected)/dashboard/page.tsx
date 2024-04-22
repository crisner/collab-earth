"use client";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});
export default function Dashboard() {
  return (
    <main className='main'>
      {/* <Header /> */}
      <Map
        position={[51.505, -0.09]}
        zoom={13}
        className='mapContainer'
      />
    </main>
  );
}
