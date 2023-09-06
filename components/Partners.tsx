import { sanityClient } from "../sanity";

const fetchPartners = async () => {
	const faq = `*[_type == "partner"]{_id, title, description, url, slug}`;
	const res = await sanityClient.fetch(faq);
	return res;
};

async function Partners() {
	const partners = await fetchPartners();

	return <div>hei</div>;
}

export default Partners;
