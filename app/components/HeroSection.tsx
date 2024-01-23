"use client";

import { Typography } from "@mui/material";
import { BackgroundDesktop } from "@/app/icons/BackgroundDesktop";
import { BackgroundMobile } from "@/app/icons/BackgroundMobile";

export function HeroSection() {
	return (
		<section className="bg-[#F2F4EF] flex-row pt-[128px] lg:pb-[182px] pb-[96px] px-8 justify-center">
			<div className="flex lg:flex-row flex-col-reverse justify-center items-center ">
				<div className="lg:w-[40%] pl-5">
					<Typography
						variant="h1"
						color="black"
						className="lg:text-[45px] text-[36px]"
					>
						Open Earth Platform Initiative
					</Typography>
					<Typography className="mt-6 mb-10 text-black/80 md:pr-16 lg:text-[36px] text-[32px] font-[400]">
						An open, global digital innovation platform for climate and nature.
					</Typography>
				</div>
				<div className="lg:m-0 mb-[64px]">
					<div className="lg:flex hidden">
						<BackgroundDesktop />
					</div>
					<div className="lg:hidden flex">
						<BackgroundMobile />
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
