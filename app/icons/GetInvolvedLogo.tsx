import { Box } from "@mui/material";
import Image from "next/image";

export const GetInvolvedLogo = () => (
	<Box className={"2xs:w-52 2xs:h-52 lg:w-80 lg:h-80 w-64 h64"}>
		<Image
			src={"/get-involved.png"}
			alt={"Get involved page logo"}
			width={208}
			height={176}
			className={"w-full h-full"}
		/>
	</Box>
);
