export const Abilities: {[k: string]: ModdedAbilityData} = {
	prospect: {
		name: "Prospect",
		num: -1001,
		rating: 3,
		desc: "When a Pokémon with Prospect enters the battle, it causes the Pokémon to detect whether the opponent has an OHKO move, super effective move, or Explosion/Self-Destruct. If that condition is met, the opponent gains a \"Cursed\" effect. Should it use a move against Klocktowl, there is a 30% chance to disable its move for 3 turns. This effect is removed when the opponent leaves the field.",
		shortDesc: "Upon switch-in, The Pokemon will detect wheter the opponent has a threating move, If they do and they attack this pokemon, there is a 30% chance of their move being disabled.",
		// Forewarn
		onStart(pokemon) {
			let warnMoves: (Move | Pokemon)[][] = [];
			let warnBp = 1;
			for (const target of pokemon.foes()) {
				for (const moveSlot of target.moveSlots) {
					const move = this.dex.moves.get(moveSlot.move);
					let bp = move.basePower;
					if (move.ohko) bp = 150;
					if (move.id === 'counter' || move.id === 'metalburst' || move.id === 'mirrorcoat') bp = 120;
					if (bp === 1) bp = 80;
					if (!bp && move.category !== 'Status') bp = 80;
					if (bp > warnBp) {
						warnMoves = [[move, target]];
						warnBp = bp;
					} else if (bp === warnBp) {
						warnMoves.push([move, target]);
					}
				}
			}
			if (!warnMoves.length) return;
			const [warnMoveName, warnTarget] = this.sample(warnMoves);
			this.add('-activate', pokemon, 'ability: Prospect', warnMoveName, '[of] ' + warnTarget);
			this.effectState.triggerCurse = true;
		},
		// Cursed Body
		onDamagingHit(damage, target, source, move) {
			if (source.volatiles['disable']) return;
			if (!move.isMax && !move.flags['futuremove'] && move.id !== 'struggle') {
				if (this.effectState.triggerCurse && this.randomChance(3, 10)) {
					source.addVolatile('disable', this.effectState.target);
				}
			}
		},
	}
};