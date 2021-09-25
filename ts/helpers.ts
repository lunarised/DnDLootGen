export const GSCToBase10 = (gold: number, silver: number, copper: number) => {
	return gold * 100 + silver * 10 + copper;
};

export const Base10ToGSC = (value: number) => {
	return {
		gold: Math.floor(value / 100),
		silver: Math.floor((value % 100) / 10),
		copper: Math.floor(value % 10),
	};
};
