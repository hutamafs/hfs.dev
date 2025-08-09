"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const CENTER = { lat: -37.8136, lng: 144.9631 }; // Melbourne

const avatarIcon = new L.DivIcon({
  className: "",
  html: `
    <div style="position:relative; width:64px; height:64px; border-radius:9999px; display:grid; place-items:center;">
      <img src="/avatar.png" style="width:64px; height:64px; border-radius:9999px; object-fit:cover;" />
    </div>
  `,
  iconSize: [64, 64],
  iconAnchor: [32, 32],
});

export default function MapInner() {
  return (
    <MapContainer
      center={CENTER}
      zoom={12}
      scrollWheelZoom={false}
      className="h-full w-full"
      attributionControl={false}
      zoomControl={true}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <Marker position={CENTER} icon={avatarIcon} />
    </MapContainer>
  );
}
