import { RouterClient } from "../../../components/router-client";
import { createMetadata } from "../../../lib/metadata";

export const metadata = createMetadata("Palette", "Explore the Cherry Blossom Theme palette across dark and light modes.");

export default function PalettePage() {
  return <RouterClient />;
}
