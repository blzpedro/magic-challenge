export interface Sets {
  sets: Set[]
}

export interface Set {
	code: string;
	name: string;
	type: string;
	border: string;
	mkm_id: number;
	booster: (string[] | string)[];
	mkm_name: string;
	releaseDate: string;
	magicCardsInfoCode: string;
	block: string;
}