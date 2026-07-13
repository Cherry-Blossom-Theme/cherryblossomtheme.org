import { RouterClient } from "../../components/router-client";
import { asteridePageMetadata } from "../../lib/metadata";

export const metadata = asteridePageMetadata;

export default function AsteridePage() {
  return <RouterClient />;
}
