export const formatNumber = (number) => {
	const percentage = Math.round(number * 100);
	return `${String(percentage).slice(0, 2)}%`;
};
