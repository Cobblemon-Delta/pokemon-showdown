import {ModdedDex} from "./../../../../sim/dex";
import {CreatePokemonLearnset} from "./../../../../tools/utils/create";
export function RaticateDeltaLearnset(dex: ModdedDex) {
	const pokemon = new CreatePokemonLearnset("raticatedelta", dex);
		/////////////////////////////////////////
		// Level Up Moves
		////////////////////////////////////////
		pokemon
			.addLevelMove("Scary Face")
			.addLevelMove("Ingrain")
			.addLevelMove("Splash")
			.addLevelMove("Quick Attack")
			.addLevelMove("Focus Energy")
			.addLevelMove("Scary Face") // Evo Move
			.addLevelMove("Quick Attack", 4)
			.addLevelMove("Focus Energy", 7)
			.addLevelMove("Thunder Shock", 10)
			.addLevelMove("Laser Focus", 13)
			.addLevelMove("Bullet Seed", 16)
			.addLevelMove("Detect", 19)
			.addLevelMove("Sucker Punch", 24)
			.addLevelMove("Leaf Blade", 29)
			.addLevelMove("Nuzzle", 34)
			.addLevelMove("Shock Wave", 39)
			.addLevelMove("Bounce", 44)
			.addLevelMove("Tail Glow", 60);
		/////////////////////////////////////////
		// TM/HM Moves
		////////////////////////////////////////
		pokemon
			.addTMMoves(
				"Toxic",
				"Body Slam",
				"Take Down",
				"Double Edge",
				"Submission",
				"Mega Drain",
				"Solar Beam",
				"Thunderbolt",
				"Thunder",
				"Dig",
				"Double Team",
				"Rest",
				"Thunder Wave",
				"Substitute",
				"Headbutt",
				"Zap Cannon",
				"Hidden Power",
				"Sunny Day",
				"Sweet Scent",
				"Snore",
				"Protect",
				"Endure",
				"Giga Drain",
				"Iron Tail",
				"Return",
				"Shadow Ball",
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
				"Fling",
				"Charge Beam",
				"Shadow Claw",
				"Recycle",
				"Giga Impact",
				"Flash",
				"Captivate",
				"Dark Pulse",
				"X Scissor",
				"Natural Gift",
				"Grass Knot",
				"U Turn",
				"Hone Claws",
				"Round",
				"Energy Ball",
				"Acrobatics",
				"Volt Switch",
				"Wild Charge",
				"Snarl",
				"Thunder Punch",
				"Magical Leaf",
				"Helping Hand",
				"Revenge",
				"Brick Break",
				"Fake Tears",
				"Bounce",
				"Thunder Fang",
				"Ice Fang",
				"Electroweb",
				"Tail Slap",
				"Electric Terrain",
				"Eerie Impulse",
				"Brutal Swing",
				"Focus Energy",
				"Baton Pass",
				"Encore",
				"Crunch",
				"Nasty Plot",
				"Zen Headbutt",
				"Flash Cannon",
				"Iron Head",
				"Electro Ball",
				"Dazzling Gleam",
				"Psychic Fangs"
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
					"Counter",
					"Thunder Punch",
					"Endure",
					"Snore",
					"Defense Curl",
					"Swift",
					"Knock Off",
					"Sucker Punch",
					"Zen Headbutt",
					"Synthesis",
					"Helping Hand",
					"Bounce",
					"Aqua Tail",
					"Iron Head",
					"Seed Bomb",
					"Low Kick",
					"Magnet Rise",
					"Worry Seed",
					"Super Fang",
					"Electroweb",
					"Iron Tail",
					"Dark Pulse",
					"Giga Drain",
					"Bind",
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