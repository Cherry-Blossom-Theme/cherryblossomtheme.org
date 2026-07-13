import { RouterClient } from "../../components/router-client";
import { createMetadata } from "../../lib/metadata";

export const metadata = createMetadata("AsterIDE", "A calm Cherry Blossom theme for AsterIDE with simplified colors and focused contrast.");

export default function AsteridePage() {
  return <RouterClient />;
}
