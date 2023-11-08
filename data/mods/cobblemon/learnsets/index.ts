// Barrel File
//#region Pokemon Learnset File
import { SpectreonLearnset } from "./spectreon";
import { WooperDeltaLearnset } from "./wooperdelta";
import { QuaxolotlLearnset } from "./quaxolotl";
import { LucaurusLearnset } from "./lucaurus";
//#endregion

//#region Template
import {ModdedDex} from "./../../../../sim/dex";
import {CreatePokemonLearnset} from "./../../../../tools/utils/create";
export function PlaceHolderLearnset(dex: ModdedDex) {
	const pokemon = new CreatePokemonLearnset("placeholder", dex);
		/////////////////////////////////////////
		// Level Up Moves
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
//#endregion Template


export {
	SpectreonLearnset,
	WooperDeltaLearnset,
	QuaxolotlLearnset,
	LucaurusLearnset
};