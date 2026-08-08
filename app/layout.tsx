import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-body", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AppsMakerDeluxe Studios | Android-Produkte",
  description: "AppsMakerDeluxe Studios präsentiert eigenständige Android-Produkte, die bei Google Play verfügbar sind.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    title: "AppsMakerDeluxe Studios",
    description: "Android Apps. Präzise gebaut.",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AppsMakerDeluxe Studios – Android Apps. Präzise gebaut." }],
  },
  twitter: { card: "summary_large_image", title: "AppsMakerDeluxe Studios", description: "Android Apps. Präzise gebaut.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body></html>;
}
