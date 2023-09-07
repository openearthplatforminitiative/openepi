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
				<Typography variant="h5" color="blue-gray" className="mb-2">
					{title}
				</Typography>
				<Typography className="font-normal !text-gray-500">
					{children}
				</Typography>
			</CardBody>
		</Card>
	);
}
