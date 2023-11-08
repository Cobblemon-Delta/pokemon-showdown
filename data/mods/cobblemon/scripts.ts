import {CreatePokemonLearnset} from "./../../../tools/utils/create";
import {
	LucaurusLearnset,
	QuaxolotlLearnset,
	SpectreonLearnset,
	WooperDeltaLearnset
} from "./learnsets/index";
export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: "gen9",
	init() {
		//#region Learnsets
		SpectreonLearnset(this);
		WooperDeltaLearnset(this);
		QuaxolotlLearnset(this);
		LucaurusLearnset(this);
		//#endregion Learnsets
	},
};