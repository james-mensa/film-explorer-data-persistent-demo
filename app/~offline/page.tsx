
import type { Metadata } from "next";
import { OfflineClient } from "./OfflineContent";

export const metadata: Metadata = {
  title: "Offline",
  description: "You are currently offline. This page is a fallback for offline users.",
};


export default function OfflinePage() {
  return <OfflineClient />;
}
