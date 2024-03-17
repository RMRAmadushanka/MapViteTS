import type { Place } from "../api/Place";

interface MapProps {
  palce: Place | null;
}

export default function Map({ place }: MapProps) {
  return <div>Map</div>;
}
