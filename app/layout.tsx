import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { fetchPartners } from "@/sanity/api";

const inter = Inter({ subsets: ["latin"] });

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
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Footer partners={partners} />
			</body>
		</html>
	);
}
