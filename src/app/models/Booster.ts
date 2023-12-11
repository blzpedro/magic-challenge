export interface Booster {
  cards: Card[]
}

export interface Card {
	name?: string;
	manaCost?: string;
	cmc?: number;
	colors?: string[];
	colorIdentity?: string[];
	type?: string;
	supertypes?: string[];
	types?: string[];
	subtypes?: string[];
	rarity?: string;
	set?: string;
	setName?: string;
	text?: string;
	artist?: string;
	number?: string;
	power?: string;
	toughness?: string;
	layout?: string;
	multiverseid?: string;
	imageUrl?: string;
	rulings?: Rulings[];
	foreignNames?: ForeignNames[];
	printings?: string[];
	originalText?: string;
	originalType?: string;
	legalities?: Legalities[];
  flavor?: string;
	id?: string;
}

export interface Rulings {
	date?: string;
	text?: string;
}

export interface ForeignNames {
	name?: string;
	text?: string;
	type?: string;
	flavor: string | null;
	imageUrl?: string;
	language?: string;
	multiverseid?: number;
}

export interface Legalities {
	format?: string;
	legality?: string;
}