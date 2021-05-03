type GoogleMapProps = {
  location: string;
};

function GoogleMap({ location }: GoogleMapProps) {
  const MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
  return (
    <iframe
      title="google maps"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}
        &q=${location}`}
    />
  );
}

export default GoogleMap;
