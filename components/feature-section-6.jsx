"use client"
import React from "react";
import { sanityClient, urlFor } from "../sanity";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleBottomCenterTextIcon,
  LightBulbIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/solid";

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="white" shadow={false}>
      <CardBody className="grid justify-start">
       
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className=" font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}


// fetching search data 
const fetchFeatured = async () => {
  const faq = `*[_type == "featured"]{_id, title, url, description}`
  const res = await sanityClient.fetch(faq);
 return res;

}

export async function FeatureSection6() {
  const data = await fetchFeatured();
  console.log(data);
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Our mission
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Local Tech Innovation 
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          The OpenEPI project mission is to support local innovation that is fueld by a global platform of open data, technology and AI.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-3 gap-y-12 md:grid-cols-2">
        {data.map(({ title, description }) => (
          <FeatureCard key={title} icon="placeholder" title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection6;
