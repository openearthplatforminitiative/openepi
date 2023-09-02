import React from 'react'
import { sanityClient, urlFor } from "../../../sanity";
import Plaincard from '@/components/Plaincard';


  // fetching search data 
  const fetchPost = async ({id}) => {
    const faq = `*[_type == "post"]{_id, title, slug, mainImage, description}`
    const res = await sanityClient.fetch(faq);
    return res;
    
    
  
  } 
    
  async function Posts({id}) {
    const myPosts = await fetchPost({id});
    console.log(myPosts);
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
                type="storypost"
                
                />
              ))}
        </div>
    )

    
    
  }
  
  

export default Posts