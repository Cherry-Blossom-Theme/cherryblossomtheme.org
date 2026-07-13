import { RouterClient } from "../components/router-client";
import { siteTagline } from "../theme";
import { createMetadata } from "../lib/metadata";

export const metadata = createMetadata("Home", siteTagline);

export default function HomePage() {
  return <RouterClient />;
}
