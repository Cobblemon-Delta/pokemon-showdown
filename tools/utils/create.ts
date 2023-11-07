import { ModdedDex } from "./../../sim/dex";
export class CreatePokemon {

}

export class CreatePokemonLearnset {
	
	constructor(private name: string, private dex: ModdedDex) {}

	private createMoveSection(name: string) {
		console.log(this.dex.modData("Learnsets", this.name));
		if (this.dex.modData("Learnsets", this.name).learnsets == undefined) {
			this.dex.modData("Learnsets", this.name).learnsets = {};
		}
		if(this.dex.modData("Learnsets", this.name).learnsets[name] == undefined)
			this.dex.modData("Learnsets", this.name).learnsets[name] = [];
	}
	public addLevelMove(name: string, level: number = 1) {
		this.createMoveSection(name);
		this.dex.modData("Learnsets", this.name).learnsets[name].push(`9L${level}`);
		return this;
	}
	public addTMMove(name: string) {
		this.createMoveSection(name);
		this.dex.modData("Learnsets", this.name).learnsets[name].push(`9M`);
		return this;
	}
	public addEggMove(name: string) {
		this.createMoveSection(name);
		this.dex.modData("Learnsets", this.name).learnsets[name].push(`9E`);
		return this;
	}
	public addTutorMove(name: string) {
		this.createMoveSection(name);
		this.dex.modData("Learnsets", this.name).learnsets[name].push(`9T`);
		return this;
	}
}