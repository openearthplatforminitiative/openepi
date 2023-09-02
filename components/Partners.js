import { sanityClient, urlFor } from "../sanity";
import Plaincard from "./Plaincard";

const fetchPartners = async () => {
    const faq = `*[_type == "partner"]{_id, title, description, url, slug}`
    const res = await sanityClient.fetch(faq);
    return res;
    }   

async function Partners() {
    const partners = await fetchPartners();
    console.log(partners);
  return (
    <div>
        hei
    </div>
  )
}

export default Partners