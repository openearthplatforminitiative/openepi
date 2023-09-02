"use client"
import React from "react";

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

const features = [
  {
    icon: (
      <ChatBubbleBottomCenterTextIcon className="h-6 w-6" strokeWidth={2} />
    ),
    title: "The need for a digital infrastructure",
    description:
      "There is a need for a robust and accessible digital infrastructure for open data and algorithms on weather, water, earth, and vegetation, across projects, sectors, and contexts – providing a base for the necessary local technology innovation. The Open Earth Platform (OpenEPI) is an initiative to prepare for such an infrastructure.",
  },
  {
    icon: <ArrowTrendingUpIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Community and stakeholder",
    description:
      "During the feasibility study, the OpenEPI project will collaborate with relevant stakeholders, including governments, businesses, and non-profit organizations, to prepare for a permanent infrastructure. Among the relevant topics to be assessed during the project, are organization of a permanent body or network of bodies and structures, governance, business model, financing, legal issues, and licensing regimes.",
  },
  {
    icon: <SquaresPlusIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Feasibility study",
    description:
      "In 2023-2024, OpenEPI will be run as a feasibility study, where we will explore and develop the infrastructural concept and the blueprint for the platform architecture, the conceptual set-up for local innovation, and demonstrate actual solutions based on open data and algorithms, addressing specific use cases in sub-Saharan Africa. OpenEPI will be designed around open principles for data and software, building on the work by Norwegian Norad – regarding Digital Public Goods (DGP).",
  },
  {
    icon: <LightBulbIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Digital Public Goods",
    description:
      "Open data, AI, and digital technologies will be crucial catalysts for collaboration, innovation, and informed decision-making in addressing climate change – building resilience and preparing for climate mitigation in agriculture and fisheries.",
  },
];

export function FeatureSection6() {
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
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection6;
