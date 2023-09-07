import HeroSection5 from "@/components/HeroSection5";
import FeatureCard from "@/components/FeatureSection6";
import { fetchFeatured } from "@/sanity/api";

export default async function HomePage() {
	const featured = await fetchFeatured();
	return (
		<main>
			<HeroSection5 />
			<FeatureCard featured={featured} />
		</main>
	);
}
