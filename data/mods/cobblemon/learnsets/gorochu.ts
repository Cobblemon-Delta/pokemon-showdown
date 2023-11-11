import { CreatePokemonLearnset } from "../../../../tools/utils/create";
import { ModdedDex } from "../../../../sim/dex";

export default function(dex: ModdedDex) {	const pokemon = new CreatePokemonLearnset("gorochu", dex);
		/////////////////////////////////////////
		// Level Up Moves
		////////////////////////////////////////
		pokemon
			.addLevelMove("Play Nice")
			.addLevelMove("Sweet Kiss")
			.addLevelMove("Nuzzle")
			.addLevelMove("Nasty Plot")
			.addLevelMove("Charm")
			.addLevelMove("Thunder Wave")
			.addLevelMove("Double Team")
			.addLevelMove("Electro Ball")
			.addLevelMove("Feint")
			.addLevelMove("Spark")
			.addLevelMove("Agility")
			.addLevelMove("Iron Tail")
			.addLevelMove("Discharge")
			.addLevelMove("Light Scree")
			.addLevelMove("Thunder")
			.addLevelMove("Thunder Shock")
			.addLevelMove("Tail Whip")
			.addLevelMove("Growl")
			.addLevelMove("Quick Attack")
			.addLevelMove("Thunder Punch")
			.addLevelMove("Thunderbolt")
			.addLevelMove("Thunder Fang") // Evo Move
			.addLevelMove("Horn Attack", 10)
			.addLevelMove("Ice Fang", 30)
			.addLevelMove("Fire Fang", 50)
			.addLevelMove("Extreme Speed", 70)
			.addLevelMove("Decisive Bolt", 80);
		/////////////////////////////////////////
		// TM/HM Moves
		////////////////////////////////////////
		pokemon
			.addTMMoves(
				"Crunch",
				"Aura Sphere",
				"Mystical Fire",
				"Knock Off",
				"U Turn",
				"Smart Strike",
				"Megahorn",
				"Take Down",
				"Charm",
				"Agility",
				"Protect",
				"Thief",
				"Disarming Voice",
				"Trailblaze",
				"Charge Beam",
				"Facade",
				"Swift",
				"Draining Kiss",
				"Fling",
				"Endure",
				"Volt Switch",
				"Rain Dance",
				"Dig",
				"Brick Break",
				"Body Slam",
				"Thunder Punch",
				"Sleep Talk",
				"Electro Ball",
				"Reflect",
				"Light Screen",
				"Grass Knot",
				"Thunder Wave",
				"Rest",
				"Eerie Impulse",
				"Substitute",
				"Encore",
				"Surf",
				"Thunderbolt",
				"Play Rough",
				"Helping Hand",
				"Reversal",
				"Electric Terrain",
				"Nasty Plot",
				"Wild Charge",
				"Giga Impact",
				"Focus Blast",
				"Hyper Beam",
				"Thunder",
				"Tera Blast",
			);
		/////////////////////////////////////////
		// Tutor Moves
		////////////////////////////////////////
		pokemon // Same as Raichu. No need to add anything due to inhertiance.
		/////////////////////////////////////////
		// Egg Moves
		////////////////////////////////////////
		pokemon
				.addEggMoves(
					"Charge",
					"Disarming Voice",
					"Fake Out",
					"Flail",
					"Present",
					"Tickle",
					"Volt Tackle",
					"Wish",
				);
}