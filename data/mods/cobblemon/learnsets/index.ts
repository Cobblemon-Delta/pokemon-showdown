
//#region Template
import { CreatePokemonLearnset } from "../../../../tools/utils/create";
import { ModdedDex } from "../../../../sim/dex";

export default function(dex: ModdedDex) {
	const pokemon = new CreatePokemonLearnset("", dex);

	/////////////////////////////////////////
	// Level Moves
	////////////////////////////////////////
	pokemon
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

//#endregion

export async function LoadLearnsets(dex: ModdedDex) {
	const pokemons = [
		"spectreon"
	];

	for (let pokemon of pokemons) {
		const { default: func} = await import(`./${pokemon}.ts`);
	}
}