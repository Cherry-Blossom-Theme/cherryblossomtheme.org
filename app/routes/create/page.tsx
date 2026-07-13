import { RouterClient } from "../../../components/router-client";
import { createMetadata } from "../../../lib/metadata";

export const metadata = createMetadata("Create", "Generate palette assets for editors, terminals, and UI frameworks.");

export default function CreatePage() {
  return <RouterClient />;
}
