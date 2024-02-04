import { Pokedex } from '../gen2/pokedex';
export const Rulesets: {[k: string]: ModdedFormatData} = {
	cobblemonpokedex: {
		effectType: "ValidatorRule",
		name: "Cobblemon Pokedex",
		desc: "Only allows Pok&eacute;mon native to Cobblemon",
		onValidateSet(set, format) {
			const cobblemonDex = [];
			const pokemons = this.dex.mod('cobblemon').species.all();
			for (const pokemon of pokemons) {
				cobblemonDex.push(pokemon.name);
			}
			const species = this.dex.species.get(set.species ||set.name);
			if (!cobblemonDex.includes(species.baseSpecies) && !cobblemonDex.includes(species.name) && !this.ruleTable.has('+' + species.id)) {
				return [`${species.baseSpecies} is not in the Cobblemon Pokedex.`];
			}
		}
	}
}