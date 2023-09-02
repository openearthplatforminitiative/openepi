import React from 'react'
import { sanityClient, urlFor } from "../../../sanity";
import Partners from "../../../components/Partners"

type PageProps = {
    params: {
      id: string
    }
  }

  
async function Partnerlist({params: {id}}: PageProps)  {
   
    return (
    <div>
        <Partners />
    </div>
  )
}

export default Partnerlist