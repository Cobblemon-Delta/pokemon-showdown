import {ModdedDex} from "./../../../../sim/dex";
import {CreatePokemonLearnset} from "./../../../../tools/utils/create";
export function QuaxolotlLearnset(dex: ModdedDex) {
	const pokemon = new CreatePokemonLearnset("quaxolotl", dex);
		/////////////////////////////////////////
		// Level Up Moves
		////////////////////////////////////////
		pokemon
			.addLevelMove("Water Gun", 1)
			.addLevelMove("Tail Whip", 1)
			.addLevelMove("Rain Dance", 4)
			.addLevelMove("Disarming Voice", 8)
			.addLevelMove("Mist", 12)
			.addLevelMove("Haze", 12)
			.addLevelMove("Slam", 16)
			.addLevelMove("Yawn", 23)
			.addLevelMove("Aqua Tail", 28)
			.addLevelMove("Muddy Water", 34)
			.addLevelMove("Charm", 40)
			.addLevelMove("Play Rough", 46)
			.addLevelMove("Moonblast", 52);
		/////////////////////////////////////////
		// TM/HM Moves
		////////////////////////////////////////
		pokemon
		/////////////////////////////////////////
		// Tutor Moves
		////////////////////////////////////////
		pokemon
		/////////////////////////////////////////
		// Egg Moves
		////////////////////////////////////////
		pokemon
}