import "./globals.css";
import type { Metadata } from "next";
import { fetchPartners } from "@/sanity/api";
import { Inter } from "next/font/google";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { ReactNode } from "react";
import ThemeRegistry from "@/app/components/ThemeRegistry";
import HelpButton from "@/app/components/HelpButton";

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
			<ThemeRegistry options={{ key: "mui" }}>
				<body className={"bg-[#FBFDF8] min-h-screen flex flex-col"}>
					<NavBar />
					<main className="w-full flex-1 flex justify-center">{children}</main>
					<HelpButton />
					<Footer partners={partners} />
				</body>
			</ThemeRegistry>
		</html>
	);
}
