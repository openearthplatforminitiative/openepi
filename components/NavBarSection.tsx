
import { OpenEPILogo } from "@/public/icons/OpenEPILogo";
import React from "react";

export default function NavBarSection() {
	return (
		<nav
			style={{ background: "#FBFDF8" }}
			className=" pl-[56px] pt-[56px] border-0"
		>
			<OpenEPILogo />
		</nav>
	);
}
