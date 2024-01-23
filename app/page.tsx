import { fetchFeatured } from "@/sanity/api";
import HeroSection from "@/app/components/HeroSection";
import MissionSection from "@/app/components/MissionSection";
import FeatureSection from "@/app/components/FeatureSection";
const Home = async () => {
	const featured = await fetchFeatured();
	return (
		<main>
			<HeroSection />
			<MissionSection />
			<FeatureSection featured={featured} />
		</main>
	);
};
export default Home;
