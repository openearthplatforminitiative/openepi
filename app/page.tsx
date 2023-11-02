import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import { fetchFeatured } from "@/sanity/api";
import MissionSection from "@/components/MissionSection";

export default async function HomePage() {
	const featured = await fetchFeatured();
	return (
		<main>
			<HeroSection />
			<MissionSection />
			<FeatureSection featured={featured} />
		</main>
	);
}
