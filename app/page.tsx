import { RouterClient } from "../components/router-client";
import { homePageMetadata } from "../lib/metadata";

export const metadata = homePageMetadata;

export default function HomePage() {
  return <RouterClient />;
}
