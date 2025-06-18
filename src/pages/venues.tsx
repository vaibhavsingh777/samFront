import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for marker icons in Leaflet
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Type the position properly
interface Location {
  name: string;
  position: [number, number];
  link: string;
}

const locations: Location[] = [
  {
    name: "Mumbai",
    position: [19.076, 72.8777],
    link: "https://goo.gl/maps/YOUR_MUMBAI_LOCATION_LINK",
  },
  {
    name: "Pune",
    position: [18.5204, 73.8567],
    link: "https://goo.gl/maps/YOUR_PUNE_LOCATION_LINK",
  },
  {
    name: "Delhi",
    position: [28.6139, 77.209],
    link: "https://goo.gl/maps/YOUR_DELHI_LOCATION_LINK",
  },
  {
    name: "Indore",
    position: [22.7196, 75.8577],
    link: "https://goo.gl/maps/YOUR_INDORE_LOCATION_LINK",
  },
  {
    name: "Jaipur",
    position: [26.9124, 75.7873],
    link: "https://goo.gl/maps/YOUR_JAIPUR_LOCATION_LINK",
  },
];

const IndiaMap = () => {
  return (
    <MapContainer
      center={[22.9734, 78.6569]}
      zoom={5}
      style={{
        height: "500px",
        width: "100%",
        margin: "2rem 0",
        borderRadius: "12px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((loc) => (
        <Marker key={loc.name} position={loc.position}>
          <Popup>
            <a href={loc.link} target="_blank" rel="noopener noreferrer">
              {loc.name}
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default IndiaMap;
