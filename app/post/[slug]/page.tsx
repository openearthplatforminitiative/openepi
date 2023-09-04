
import { sanityClient, urlFor } from "../../../sanity";
import Plaincard from '@/components/Plaincard';

import PortableText from "react-portable-text"
import Header from "../../../components/Header"
import Footer3 from "@/components/footer-3";

  // fetching data
  const fetchPost = async () => {
    const faq = `*[_type == "post" && slug.current == $slug][0]{_id, title, slug, mainImage, description, body}`
    const res = await sanityClient.fetch(faq, {
      slug: "about-project",
  });
    return res;
    
  } 

  
    
  async function Post({ slug }: any) {
    
    const myPost = await fetchPost();
    return (
       
      <div className=" mx-auto">
      <Header />  
      <div className="p-3 max-w-5xl mx-auto">
      <PortableText 
            className="mt-10"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={myPost.body}
            serializers={{
                h1: (props: any) => (
                    <h1 className="text-4xl font-sans my-3 text-gray-700" {...props} />
                ),
                h2: (props: any) => (
                    <h2 className="text-2xl font-sans my-3 text-gray-700" {...props} />
                ),
                h3: (props: any) => (
                    <h3 className="text-xl font-sans my-3 text-gray-700" {...props} />
                ),
                normal: (props: any) => (
                    <p className="text-l font-sans my-4 text-gray-700" {...props} />
                ),
                li: ({ children }: any) => (
                    <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                    <a href={href} className="text-blue hover:underline">
                        {children}
                    </a>
                ),
                }
            }
            />
          </div>
          <Footer3 />
      </div>
    )

    
    
  }
  
  

export default Post