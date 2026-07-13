import { RouterClient } from "../../../components/router-client";
import { createPageMetadata } from "../../../lib/metadata";

export const metadata = createPageMetadata;

export default function CreatePage() {
  return <RouterClient />;
}
