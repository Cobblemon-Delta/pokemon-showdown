import { ModdedDex } from "./../../../../sim/dex";
import { CreatePokemonLearnset } from "../../../../tools/utils/create";
export class NewLearnset extends CreatePokemonLearnset {
	constructor(dex: ModdedDex) {
		super ("", dex);
	}
}