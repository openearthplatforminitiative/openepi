
import Link from 'next/link';
import { sanityClient, urlFor } from "../sanity";

function Plaincard({img, postid, url, title, description, type}) {
    return (
        <Link key={postid} href={`/${type}/${url}`}>
        <div className="border text-white border-lightgray rounded-lg  group cursor-pointer overflow-hidden">
          <img className="h-60 w-full object-cover hover:text-hover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(img).url()} alt={title} />
          <div className="flex justify-between p-5 bg-white">
            <div>
              <p className="text-lg font-bold text-black">{title}</p>
              <p className="text-sm text-darkgray pt-2 font-light">{description}</p>
              <p className="text-sm font-light text-darkdarkblue pt-3">Learn more</p>     
            </div>
          </div>
        </div>
      </Link>
    )
  }

  export default Plaincard

