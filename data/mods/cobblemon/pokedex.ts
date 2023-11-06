export const Pokedex: {[specieid: string]: ModdedSpeciesData} ={

	//#region Aegislash-Delta's Evolution Line
	honedge: {
		inherit: true,
		otherFormes: ["Honedge-Delta"],
		formeOrder: ["Honedge", "Honedge-Delta"],
	},
	honedgedelta: {
		num: 679,
		name: "Honedge-Delta",
		baseSpecies: "Honedge",
		forme: "Delta",
		types: ["Steel", "Ghost"],
		baseStats: {hp: 45, atk: 60, def: 47, spa: 35, spd: 80, spe: 58},
		abilities: {0: "Rough Skin"},
		heightm: 0.8,
		weightkg: 2,
		color: "Brown",
		evos: ["Doublade-Delta"],
		eggGroups: ["Mineral"],
	},
	doublade: {
		inherit: true,
		otherFormes: ["Doublade-Delta"],
		formeOrder: ["Doublade", "Doublade-Delta"],
	},
	doubladedelta: {
		num: 680,
		name: "Doublade-Delta",
		baseSpecies: "Doublade",
		forme: "Delta",
		types: ["Steel", "Fire"],
		baseStats: {hp: 64, atk: 85, def: 68, spa: 40, spd: 135, spe: 56},
		abilities: {0: "Flash Fire"},
		heightm: 0.8,
		weightkg: 4.5,
		color: "Brown",
		prevo: "Honedge-Delta",
		evoLevel: 35,
		eggGroups: ["Mineral"],
	},
	aegislash: {
		inherit: true,
		otherFormes: ["Aegislash-Blade", "Aegislash-Delta", "Aegislash-Delta-Blade"],
		formeOrder: ["Aegislash", "Aegislash-Blade", "Aegislash-Delta", "Aegislash-Delta-Blade"],
	},
	//#endregion

	//#region Dragetsu
	dragonair: {
		inherit: true,
		evos: ["Dragonite", "Dragetsu"],
	},
	dragetsu: {
		num: 20012,
		name: "Dragetsu",
		types: ["Dragon"],
		baseStats: {hp: 93, atk: 80, def: 88, spa: 120, spd: 127, spe: 92},
		abilities: {0: "Shed Skin", H: "Pure Guise"},
		heightm: 5,
		weightkg: 20,
		color: "Blue",
		prevo: "Dragonair",
		evoType: "useItem",
		evoItem: "Dragon Scale",
		eggGroups: ["Water 1", "Dragon"],
	},
	//#endregion

	//#region New Eevees
	eevee: {
		inherit: true,
		evos: [
			// Original Evos
			"Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon",
			// New Evos
			"Veneon",
		],
	},
	veneon: {
		num: 10013,
		name: "Veneon",
		types: ["Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 60, def: 130, spa: 95, spd: 110, spe: 65},
		abilities: {0: "Liquid Ooze", H: "Corrosion"},
		heightm: 1,
		weightkg: 28,
		color: "Purple",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Black Sludge",
		eggGroups: ["Field"],
	},
	//#endregion

	//#region Garchomp-Delta's Evolution Line
	gible: {
		inherit: true,
		otherFormes: ["Gible-Delta"],
		formeOrder: ["Gible", "Gible-Delta"],
	},
	gibledelta: {
		num: 2007,
		name: "Gible-Delta",
		baseSpecies: "Gible",
		forme: "Delta",
		types: ["Dragon", "Ice"],
		baseStats: {hp: 58, atk: 45, def: 50, spa: 60, spd: 50, spe: 37},
		abilities: {0: "Slush Rush", H: "Own Tempo"},
		heightm: 0.7,
		weightkg: 20.5,
		color: "White",
		evos: ["Gabite-Delta"],
		eggGroups: ["Dragon", "Monster"],
	},
	gabite: {
		inherit: true,
		otherFormes: ["Gabite-Delta"],
		formeOrder: ["Gabite", "Gabite-Delta"],
	},
	gabitedelta: {
		num: 2008,
		name: "Gabite-Delta",
		baseSpecies: "Gabite",
		forme: "Delta",
		types: ["Dragon", "Ice"],
		baseStats: {hp: 68, atk: 55, def: 52, spa: 85, spd: 80, spe: 70},
		abilities: {0: "Slush Rush", H: "Own Tempo"},
		heightm: 1.4,
		weightkg: 56,
		prevo: "Gible-Delta",
		evoLevel: 24,
		evos: ["Garchomp-Delta"],
		eggGroups: ["Dragon", "Monster"],
	},
	garchomp: {
		inherit: true,
		otherFormes: ["Garchomp-Mega", "Garchomp-Delta"],
		formeOrder: ["Garchomp", "Garchomp-Mega", "Garchomp-Delta"],
	},
	garchompdelta: {
		num: 445,
		name: "Garchomp-Delta",
		baseSpecies: "Garchomp",
		baseForme: "Delta",
		types: ["Dragon", "Ice"],
		baseStats: {hp: 94, atk: 90, def: 105, spa: 102, spd: 114, spe: 95},
		abilities: {0: "Slush Rush", H: "Own Tempo"},
		heightm: 1.9,
		weightkg: 95,
		color: "Blue",
		prevo: "Gabite-Delta",
		evoLevel: 48,
		eggGroups: ["Dragon", "Monster"],
	},
	//#endregion
	
	//#region Gorochu
	raichu: {
		inherit: true,
		evos: ["Gorochu"],
	},
	gorochu: {
		num: 2010,
		name: "Gorochu",
		types: ["Electric"],
		baseStats: {hp: 60, atk: 120, def: 90, spa: 90, spd: 130, spe: 110},
		abilities: {0: "Static", 1: "Transistor"},
		heightm: 1,
		weightkg: 45,
		color: "Yellow",
		prevo: "Raichu",
		evoType: "levelHold",
		evoItem: "Lightning Rod",
		eggGroups: ["Fairy", "Field"],
	},
	//#endregion

	//#region Greninja-Delta
	frogadier: {
		inherit: true,
		evos: ["Greninja", "Greninja-Delta"],
	},
	greninja: {
		inherit: true,
		otherFormes: ["Greninja-Bond", "Greninja-Ash", "Greninja-Delta"],
		formeOrder: ["Greninja", "Greninja-Bond", "Greninja-Ash", "Greninja-Delta"],
	},
	greninjadelta: {
		num: 658,
		name: "Greninja-Delta",
		baseSpecies: "Greninja",
		forme: "Delta",
		types: ["Water", "Rock"],
		baseStats: {hp: 72, atk: 115, def: 85, spa: 83, spd: 66, spe: 109},
		abilities: {0: "Torrent", H: "Precedence"},
		heightm: 1.5,
		weightkg: 40,
		color: "Orange",
		eggGroups: ["Water 1"],
	},
	//#endregion

	//#region Lopunny-Delta
	buneary: {
		inherit: true,
		evos: ["Lopunny", "Lopunny-Delta"],
	},
	lopunny: {
		inherit: true,
		otherFormes: ["Lopunny-Mega", "Lopunny-Delta"],
		formeOrder: ["Lopunny", "Lopunny-Mega", "Lopunny-Delta"],
	},
	lopunnydelta: {
		num: 428,
		name: "Lopunny-Delta",
		baseSpecies: "Lopunny",
		forme: "Delta",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 75, atk: 85, def: 76, spa: 60, spd: 92, spe: 92},
		abilities: {0: "Cute Charm", 1: "Fatalize", H: "Queenly Majesty"},
		heightm: 1.3,
		weightkg: 28.3,
		color: 'Gray',
		eggGroups: ["Field", "Human-Like"],
	},
	//#endregion

	//#region Lucaurus
	riolu: { // Adjusting Riolu's Evolution Paths.
		inherit: true,
		evos: ["Lucario", "Lucaurus"],
	},
	lucaurus: {
		num: 2004,
		name: "Lucaurus",
		types: ["Dark", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 97, def: 91, spa: 75, spd: 91, spe: 101},
		abilities: {0: "Strong Jaw", 1: "Anger Point", H: "Unburden"},
		heightm: 2,
		weightkg: 120,
		color: "Blue",
		prevo: "Riolu",
		evoType: "levelFriendship",
		evoCondition: "at night",
		eggGroups: ["Field", "Human-Like"]
	},
	//#endregion

	//#region Raticate-Delta's Evolution line
	rattata: {
		inherit: true,
		otherFormes: ["Rattata-Alola", "Rattata-Delta"],
		formeOrder: ["Rattata", "Rattata-Alola", "Rattata-Delta"],
	},
	rattatadelta: {
		num: 19,
		name: "Rattata-Delta",
		baseSpecies: "Rattata",
		forme: "Delta",
		types: ["Grass", "Normal"],
		baseStats: {hp: 40, atk: 27, def: 34, spa: 40, spd: 42, spe: 70},
		abilities: {0: "Run Away", 1: "Thick Fat", H: "Technician"},
		heightm: 0.3,
		weightkg: 3.5,
		color: "Green",
		evos: ["Raticate-Delta"],
		eggGroups: ["Field"],
	},
	raticate: {
		inherit: true,
		otherFormes: ["Raticate-Alola", "Raticate-Delta"],
		formeOrder: ["Raticate", "Raticate-Alola", "Raticate-Delta"],
	},
	raticatedelta: {
		num: 20,
		name: "Raticate-Delta",
		baseSpecies: "Raticate",
		forme: "Delta",
		types: ["Grass", "Electric"],
		baseStats: {hp: 85, atk: 42, def: 66, spa: 70, spd: 88, spe: 62},
		abilities: {0: "Minus", 1: "Thick Fat", H: "Technician"},
		heightm: 0.7,
		weightkg: 18.5,
		prevo: "Rattata-Delta",
		evoLevel: 20,
		evoCondition: "during day",
		eggGroups: ["Field"],
	},
	//#endregion

	//#region Sableye-Mega
	sableye: {
		inherit: true,
		otherFormes: ["Sableye-Mega", "Sableye-Delta"],
		formeOrder: ["Sableye", "Sableye-Delta", "Sableye-Mega"],
	},
	sableyedelta: {
		num: 302,
		name: "Sableye-Delta",
		baseSpecies: "Sableye",
		forme: "Delta",
		types: ["Ghost", "Rock"],
		baseStats: {hp: 80, atk: 20, def: 60, spa: 40, spd: 75, spe: 105},
		abilities: {0: "No Guard", 1: "Sturdy", H: "Unaware"},
		heightm: 0.5,
		weightkg: 11,
		color: "Purple",
		eggGroups: ["Human-Like"],
	},
	//#endregion

	//#region Steelix-Delta
	onix: {
		inherit: true,
		evos: ["Steelix", "Steelix-Delta"],
	},
	steelix: {
		inherit: true,
		otherFormes: ["Steelix-Mega", "Steelix-Delta"],
		formeOrder: ["Steelix", "Steelix-Mega", "Steelix-Delta"],
	},
	steelixdelta: {
		num: 208,
		name: "Steelix-Delta",
		baseSpecies: "Steelix",
		forme: "Delta",
		types: ["Ground", "Psychic"],
		baseStats: {hp: 85, atk: 55, def: 65, spa: 75, spd: 200, spe: 30},
		abilities: {0: "Overcoat", 1: "Telepathy", H: "Regenerator"},
		heightm: 9.2,
		weightkg: 400,
		prevo: "Onix",
		evoType: "trade",
		evoItem: "Shulker Shell",
		eggGroups: ["Mineral"],

	},
	//#endregion

	//#region Wooper-Delta & Quaxolotl
	wooper: { // Adjusting Wooper's Evos
		inherit: true,
		otherFormes: ["Wooper-Paldea", "Wooper-Delta"],
		formeOrder: ["Wooper", "Wooper-Paldea", "Wooper-Delta"],
	},
	wooperdelta: {
		num: 194,
		name: "Wooper-Delta",
		baseSpecies: "Wooper",
		forme: "Delta",
		types: ["Water", "Fairy"],
		baseStats: {hp: 45, atk: 20, def: 35, spa: 55, spd: 45, spe: 10},
		abilities: {0: "Cute Charm", 1: "Water Absorb", H: "Sheer Force"},
		heightm: 0.4,
		weightkg: 11,
		color: "Pink",
		evos: ["Quaxolotl"],
		eggGroups: ["Water 1", "Field"],
	},
	quaxolotl: {
		num: 2002,
		name: "Quaxolotl",
		types: ["Water", "Fairy"],
		baseStats: {hp: 100, atk: 65, def: 65, spa: 55, spd: 85, spe: 60},
		abilities: {0: "Strong Psyche", 1: "Water Absorb", H: "Sheer Force"},
		heightm: 1.8,
		weightkg: 223,
		color: "Pink",
		prevo: "Wooper-Delta",
		evoLevel: 20,
		eggGroups: ["Water 1", "Fairy"],
	},
	//#endregion

	//#region Yanfern & Yanmellia
	yanfern: {
		num: 2005,
		name: "Yanfern",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Grass", "Flying"],
		baseStats: {hp: 75, atk: 45, def: 35, spa: 65, spd: 75, spe: 105},
		abilities: {0: "Anticipation"},
		heightm: 1.2,
		weightkg: 38,
		color: "Green",
		evos: ["Yanmellia"],
		eggGroups: ["Grass", "Flying"],
	},
	yanmellia: {
		num: 2006,
		name: "Yanmellia",
		types: ["Grass", "Flying"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 96, atk: 71, def: 61, spa: 80, spd: 100, spe: 105},
		abilities: {0: "Aerilate"},
		heightm: 1.9,
		weightkg: 51.5,
		evoType: "levelMove",
		evoMove: "Ancient Power",
		eggGroups: ["Grass", "Flying"],
	}
	//#endregion

};