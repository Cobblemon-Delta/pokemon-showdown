import {ModdedDex} from "./../../../../sim/dex";
import {CreatePokemonLearnset} from "./../../../../tools/utils/create";
export function RattataDeltaLearnset(dex: ModdedDex) {
	const pokemon = new CreatePokemonLearnset("rattatadelta", dex);
		/////////////////////////////////////////
		// Level Up Moves
		////////////////////////////////////////
		pokemon
			.addLevelMove("Ingrain")
			.addLevelMove("Quick Attack")
			.addLevelMove("Quick Attack", 4)
			.addLevelMove("Focus Energy", 7)
			.addLevelMove("Thunder Shock", 10)
			.addLevelMove("Laser Focus", 13)
			.addLevelMove("Bullet Seed", 16)
			.addLevelMove("Detect", 19)
			.addLevelMove("Sucker Punch", 22)
			.addLevelMove("Leaf Blade", 25)
			.addLevelMove("Nuzzle", 28)
			.addLevelMove("Shock Wave", 31)
			.addLevelMove("Bounce", 34);
		/////////////////////////////////////////
		// TM/HM Moves
		////////////////////////////////////////
		pokemon
			.addTMMoves(
				"Swords Dance",
				"Toxic",
				"Body Slam",
				"Take Down",
				"Double Edge",
				"Mega Drain",
				"Solar Beam",
				"Thunderbolt",
				"Dig",
				"Double Team",
				"Bide",
				"Swift",
				"Rest",
				"Thunder Wave",
				"Substitute",
				"Headbutt",
				"Hidden Power",
				"Sunny Day",
				"Sweet Scent",
				"Snore",
				"Protect",
				"Endure",
				"Giga Drain",
				"Iron Tail",
				"Return",
				"Swagger",
				"Sleep Talk",
				"Defense Curl",
				"Thunder Punch",
				"Detect",
				"Attract",
				"Thief",
				"Fury Cutter",
				"Bullet Seed",
				"Rain Dance",
				"Shock Wave",
				"Aerial Ace",
				"Facade",
				"Secret Power",
				"Snatch",
				"Energy Ball",
				"Shadow Claw",
				"Recycle",
				"Flash",
				"Captivate",
				"Natural Gift",
				"Grass Knot",
				"U Turn",
				"Hone Claws",
				"Round",
				// "Energy Ball",
				"Volt Switch",
				"Snarl",
				"Confide",
				"Thunder Punch",
				"Magical Leaf",
				"Helping Hand",
				"Fake Tears",
				"Thunder Fang",
				"Ice Fang",
				"Tail Slap",
				"Electric Terrain",
				"Brutal Swing",
				"Baton Pass",
				"Encore",
				"Nasty Plot",
				"Iron Head",
				"Electro Ball",
				"Psychic Fangs",
			);
		/////////////////////////////////////////
		// Tutor Moves
		////////////////////////////////////////
		pokemon
				.addTutorMoves(
					"Body Slam",
					"Counter",
					"Double Edge",
					"Seismic Toss",
					"Substitute",
					"Swords Dance",
					"Thunder Wave",
					"Fury Cutter",
					"Sleep Talk",
					"Swagger",
					"Thunder Punch",
					"Endure",
					"Snore",
					"Defense Curl",
					"Swift",
					"Knock Off",
					"Sucker Punch",
					"Synthesis",
					"Helping Hand",
					"Bounce",
					"Aqua Tail",
					"Iron Head",
					"Seed Bomb",
					"Worry Seed",
					"Super Fang",
					"Iron Tail",
					"Giga Drain",
					"Shock Wave",
				);
		/////////////////////////////////////////
		// Egg Moves
		////////////////////////////////////////
		pokemon
					.addEggMoves(
						"Discharge",
						"Mirror Coat",
						"Curse",
						"Tickle",
						"Synthesis",
						"Fake Out",
						"Endeavor",
						"Bite",
						"Final Gambit",
						"Aromatherapy",
					);
}