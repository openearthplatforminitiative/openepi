"use client";

import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { CustomButton } from "@/sanity/api";
import { PromotedLogo } from "@/public/icons/PromotedLogo";

interface FeatureCardProps {
	title: string;
	children: React.ReactNode;
	buttons: CustomButton[];
	promoted: boolean;
}

export default function FeatureCard({
	title,
	children,
	buttons,
	promoted,
}: FeatureCardProps) {
	return (
		<Card style={{ background: "#F2F4EF" }} shadow={false}>
			<CardBody className="grid justify-start m-[40px]">
				{promoted &&
					<div className="absolute lg:left-[-40px] left-[-15px] top-[-40px]"><PromotedLogo /> </div>
				}
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
				<div className=" flex flex-row gap-3 mt-[24px]">
					{(buttons ?? []).map((button) => {
						return (
							<a key={button.url} href={button.url}>
								<Button
									size="sm"
									style={{ backgroundColor: "#006D41" }}
									className="rounded-full h-fit font-[500] capitalize text-white text-[14px] mt-[22px] lg:mt-[0]"
								>
									{button?.text}
								</Button>
							</a>
						);
					})}
				</div>
			</CardBody>
		</Card>
	);
}
