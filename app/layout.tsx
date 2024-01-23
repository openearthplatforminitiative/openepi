import "./globals.css";
import type { Metadata } from "next";
import { fetchPartners } from "@/sanity/api";
import { Inter } from "next/font/google";
import NavBarSection from "@/app/components/NavBarSection";
import Footer from "@/app/components/Footer";
import { ReactNode } from "react";

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
	children: ReactNode;
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
