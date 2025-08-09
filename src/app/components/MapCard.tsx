"use client";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./MapInner"), { ssr: false });

export default function MapCard() {
  return (
    <div className="relative overflow-hidden rounded-[28px] ring-1 ring-white/10 bg-[#0f1126]">
      <div className="map-theme-green h-[320px] md:h-[360px]">
        <LeafletMap />
      </div>
    </div>
  );
}
