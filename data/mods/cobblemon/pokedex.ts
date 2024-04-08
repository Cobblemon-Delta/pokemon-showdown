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
	aegislashdelta: {
		num: 681,
		name: "Aegislash-Delta",
		baseSpecies: "Aegislash",
		forme: "Delta",
		baseForme: "Shield",
		types: ["Steel", "Fire"],
		baseStats: {hp: 85, atk: 45, def: 125, spa: 45, spd: 125, spe: 75},
		abilities: {0: "Blazing Swap"},
		heightm: 1.7,
		weightkg: 53,
		color: "Crimison",
		prevo: "Doublade-Delta",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Mineral"],
		otherFormes: ["Aegislash-Delta-Blade"],
		formeOrder: ["Aegislash-Delta", "Aegislash-Delta-Blade"],
	},
	aegislashdeltablade: {
		num: 681,
		name: "Aegislash-Delta-Blade",
		baseSpecies: "Aegislash",
		forme: "Blade",
		types: ["Steel", "Fire"],
		baseStats: {hp: 85, atk: 125, def: 45, spa: 125, spd: 45, spe: 75},
		abilities: {0: "Blazing Swap"},
		heightm: 1.7,
		weightkg: 53,
		color: "Crimison",
		eggGroups: ["Mineral"],
		requiredAbility: "Blazing Swap",
		battleOnly: "Aegislash-Delta",
	},
	//#endregion

	//#region Ambipom-Delta's Evolution Line
	aipom: {
		inherit: true,
		otherFormes: ["Aipom-Delta"],
		formeOrder: ["Aipom", "Aipom-Delta"],
	},
	aipomdelta: {
		num: 2022,
		name: "Aipom-Delta",
		baseSpecies: "Aipom",
		forme: "Delta",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 55, atk: 80, def: 55, spa: 40, spd: 50, spe: 80},
		abilities: {0: "Technician", 1: "Pick Up", H: "Long Reach"},
		heightm: 0.8,
		weightkg: 11.5,
		color: "Gray",
		evos: ["Ambipom-Delta"],
		eggGroups: ["Field"],
	},
	ambipom: {
		inherit: true,
		otherFormes: ["Ambipom-Delta"],
		formeOrder: ["Ambipom", "Ambipom-Delta"],
	},
	ambipomdelta: {
		num: 2023,
		name: "Ambipom-Delta",
		baseSpecies: "Ambipom",
		forme: "Delta",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 65, atk: 105, def: 68, spa: 66, spd: 75, spe: 103},
		abilities: {0: "Technician", 1: "Pick Up", H: "Long Reach"},
		heightm: 1.2,
		weightkg: 20.3,
		color: "Gray",
		prevo: "Aipom-Delta",
		evoType: "levelMove",
		evoMove: "Double Hit",
		eggGroups: ["Field"],
	},
	//#endregion

	//#region Beldum's Evolution Line

	axew: {
		inherit: true,
		otherFormes: ["Axew-Delta"],
		formeOrder: ["Axew", "Axew-Delta"],
	},
	axewdelta: {
		num: 610,
		name: "Axew-Delta",
		baseSpecies: "Axew",
		forme: "Delta",
		types: ["Dragon", "Fire"],
		baseStats: {hp: 46, atk: 76, def: 70, spa: 30, spd: 51, spe: 47},
		abilities: {0: "Rivalry", H: "Flame Body"},
		heightm: 0.8,
		weightkg: 33,
		color: "Blue",
		evos: ["Fraxure-Delta"],
		eggGroups: ["Monster", "Dragon"],
	},
	fraxure: {
		inherit: true,
		otherFormes: ["Fraxure-Delta"],
		formeOrder: ["Fraxure", "Fraxure-Delta"],
	},
	fraxuredelta: {
		num: 611,
		name: "Fraxure-Delta",
		baseSpecies: "Fraxure",
		forme: "Delta",
		types: ["Dragon", "Fire"],
		baseStats: {hp: 66, atk: 102, def: 85, spa: 40, spd: 60, spe: 57},
		abilities: {0: "Rivalry", 1: "Battle Armor", H: "Flame Body"},
		heightm: 0.8,
		weightkg: 52.5,
		color: "Blue",
		evos: ["Haxorus-Delta"],
		prevo: "Axew-Delta",
		eggGroups: ["Monster", "Dragon"],
	},
	haxorus: {
		inherit: true,
		otherFormes: ["Haxorus-Delta"],
		formeOrder: ["Haxorus", "Haxorus-Delta"],
	},
	haxorusdelta: {
		num: 612,
		name: "Haxorus-Delta",
		baseSpecies: "Haxorus",
		forme: "Delta",
		types: ["Dragon", "Fire"],
		baseStats: {hp: 76, atk: 124, def: 105, spa: 73, spd: 73, spe: 89},
		abilities: {0: "Rivalry", 1: "Battle Armor", H: "Flame Body"},
		heightm: 0.8,
		weightkg: 140.5,
		color: "Blue",
		prevo: "Fraxure-Delta",
		eggGroups: ["Monster", "Dragon"],
	},

	//#endregion

	//#region Beldum's Evolution Line

	beldum: {
		inherit: true,
		otherFormes: ["Beldum-Delta"],
		formeOrder: ["Beldum", "Beldum-Delta"],
	},
	beldumdelta: {
		num: 374,
		name: "Beldum-Delta",
		baseSpecies: "Beldum",
		forme: "Delta",
		types: ["Rock", "Grass"],
		baseStats: {hp: 40, atk: 55, def: 80, spa: 35, spd: 60, spe: 30},
		abilities: {0: "Bulletproof", H: "Levitate"},
		heightm: 0.8,
		weightkg: 77,
		color: "White",
		evos: ["Metang-Delta"],
		eggGroups: ["Mineral"],
	},
	metang: {
		inherit: true,
		otherFormes: ["Metang-Delta"],
		formeOrder: ["Metang", "Metang-Delta"],
	},
	metangdelta: {
		num: 375,
		name: "Metang-Delta",
		baseSpecies: "Metang",
		forme: "Delta",
		types: ["Rock", "Grass"],
		baseStats: {hp: 60, atk: 70, def: 115, spa: 50, spd: 75, spe: 50},
		abilities: {0: "Bulletproof", H: "Reckless"},
		heightm: 0.8,
		weightkg: 116,
		color: "White",
		evos: ["Metagross-Delta"],
		prevo: "Beldum-Delta",
		eggGroups: ["Mineral"],
	},
	metagross: {
		inherit: true,
		otherFormes: ["Metagross-Delta"],
		formeOrder: ["Metagross", "Metagross-Delta"],
	},
	metagrossdelta: {
		num: 376,
		name: "Metagross-Delta",
		baseSpecies: "Metagross",
		forme: "Delta",
		types: ["Rock", "Grass"],
		baseStats: {hp: 80, atk: 125, def: 145, spa: 75, spd: 110, spe: 65},
		abilities: {0: "Bulletproof", H: "Reckless"},
		heightm: 0.8,
		weightkg: 345.5,
		color: "White",
		prevo: "Metang-Delta",
		eggGroups: ["Mineral"],
	},

	//#endregion

	//#region Broomish's Evolution Line

	broomish: {
		num: 2040,
		name: "Broomish",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Ground", "Fairy"],
		baseStats: {hp: 70, atk: 35, def: 65, spa: 35, spd: 55, spe: 35},
		abilities: {0: "Levitate"},
		heightm: 1.2,
		weightkg: 1.2,
		color: "Brown",
		evos: ["Brewloom"],
		eggGroups: ["Field", "Fairy"],
	},
	brewloom: {
		num: 2041,
		name: "Brewloom",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Ground", "Fairy"],
		baseStats: {hp: 60, atk: 125, def: 65, spa: 60, spd: 65, spe: 85},
		abilities: {0: "Magician"},
		heightm: 1.2,
		weightkg: 35.5,
		color: "Brown",
		prevo: "Broomish",
		eggGroups: ["Field", "Fairy"],
	},

	//#endregion

	//#region Charizard-Delta's Evolution Line

	charmander: {
		inherit: true,
		otherFormes: ["Charmander-Delta"],
		formeOrder: ["Charmander", "Charmander-Delta"],
	},
	charmanderdelta: {
		num: 4,
		name: "Charmander-Delta",
		baseSpecies: "Charmander",
		forme: "Delta",
		types: ["Fire", "Dark"],
		baseStats: {hp: 39, atk: 60, def: 50, spa: 52, spd: 43, spe: 65},
		abilities: {0: "Blaze", H: "Defiant"},
		heightm: 0.8,
		weightkg: 10,
		color: "Black",
		evos: ["Charmeleon-Delta"],
		eggGroups: ["Monster", "Dragon"],
	},
	charmeleon: {
		inherit: true,
		otherFormes: ["Charmeleon-Delta"],
		formeOrder: ["Charmeleon", "Charmeleon-Delta"],
	},
	charmeleondelta: {
		num: 5,
		name: "Charmeleon-Delta",
		baseSpecies: "Charmeleon",
		forme: "Delta",
		types: ["Fire", "Dark"],
		baseStats: {hp: 58, atk: 77, def: 65, spa: 65, spd: 60, spe: 80},
		abilities: {0: "Blaze", H: "Defiant"},
		heightm: 0.8,
		weightkg: 20,
		color: "Black",
		evos: ["Charizard-Delta"],
		prevo: "Charmander-Delta",
		eggGroups: ["Monster", "Dragon"],
	},
	charizard: {
		inherit: true,
		otherFormes: ["Charizard-Delta"],
		formeOrder: ["Charizard", "Charizard-Delta"],
	},
	charizarddelta: {
		num: 6,
		name: "Charizard-Delta",
		baseSpecies: "Charizard",
		forme: "Delta",
		types: ["Fire", "Dark"],
		baseStats: {hp: 78, atk: 116, def: 88, spa: 82, spd: 70, spe: 100},
		abilities: {0: "Blaze", H: "Defiant"},
		heightm: 0.8,
		weightkg: 110,
		color: "Black",
		prevo: "Charmeleon-Delta",
		eggGroups: ["Monster", "Dragon"],
	},

	//#endregion

	//#region Chimecho-Delta

	chingling: {
		inherit: true,
		evos: ["Chimecho", "Chimecho-Delta"],
	},
	chimecho: {
		inherit: true,
		otherFormes: ["Chimecho-Delta"],
		formeOrder: ["Chimecho", "Chimecho-Delta"],
	},
	chimechodelta: {
		num: 358,
		name: "Chimecho-Delta",
		baseSpecies: "Chimecho",
		forme: "Delta",
		types: ["Dark", "Psychic"],
		baseStats: {hp: 75, atk: 50, def: 70, spa: 105, spd: 80, spe: 75},
		abilities: {0: "Levitate"},
		heightm: 1.3,
		weightkg: 28.3,
		color: 'Gray',
		eggGroups: ["Amorphous"],
	},

	//#endregion

	//#region Clamperl-Delta's Evolution Line

	clamperl: {
		inherit: true,
		otherFormes: ["Clamperl-Delta"],
		formeOrder: ["Clamperl", "Clamperl-Delta"],
	},
	clamperldelta: {
		num: 366,
		name: "Clamperl-Delta",
		baseSpecies: "Clamperl",
		forme: "Delta",
		types: ["Dragon"],
		baseStats: {hp: 35, atk: 75, def: 80, spa: 62, spd: 53, spe: 40},
		abilities: {0: "Shell Armor", H: "Simple"},
		heightm: 1.3,
		weightkg: 35,
		color: 'Yellow',
		evos: ["Gorebyss-Delta", "Huntail-Delta"],
		eggGroups: ["Water 1"],
	},
	huntail: {
		inherit: true,
		otherFormes: ["Huntail-Delta"],
		formeOrder: ["Huntail", "Huntail-Delta"],
	},
	huntaildelta: {
		num: 367,
		name: "Huntail-Delta",
		baseSpecies: "Huntail",
		forme: "Delta",
		types: ["Dragon", "Dark"],
		baseStats: {hp: 55, atk: 107, def: 95, spa: 98, spd: 70, spe: 60},
		abilities: {0: "Hydration", H: "Breach"},
		heightm: 1.3,
		weightkg: 30.5,
		color: 'Blue',
		prevo: "Clamperl-Delta",
		eggGroups: ["Water 1"],
	},
	gorebyss: {
		inherit: true,
		otherFormes: ["Gorebyss-Delta"],
		formeOrder: ["Gorebyss", "Gorebyss-Delta"],
	},
	gorebyssdelta: {
		num: 368,
		name: "Gorebyss-Delta",
		baseSpecies: "Gorebyss",
		forme: "Delta",
		types: ["Dragon", "Fairy"],
		baseStats: {hp: 55, atk: 93, def: 95, spa: 112, spd: 70, spe: 60},
		abilities: {0: "Hydration", H: "Exalt"},
		heightm: 1.3,
		weightkg: 26.6,
		color: 'Red',
		prevo: "Clamperl-Delta",
		eggGroups: ["Water 1"],
	},

	//#endregion

	//#region Cloyster-Delta's Evolution Line

	shellder: {
		inherit: true,
		otherFormes: ["Shellder-Delta"],
		formeOrder: ["Shellder", "Shellder-Delta"],
	},
	shellderdelta: {
		num: 90,
		name: "Shellder-Delta",
		baseSpecies: "Shellder",
		forme: "Delta",
		types: ["Ice", "Poison"],
		baseStats: {hp: 30, atk: 70, def: 100, spa: 35, spd: 30, spe: 40},
		abilities: {0: "Shell Armor", 1: "Poison Point", H: "Weak Armor"},
		heightm: 0.6,
		weightkg: 3,
		evos: ["Cloyster-Delta"],
		eggGroups: ["Water 3"],
	},
	cloysterdelta: {
		num: 91,
		name: "Cloyster-Delta",
		baseSpecies: "Cloyster",
		forme: "Delta",
		types: ["Ice", "Poison"],
		baseStats: {hp: 50, atk: 115, def: 165, spa: 65, spd: 55, spe: 75},
		abilities: {0: "Shell Armor", 1: "Poison Point", H: "Intimidate"},
		heightm: 0.6,
		weightkg: 122,
		prevo: "Shellder-Delta",
		eggGroups: ["Water 3"],
	},

	//#endregion

	//#region Curesola's Evolution Line
	corsola: {
		inherit: true,
		otherFormes: ["Corsola-Galar", "Corsola-Delta"],
		formeOrder: ["Corsola", "Corsola-Galar", "Corsola-Delta"],
	},
	corsoladelta: {
		num: 2029,
		name: "Corsola-Delta",
		baseSpecies: "Corsola",
		forme: "Delta",
		types: ["Grass"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 90, atk: 45, def: 65, spa: 85, spd: 85, spe: 40},
		abilities: {0: "Natural Cure", H: "Healer"},
		heightm: 0.6,
		weightkg: 5,
		evos: ["Curesola"],
		eggGroups: ["Grass", "Water 1"],
	},
	curesola: {
		num: 2030,
		name: "Curesola",
		genderRatio: {M: 0.25, F: 0.75},
		types: ["Grass", "Fairy"],
		baseStats: {hp: 130, atk: 55, def: 85, spa: 100, spd: 95, spe: 45},
		abilities: {0: "Natural Cure", H: "Sacred Body"},
		heightm: 1,
		weightkg: 0.4,
		color: "Brown",
		prevo: "Corsola-Delta",
		evoLevel: 38,
		eggGroups: ["Grass", "Water 1"],
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

	//#region Ectarachnid
	ariados: {
		inherit: true,
		evos: ["Ectarachnid"],
	},
	ectarachnid: {
		num: 2014,
		name: "Ectarachnid",
		types: ["Bug", "Ghost"],
		gender: "M",
		baseStats: {hp: 90, atk: 120, def: 100, spa: 70, spd: 80, spe: 65},
		abilities: {0: "Swarm", 1: "Merciless", H: "Sniper"},
		heightm: 1.2,
		weightkg: 32,
		prevo: "Ariados",
		eggGroups: ["Bug"],
	},
	//#endregion

	//#region New Eevees
	eevee: {
		inherit: true,
		evos: [
			// Original Evos
			"Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon",
			// New Evos
			"Spectreon", "Veneon", "Guardeon", "Brawleon", "Draceon", "Manteon", "Niveon", "Eeveeon", "Obsideon", "Ancieon"
		],
	},
	spectreon: {
		num: 10012,
		name: "Spectreon",
		types: ["Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 130, atk: 60, def: 65, spa: 110, spd: 65, spe: 95},
		abilities: {0: "Cursed Body", H: "Tangibility"},
		heightm: 1,
		weightkg: 0.2,
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Dusk Stone",
		eggGroups: ["Field"],
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
	guardeon: {
		num: 10014,
		name: "Guardeon",
		types: ["Steel"],
		baseStats: {hp: 110, atk: 65, def: 130, spa: 65, spd: 95, spe: 60},
		abilities: {0: "Clear Body", H: "Shielded"},
		heightm: 1.5,
		weightkg: 120,
		color: "Iron",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Shield",
		eggGroups: ["Field"],
	},
	brawleon: {
		num: 10015,
		name: "Brawleon",
		types: ["Fighting"],
		baseStats: {hp: 60, atk: 130, def: 110, spa: 65, spd: 65, spe: 95},
		abilities: {0: "Limber", H: "Moxie"},
		heightm: 1.4,
		weightkg: 34,
		color: "Crimison",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Black Belt",
		eggGroups: ["Field"],
	},
	draceon: {
		num: 10016,
		name: "Draceon",
		types: ["Dragon"],
		baseStats: {hp: 110, atk: 130, def: 65, spa: 65, spd: 60, spe: 95},
		abilities: {0: "Mold Breaker", H: "Unnerve"},
		heightm: 1.2,
		weightkg: 60,
		color: "Red",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Dragon Fang",
		eggGroups: ["Field"],
	},
	manteon: {
		num: 10017,
		name: "Manteon",
		types: ["Bug"],
		baseStats: {hp: 65, atk: 110, def: 130, spa: 60, spd: 95, spe: 65},
		abilities: {0: "Analytic", H: "Dire Ambush"},
		heightm: 1.4,
		weightkg: 30,
		color: "Yellow",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Spider Eye",
		eggGroups: ["Field"],
	},
	niveon: {
		num: 10018,
		name: "Niveon",
		types: ["Flying"],
		baseStats: {hp: 60, atk: 95, def: 65, spa: 110, spd: 65, spe: 130},
		abilities: {0: "Cloud Nine", H: "Super Luck"},
		heightm: 1.7,
		weightkg: 1.3,
		color: "White",
		evoType: "other",
		evoCondition: "200Y-Level",
		eggGroups: ["Field"],
	},
	eeveeon: {
		num: 10019,
		name: "Eeveeon",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 100, def: 75, spa: 100, spd: 75, spe: 100},
		abilities: {0: "Adaptability", H: "Protean"},
		heightm: 1.7,
		weightkg: 25,
		color: "Brown",
		eggGroups: ["Field"],
	},
	obsideon: {
		num: 10020,
		name: "Obsideon",
		types: ["Rock"],
		baseStats: {hp: 95, atk: 110, def: 130, spa: 65, spd: 65, spe: 60},
		abilities: {0: "Rock Head", H: "Igneous"},
		heightm: 1.7,
		weightkg: 65.4,
		color: "Black",
		evoType: "useItem",
		evoItem: "Obsidian",
		eggGroups: ["Field"],
	},
	ancieon: {
		num: 10021,
		name: "Ancieon",
		types: ["Ground"],
		baseStats: {hp: 110, atk: 130, def: 65, spa: 60, spd: 65, spe: 95},
		abilities: {0: "Pressure", H: "Prowler"},
		heightm: 1.7,
		weightkg: 65.4,
		color: "Brown",
		evoType: "other",
		evoCondition: "0Y-Level",
		eggGroups: ["Field"],
	},
	//#endregion
	//#region Falink-Delta
	falinks: {
		inherit: true,
		otherFormes: ["Falinks-Delta"],
		formeOrder: ["Falinks", "Falinks-Delta"],
	},
	falinksdelta: {
		num: 2013,
		name: "Falinks-Delta",
		baseSpecies: "Falinks",
		forme: "Delta",
		gender: "N",
		types: ["Fighting", "Steel"],
		baseStats: {hp: 65, atk: 110, def: 110, spa: 45, spd: 70, spe: 70},
		abilities: {0: "Heavy Metal", H: "Filter"},
		heightm: 3,
		weightkg: 62,
		color: "Yellow",
		eggGroups: ["Fairy", "Mineral"],
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
		baseStats: {hp: 94, atk: 95, def: 95, spa: 110, spd: 100, spe: 106},
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
	//#region Arcanine-Delta's Evolution Line
	growlithe: {
		inherit: true,
		otherFormes: ["Growlithe-Hisui","Growlithe-Delta"],
		formeOrder: ["Growlithe", "Growlithe-Hisui", "Growlithe-Delta"],
	},
	growlithedelta: {
		num: 2020,
		name: "Growlithe-Delta",
		baseSpecies: "Growlithe",
		forme: "Delta",
		types: ["Water"],
		baseStats: {hp: 55, atk: 70, def: 45, spa: 65, spd: 50, spe: 65},
		abilities: {0: "Intimidate", 1: "Water Absorb", H: "Justified"},
		heightm: 0.7,
		weightkg: 19,
		color: "Blue",
		evos: ["Arcanine-Delta"],
		eggGroups: ["Field"],
	},
	arcanine: {
		inherit: true,
		otherFormes: ["Arcanine-Hisui", "Arcanine-Delta"],
		formeOrder: ["Arcanine", "Arcanine-Hisui", "Arcanine-Delta"],
	},
	arcaninedelta: {
		num: 2021,
		name: "Arcanine-Delta",
		baseSpecies: "Arcanine",
		forme: "Delta",
		types: ["Water"],
		baseStats: {hp: 85, atk: 115, def: 80, spa: 95, spd: 89, spe: 100},
		abilities: {0: "Intimidate", 1: "Water Absorb", H: "Justified"},
		heightm: 1.9,
		weightkg: 155,
		color: "Blue",
		prevo: "Growlithe",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Field"],
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
	//#region Klocktowl-Delta's Evolution Line

	hoothoot: {
		inherit: true,
		otherFormes: ["Hoothoot-Delta"],
		formeOrder: ["Hoothoot", "Hoothoot-Delta"],
	},
	hoothootdelta: {
		num: 163,
		name: "Hoothoot-Delta",
		baseSpecies: "Hoothoot",
		forme: "Delta",
		types: ["Dark", "Flying"],
		baseStats: {hp: 60, atk: 25, def: 35, spa: 42, spd: 60, spe: 40},
		abilities: {0: "Insomnia", 1: "Frisk", H: "Forewarn"},
		heightm: 0.7,
		weightkg: 15,
		color: "Gray",
		evos: ["Noctowl-Delta"],
		eggGroups: ["Flying"],
	},
	noctowl: {
		inherit: true,
		otherFormes: ["Noctowl-Delta"],
		formeOrder: ["Noctowl", "Noctowl-Delta"],
	},
	noctowldelta: {
		num: 164,
		name: "Noctowl-Delta",
		baseSpecies: "Noctowl",
		forme: "Delta",
		types: ["Dark", "Flying"],
		baseStats: {hp: 90, atk: 62, def: 60, spa: 90, spd: 70, spe: 80},
		abilities: {0: "Insomnia", 1: "Frisk", H: "Forewarn"},
		heightm: 0.7,
		weightkg: 38,
		color: "Gray",
		evos: ["Klocktowl"],
		prevo: "Hoothoot-Delta",
		eggGroups: ["Flying"],
	},
	klocktowl: {
		num: 2038,
		name: "Klocktowl",
		types: ["Dark", "Flying"],
		baseStats: {hp: 140, atk: 55, def: 80, spa: 100, spd: 92, spe: 75},
		abilities: {0: "Insomnia", 1: "Frisk", H: "Prospect"},
		heightm: 0.7,
		weightkg: 70,
		color: "Gray",
		prevo: "Noctowl-Delta",
		eggGroups: ["Flying"],
	},

	//#endregion
	//#region Klinklang-Delta's Evolution Line

	klink: {
		inherit: true,
		otherFormes: ["Klink-Delta"],
		formeOrder: ["Klink", "Klink-Delta"],
	},
	klinkdelta: {
		num: 599,
		name: "Klink-Delta",
		baseSpecies: "Klink",
		forme: "Delta",
		types: ["Steel", "Ice"],
		baseStats: {hp: 40, atk: 40, def: 55, spa: 55, spd: 50, spe: 60},
		abilities: {0: "Ice Body", 1: "Clear Body", H: "Minus"},
		heightm: 0.7,
		weightkg: 12.1,
		color: "White",
		evos: ["Klang-Delta"],
		eggGroups: ["Mineral"],
	},
	klang: {
		inherit: true,
		otherFormes: ["Klang-Delta"],
		formeOrder: ["Klang", "Klang-Delta"],
	},
	klangdelta: {
		num: 600,
		name: "Klang-Delta",
		baseSpecies: "Klang",
		forme: "Delta",
		types: ["Steel", "Ice"],
		baseStats: {hp: 70, atk: 55, def: 75, spa: 85, spd: 79, spe: 76},
		abilities: {0: "Ice Body", 1: "Clear Body", H: "Plus"},
		heightm: 0.7,
		weightkg: 12.1,
		color: "White",
		prevo: "Klink-Delta",
		evos: ["Klinklang-Delta"],
		eggGroups: ["Mineral"],
	},
	klinklang: {
		inherit: true,
		otherFormes: ["Klinklang-Delta"],
		formeOrder: ["Klinklang", "Klinklang-Delta"],
	},
	klinklangdelta: {
		num: 601,
		name: "Klinklang-Delta",
		baseSpecies: "Klinklang",
		forme: "Delta",
		types: ["Steel", "Ice"],
		baseStats: {hp: 80, atk: 60, def: 98, spa: 104, spd: 90, spe: 88},
		abilities: {0: "Ice Body", 1: "Clear Body", H: "Chronostasis"},
		heightm: 0.7,
		weightkg: 12.1,
		color: "White",
		prevo: "Klang-Delta",
		eggGroups: ["Mineral"],
	},

	//#endregion

	//#region Larvesta-Delta's Evolution Line

	larvesta: {
		inherit: true,
		otherFormes: ["Larvesta-Delta"],
		formeOrder: ["Larvesta", "Larvesta-Delta"],
	},
	larvestadelta: {
		num: 636,
		name: "Larvesta-Delta",
		baseSpecies: "Larvesta",
		forme: "Delta",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 55, atk: 85, def: 55, spa: 50, spd: 55, spe: 60},
		abilities: {0: "Anticipation", H: "Swarm"},
		heightm: 0.7,
		weightkg: 12.1,
		color: "Yellow",
		evos: ["Volcarona-Delta"],
		eggGroups: ["Bug"],
	},
	volcarona: {
		inherit: true,
		otherFormes: ["Volcarona-Delta"],
		formeOrder: ["Volcarona", "Volcarona-Delta"],
	},
	volcaronadelta: {
		num: 637,
		name: "Volcarona-Delta",
		baseSpecies: "Volcarona",
		forme: "Delta",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 85, atk: 60, def: 65, spa: 135, spd: 105, spe: 100},
		abilities: {0: "Crescent Form", H: "Swarm"},
		heightm: 0.7,
		weightkg: 12.1,
		color: "Pink",
		prevo: "Larvesta-Delta",
		eggGroups: ["Bug"],
	}


};