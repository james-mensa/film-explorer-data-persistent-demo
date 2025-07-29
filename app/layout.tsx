import type { Metadata } from "next";
import "./globals.css";
import OfflineBanner from "@/component/OfflineBanner";

export const metadata: Metadata = {
  title: "Rick and Morty Explorer",
  description: "Explore characters from Rick and Morty with offline access",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        {/* Offline Banner - only shown when needed */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <OfflineBanner />
        </div>

        {/* Main content with responsive width */}
        <div className="pt-12 pb-8">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            {/* Responsive width constraints */}
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </div>
        </div>

        {/* Optional footer can be added here */}
      </body>
    </html>
  );
}