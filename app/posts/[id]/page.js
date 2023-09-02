
import { sanityClient, urlFor } from "../../../sanity";
import Plaincard from '@/components/Plaincard';


  // fetching data
  const fetchPost = async () => {
    const faq = `*[_type == "post"]{_id, title, slug, mainImage, description}`
    const res = await sanityClient.fetch(faq);
    return res;
    
  } 
    
  async function Posts() {
    const myPosts = await fetchPost();
    
    return (
        <div>
            {myPosts.map((post) => (
                <Plaincard
                description={post.description}
                img={post.mainImage}
                key={post._id}
                postid={post.slug}
                title={post.title} 
                url={post.slug.current}
                type="post"
                
                />
              ))}
        </div>
    )

    
    
  }
  
  

export default Posts