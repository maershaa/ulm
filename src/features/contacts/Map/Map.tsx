import { MapWrapper, MapFrame } from './Map.styled';

const Map = () => {
  return (
    <MapWrapper>
      <MapFrame
        src="https://www.openstreetmap.org/export/embed.html?bbox=30.6585%2C46.4830%2C30.6645%2C46.4868&layer=mapnik&marker=46.484933%2C30.661522"
        title="ULM factory location"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </MapWrapper>
  );
};

export { Map };
