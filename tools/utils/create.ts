import { ModdedDex } from "./../../sim/dex";
export class CreatePokemon {

}

export class CreatePokemonLearnset {
	
	constructor(private name: string, private dex: ModdedDex) {}
	private PrefixMoveName(name: string) {
		return name.includes(" ") ? name.toLowerCase().replace(" ", "") : name.toLowerCase();
	}
	private createMoveSection(name: string) {
		name = this.PrefixMoveName(name);
		if (this.dex.modData("Learnsets", this.name).learnset == undefined) {
			this.dex.modData("Learnsets", this.name).learnset = {};
		}
		if(this.dex.modData("Learnsets", this.name).learnset[name] == undefined)
			this.dex.modData("Learnsets", this.name).learnset[name] = [];
	}
	public addLevelMove(name: string, level: number = 1) {
		name = this.PrefixMoveName(name);
		this.createMoveSection(name);
		this.dex.modData("Learnsets", this.name).learnset[name].push(`9L${level}`);
		return this;
	}
	public addTMMove(name: string) {
		name = this.PrefixMoveName(name);
		this.createMoveSection(name);
		this.dex.modData("Learnsets", this.name).learnset[name].push(`9M`);
		return this;
	}
	public addEggMove(name: string) {
		name = this.PrefixMoveName(name);
		this.createMoveSection(name);
		this.dex.modData("Learnsets", this.name).learnset[name].push(`9E`);
		return this;
	}
	public addTutorMove(name: string) {
		name = this.PrefixMoveName(name);
		this.createMoveSection(name);
		this.dex.modData("Learnsets", this.name).learnset[name].push(`9T`);
		return this;
	}
}