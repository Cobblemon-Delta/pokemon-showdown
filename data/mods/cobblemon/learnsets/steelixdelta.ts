import { CreatePokemonLearnset } from "../../../../tools/utils/create";
import { ModdedDex } from "../../../../sim/dex";

export default function(dex: ModdedDex) {	const pokemon = new CreatePokemonLearnset("steelixdelta", dex);
		/////////////////////////////////////////
		// Level Up Moves
		////////////////////////////////////////
		pokemon
			.addLevelMove("Psychic Fangs")
			.addLevelMove("Thunder Fang")
			.addLevelMove("Ice Fang")
			// .addLevelMove("Thunder Fang")
			.addLevelMove("Rock Polish")
			.addLevelMove("Tackle")
			.addLevelMove("Ingrain")
			.addLevelMove("Bind")
			.addLevelMove("Rock Throw")
			.addLevelMove("Smack Down", 4)
			.addLevelMove("Teleport", 8)
			.addLevelMove("Dragon Breath", 12)
			.addLevelMove("Curse", 16)
			.addLevelMove("Psywave", 20)
			.addLevelMove("Screech", 24)
			.addLevelMove("Sand Tomb", 28)
			.addLevelMove("Stealth Rock", 32)
			.addLevelMove("Slam", 36)
			.addLevelMove("Heal Block", 40)
			.addLevelMove("Synthesis", 44)
			.addLevelMove("Freezing Glare")
			.addLevelMove("Stone Edge", 52)
			.addLevelMove("Power Whip", 56)
			.addLevelMove("Magnet Rise", 60);
		/////////////////////////////////////////
		// TM/HM Moves
		////////////////////////////////////////
		pokemon
			.addTMMoves(
				"Headbutt",
				"Curse",
				"Roar",
				"Toxic",
				"Rock Smash",
				"Psych Up",
				"Hidden Power",
				"Sunny Day",
				"Snore",
				"Hyper Beam",
				"Protect",
				"Rain Dance",
				"Endure",
				"Iron Tail",
				"Dragon Breath",
				"Earthquake",
				"Return",
				"Dig",
				"Psychic",
				"Shadow Ball",
				"Mud Slap",
				"Swagger",
				"Sleep Talk",
				"Rest",
				"Rock Tomb",
				"Secret Power",
				"Energy Ball",
				"Fling",
				"Dragon Pulse",
				"Payback",
				"Giga Impact",
				"Rock Polish",
				"Flash",
				"Stone Edge",
				"Gyro Ball",
				"Stealth Rock",
				"Rock Slide",
				"Sleep Talk",
				"Natural Gift",
				"Grass Knot",
				"Substitute",
				"Flash Cannon",
				"Trick Room",
				"Psyshock",
				"Ally Switch",
				"Bulldoze",
				"Calm Mind",
				"Scary Face",
				"Mud Shot",
				"Rock Blast",
				"Wonder Room",
				"Magic Room",
				"Psychic Terrain",
				"Brutal Swing",
				"Body Slam",
				"Amnesia",
				"Crunch",
				"Skill Swap",
				"Cosmic Power",
				"Iron Defense",
				"Power Gem",
				"Earth Power",
				"Zen Headbutt",
				"Power Whip",
				"Iron Head",
				"Stored Power",
				"Heat Crash",
				"Psychic Fangs",
				"Body Press",
				"Take Down",
				"Mud Slap",
				"Outrage",
				"Stomping Tantrum",
			);
		/////////////////////////////////////////
		// Tutor Moves
		////////////////////////////////////////
		pokemon
				.addTutorMoves(
					"Body Slam",
					"Defense Curl",
					"Double Edge",
					"Endure",
					"Explosion",
					"Mimic",
					"Mud Slap",
					"Rock Slide",
					"Rollout",
					"Self Destruct",
					"Sleep Talk",
					"Snore",
					"Substitute",
					"Swagger",
					"Aqua Tail",
					"Bind",
					"Block",
					"Dragon Pulse",
					"Earth Power",
					"Iron Head",
					"Iron Tail",
					"Magnet Rise",
					"Snore",
					"Stealth Rock",
					"Stomping Tantrum",
					"Meteor Beam",
					"Scorching Sands",
					"Expanding Force",
					"Steel Roller",
					"Zen Headbutt",
					"Steel Roller",
					"Iron Defense",
					"Ancient Power",
					"Gravity",
					"Magic Room",
					"Wonder Room",
					"Skill Swap",
					"Ally Switch",
				);
		/////////////////////////////////////////
		// Egg Moves
		////////////////////////////////////////
		pokemon
					.addEggMoves(
						"Flail",
						"Rock Slide",
						"Block",
						"Explosion",
						"Defense Curl",
						"Rock Blast",
						"Rollout",
						"Heavy Slam",
						"Rototiller",
						"Stealth Rock",
						"Rock Climb",
						"Wide Guard",
						"Dragon Tail",
						"Head Smash"
					);
}