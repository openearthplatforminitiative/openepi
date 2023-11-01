import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import { fetchFeatured } from "@/sanity/api";
import MissionSection from "@/components/MissionSection";
import NavBarSection from "@/components/NavBarSection";

export default async function HomePage() {
	const featured = await fetchFeatured();
	return (
		<main>
			<NavBarSection />
			<HeroSection />
			<MissionSection />
			<FeatureSection featured={featured} />
		</main>
	);
}
