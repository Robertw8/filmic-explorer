const formatDate = (dateString) => {
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		timeZoneName: "short",
	};
	const formattedDate = new Date(dateString).toDateString(undefined, options);

	return formattedDate;
};

export default formatDate;
