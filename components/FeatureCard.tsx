"use client";

import { Card, CardBody, Typography } from "@material-tailwind/react";

interface FeatureCardProps {
	title: string;
	children: React.ReactNode;
}

export default function FeatureCard({ title, children }: FeatureCardProps) {
	return (
		<Card style={{ background: "#F2F4EF" }} shadow={false}>
			<CardBody className="grid justify-start m-[40px]">
				<Typography
					variant="h2"
					color="blue-gray"
					className="mb-[24px] text-xl"
				>
					{title}
				</Typography>
				<Typography className="font-normal text-gray-700">
					{children}
				</Typography>
			</CardBody>
		</Card>
	);
}
