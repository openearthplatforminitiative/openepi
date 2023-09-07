"use client";

import { Card, CardBody, Typography } from "@material-tailwind/react";

interface FeatureCardProps {
	title: string;
	children: React.ReactNode;
}

export default function FeatureCard({ title, children }: FeatureCardProps) {
	return (
		<Card color="white" shadow={false}>
			<CardBody className="grid justify-start">
				<Typography variant="h2" color="blue-gray" className="mb-2 text-xl">
					{title}
				</Typography>
				<Typography className="font-normal text-gray-700">
					{children}
				</Typography>
			</CardBody>
		</Card>
	);
}
