import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureSection";
import { fetchFeatured } from "@/sanity/api";

export default async function HomePage() {
	const featured = await fetchFeatured();
	return (
		<main>
			<HeroSection />
			<FeatureCard featured={featured} />
		</main>
	);
}
