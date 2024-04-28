"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});
export default function Dashboard() {
  return (
    <main className='main'>
      <Map
        position={[51.505, -0.09]}
        zoom={13}
        className='mapContainer'
      />
    </main>
  );
}
