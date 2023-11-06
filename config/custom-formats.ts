// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
	{
		section: "Cobblemon",
	},
	{
		name: "[Cobblemon] Single Battle",
		desc: "Cobblemon Single Battles",
		mod: 'cobblemon',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	}
];