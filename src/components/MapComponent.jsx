import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const markers = [
  { id: 0, name: "สำนักงานใหญ่", position: { lat: 13.81033039717323, lng: 100.69464826592231 } },
];

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDPfCjO_yxPMFqS8o2hZxQAxBoMAUI4-n8",
    libraries: ['marker']
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={markers[0].position}
      zoom={17}
    >
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} />
      ))}
    </GoogleMap>
  );
}

export default MapComponent;
