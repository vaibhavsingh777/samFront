import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Custom small icon
const smallIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [18, 28], // smaller size
  iconAnchor: [9, 28],
  popupAnchor: [0, -28],
  shadowSize: [28, 28],
});

const locations = [
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

const IndiaMap = () => (
  <MapContainer
    center={[22.9734, 78.6569]}
    zoom={4} // Reduced zoom
    style={{
      height: "140px",
      width: "100%",
      maxWidth: "170px",
      minWidth: "120px",
      borderRadius: "10px",
      margin: "0 auto",
      boxShadow: "0 2px 8px rgba(26,35,126,0.10)",
    }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    {locations.map((loc) => (
      <Marker key={loc.name} position={loc.position} icon={smallIcon}>
        <Popup>
          <a href={loc.link} target="_blank" rel="noopener noreferrer">
            {loc.name}
          </a>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default IndiaMap;
