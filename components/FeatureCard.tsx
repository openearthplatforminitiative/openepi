"use client";

import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { CustomButton } from "@/sanity/api";
import { PromotedLogo } from "@/components/icons/PromotedLogo";

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
		<Card
			style={{ background: promoted ? "#D1E8D5" : "#F2F4EF" }}
			shadow={false}
			className="mb-[24px] break-inside-avoid-column"
		>
			<CardBody className="p-[40px]">
				{promoted && (
					<div className="absolute lg:left-[-40px] left-[-15px] top-[-40px]">
						<PromotedLogo />{" "}
					</div>
				)}
				<Typography
					variant="h2"
					color="blue-gray"
					className="mb-[24px] text-[24px] font-[600]"
				>
					{title}
				</Typography>
				<Typography className="text-[16px] font-[400] text-black">
					{children}
				</Typography>
				<div className=" flex flex-row gap-3 mt-[24px]">
					{(buttons ?? []).map((button) => {
						return (
							<a key={button.url} href={button.url}>
								<Button
									size="sm"
									style={{ backgroundColor: "#006D41" }}
									className="rounded-full h-fit font-[500] capitalize text-white text-[16px] mt-[22px] lg:mt-[0]"
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
