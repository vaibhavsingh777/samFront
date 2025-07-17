import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const locations = [
  {
    name: "Mumbai",
    position: { lat: 19.076, lng: 72.8777 },
    link: "https://goo.gl/maps/YOUR_MUMBAI_LOCATION_LINK",
    pinColor: "#FFD700",
  },
  {
    name: "Pune",
    position: { lat: 18.5204, lng: 73.8567 },
    link: "https://goo.gl/maps/YOUR_PUNE_LOCATION_LINK",
    pinColor: "#FFD700",
  },
  {
    name: "Delhi",
    position: { lat: 28.6139, lng: 77.209 },
    link: "https://goo.gl/maps/YOUR_DELHI_LOCATION_LINK",
    pinColor: "#FFD700",
  },
  {
    name: "Indore",
    position: { lat: 22.7196, lng: 75.8577 },
    link: "https://goo.gl/maps/YOUR_INDORE_LOCATION_LINK",
    pinColor: "#FFD700",
  },
  {
    name: "Jaipur",
    position: { lat: 26.9124, lng: 75.7873 },
    link: "https://goo.gl/maps/YOUR_JAIPUR_LOCATION_LINK",
    pinColor: "#FFD700",
  },
];

const mapCenter = { lat: 22.9734, lng: 78.6569 }; // Center of India

const IndiaMap: React.FC = () => {
  return (
    <APIProvider apiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <Map
        defaultZoom={5}
        defaultCenter={mapCenter}
        style={{
          width: "100%",
          height: "100%",
          minHeight: "180px",
          minWidth: "200px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(26,35,126,0.10)",
        }}
        // To use advanced MapID styling, add: mapId="YOUR_MAP_ID"
      >
        {locations.map((loc) => (
          <AdvancedMarker key={loc.name} position={loc.position}>
            <a
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
              title={loc.name}
              style={{ textDecoration: "none" }}
            >
              <Pin
                background={loc.pinColor}
                glyphColor="#1A237E"
                borderColor="#fff"
                scale={1.3}
              />
            </a>
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
};

export default IndiaMap;
