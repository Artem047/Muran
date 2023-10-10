import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

const Map = () => {
  const position = [55.809019, 37.704565];
  const fillBlueOptions = { fillColor: "blue" };
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="w-[740px] h-[340px] rounded-br-[120px]">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <CircleMarker center={position} pathOptions={fillBlueOptions} radius={30}>
        <Popup>
          <Link to="https://yandex.ru/maps/-/CDUp7Q68" target="blank">
            <b>MURAN</b> <br /> Дистрибьютор косметики для волос
          </Link>
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
};

export default Map;
