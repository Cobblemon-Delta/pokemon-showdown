import {CreatePokemonLearnset} from "./../../../tools/utils/create";
import {
	LoadLearnsets,
} from "./learnsets/index";
export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: "gen9",
	init() {
		//#region Learnsets
		LoadLearnsets(this);
		//#endregion Learnsets
	},
};