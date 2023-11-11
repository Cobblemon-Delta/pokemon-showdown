// Barrel File
//#region Pokemon Learnset File
import glob from "glob";

//#region Template
import { ModdedDex } from "./../../../../sim/dex";
import { CreatePokemonLearnset } from "../../../../tools/utils/create";
export class NewLearnset extends CreatePokemonLearnset {
	constructor(dex: ModdedDex) {
		super ("", dex);
	}
}
// import {ModdedDex} from "./../../../../sim/dex";
// import {CreatePokemonLearnset} from "./../../../../tools/utils/create";
// import { glob } from "glob";
// export function PlaceHolderLearnset(dex: ModdedDex) {
// 	const pokemon = new CreatePokemonLearnset("placeholder", dex);
// 		/////////////////////////////////////////
// 		// Level Up Moves
// 		////////////////////////////////////////
// 		pokemon
// 		/////////////////////////////////////////
// 		// TM/HM Moves
// 		////////////////////////////////////////
// 		pokemon
// 		/////////////////////////////////////////
// 		// Tutor Moves
// 		////////////////////////////////////////
// 		pokemon
// 		/////////////////////////////////////////
// 		// Egg Moves
// 		////////////////////////////////////////
// 		pokemon
// }
//#endregion Template

export function LoadLearnsets(dex: ModdedDex) {
	const files = glob.sync("./data/mods/cobblemon/learnsets");
	console.log(files);
	for (const file of files) {
		if(!file.includes("index")) {
		}
	}
}