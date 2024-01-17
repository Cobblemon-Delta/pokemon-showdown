
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
		"dragetsu",
		"gabitedelta",
		"garchompdelta",
		"gibledelta",
		"gorochu",
		"greninjadelta",
		"lucaurus",
		"quaxolotl",
		"raticatedelta",
		"rattatadelta",
		"sableyedelta",
		"spectreon",
		"steelixdelta",
		"wooperdelta",
		"yanfern",
		"yanmellia",
	];

	for (let pokemon of pokemons) {
		const { default: mod } = await import(`./${pokemon}.js`);
		mod.default(dex);
	}
}