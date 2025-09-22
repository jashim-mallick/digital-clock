"use client";

import { format } from "date-fns";
import { useState } from "react";

const Clock = () => {
	const [hours, setHours] = useState(parseInt("00"));
	const [minutes, setMinutes] = useState(parseInt("00"));
	const [second, setSeconds] = useState(parseInt("00"));
	const [date, setDate] = useState(format(new Date(), "eeee, dd LLLL yyyy "));

	return <div className=""></div>;
};

export default Clock;
