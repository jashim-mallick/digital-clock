"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { SlidingNumber } from "./ui/shadcn-io/sliding-number";

const Clock = () => {
	const [time, setTime] = useState({
		hours: "00",
		minutes: "00",
		seconds: "00",
		meridiem: "XX",
		date: format(new Date(), "eeee, dd LLLL yyyy"),
	});

	useEffect(() => {
		const updateClock = () => {
			const now = new Date();
			setTime({
				hours: format(now, "hh"),
				minutes: format(now, "mm"),
				seconds: format(now, "ss"),
				meridiem: format(now, "a"),
				date: format(now, "eeee, dd LLLL yyyy"),
			});
		};

		updateClock(); // initial update
		const interval = setInterval(updateClock, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="space-y-4">
			<div className="flex items-center gap-1 font-mono text-9xl">
				<SlidingNumber
					number={time.hours}
					padStart
				/>
				<span className="animate-pulse">:</span>

				<SlidingNumber
					number={time.minutes}
					padStart
				/>
				<span className="animate-pulse">:</span>

				<SlidingNumber
					number={time.seconds}
					padStart
				/>
				<span className="ms-2">{time.meridiem}</span>
			</div>

			<div className="text-center text-6xl">{time.date}</div>
		</div>
	);
};

export default Clock;
