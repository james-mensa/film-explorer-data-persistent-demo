// components/ServiceWorkerRegistration.tsx
"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      process.env.NODE_ENV === "production"
    ) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("ServiceWorker registration successful:", registration.scope);
          })
          .catch((err) => {
            console.log("ServiceWorker registration failed:", err);
          });
      });
    }
  }, []);

  return null;
}