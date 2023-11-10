import React from "react";
import { OpenEPILogo } from "@/components/icons/OpenEPILogo";

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
