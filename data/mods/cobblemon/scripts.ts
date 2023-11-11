import { LoadLearnsets } from "./learnsets/index";
export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: "gen9",
	init() {
		//#region Learnset
		(async () => {
			await LoadLearnsets(this);
		})()
		//#endregion
	},
};