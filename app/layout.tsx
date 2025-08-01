import type { Metadata, Viewport } from "next";
import "./globals.css";
import OfflineBanner from "@/component/OfflineBanner";



const APP_NAME = "Character Explorer";
const APP_DEFAULT_TITLE = "Character Explorer - Discover & Explore";
const APP_TITLE_TEMPLATE = "%s | Character Explorer";
const APP_DESCRIPTION = "Explore and discover detailed character profiles with offline support using our modern PWA experience.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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