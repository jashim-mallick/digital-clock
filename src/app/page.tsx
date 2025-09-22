import { AuroraText } from "@/components/magicui/aurora-text";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Digital Clock",
	description: "Digital Clock",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<AuroraText className="text-5xl font-bold">
					Nextjs Starter Template
				</AuroraText>
			</section>
		</>
	);
};

export default page;
