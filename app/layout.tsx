import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { fetchPartners } from "@/sanity/api";
import NavBarSection from "@/components/NavBarSection";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Open Earth Platform Initiative (OpenEPI)",
	description:
		"An open, global digital innovation platform for climate and nature",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const partners = await fetchPartners();
	return (
		<html lang="en" className={inter.className}>
			<body>
				<NavBarSection />
				{children}
				<Footer partners={partners} />
			</body>
		</html>
	);
}
