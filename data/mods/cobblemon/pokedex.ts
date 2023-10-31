export const Pokedex: {[specieid: string]: ModdedSpeciesData} ={
	hoothootdelta: {
		num: -1001,
		name: "HootHoot-Delta",
		baseSpecies: "HootHoot",
		types: ["Dark", "Flying"],
		baseStats: {hp: 60, atk: 25, def: 35, spa: 42, spd: 60, spe: 40},
		abilities: {0: "Insomnia", 1: "Frisk", H: "Forewarn"},
		heightm: 0.7,
		weightkg: 15,
		color: "Brown",
		evos: ["Noctowl-Delta"],
		eggGroups: ["Flying"],
	},
	noctowldelta: {
		num: -1002,
		name: "Noctowl-Delta",
		baseSpecies: "Noctowl",
		types: ["Dark", "Flying"],
		baseStats: {hp: 90, atk: 62, def: 60, spa: 90, spd: 70, spe: 80},
		abilities: {0: "Insomnia", 1: "Frisk", H: "Forewarn"},
		heightm: 1.6,
		weightkg: 38,
		color: "Brown",
		evos: ["Klocktowl"],
		prevo: "HootHoot-Delta",
		evoLevel: 20,
		eggGroups: ["Flying"],
	},
	klocktowl: {
		num: -1003,
		name: "Klocktowl",
		types: ["Dark", "Flying"],
		genderRatio: {M: 0.5, F: 0.5},
		weightkg: 70,
		baseStats: {hp: 140, atk: 55, def: 80, spa: 100, spd: 92, spe: 75},
		abilities: {0: "Insomnia", 1: "Frisk", H: "Prospect"},
		heightm: 2.0,
		prevo: "Noctowl-Delta",
		evoItem: "Cloak",
		evoType: "trade",
		eggGroups: ["Flying"],
	},
};