import Clock from "@/components/Clock";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Digital Clock",
	description: "Digital Clock",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Clock />
		</section>
	);
};

export default page;
