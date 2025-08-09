"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const CENTER = { lat: -37.8136, lng: 144.9631 };

const avatarIcon = new L.DivIcon({
  className: "",
  html: `
    <div style="
      position:relative; width:64px; height:64px; border-radius:9999px;
      display:grid; place-items:center;
    ">
      <img
        src="/avatar.png"
        style="
          width:64px; height:64px; border-radius:9999px; object-fit:cover;
        "
      />
    </div>
  `,
  iconSize: [64, 64],
  iconAnchor: [43, 43],
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
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution="&copy; Stadia Maps &copy; OpenMapTiles &copy; OpenStreetMap"
      />
      <Marker position={CENTER} icon={avatarIcon} />
    </MapContainer>
  );
}
