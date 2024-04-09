import type { Metadata } from "next";
import { createClient } from "@/prismicio";
import "./globals.css";


//FONTS
import { Licorice } from "next/font/google";
const licorice = Licorice({
	variable: "--font-licorice",
	weight: "400",
	subsets: ["latin"],
});
import { DM_Serif_Display } from "next/font/google";
const DMSerif = DM_Serif_Display({
	variable: "--font-dmserif",
	weight: "400",
	subsets: ["latin"],
});
import { DM_Sans } from "next/font/google";
const DMSans = DM_Sans({
	variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// METADATA
export async function generateMetadata(): Promise<Metadata> {
	//call Prismic API
	const client = createClient();

	//fetch settings custom type data
	const settings = await client.getSingle("settings");

	return {
		title: settings.data.meta_title || "Recettes de Pâtisseries Délicieuses | KitchenBlog",
		description: settings.data.meta_description || "Découvrez des recettes de pâtisseries délicieuses et faciles à réaliser avec votre robot pâtissier KitchenAid. Des gâteaux, tartes, et desserts pour régaler toute la famille.",
		openGraph: {
			images: [settings.data.og_image.url || ""],
		},
	};
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${licorice.variable} ${DMSerif.variable} ${DMSans.variable}`}>{children}</body>
    </html>
  );
}
