export const Abilities: {[k: string]: ModdedAbilityData} = {
	blazingswap: {
		onModifyMove(move, attacker, defender) {
			if (attacker.species.baseSpecies !== "Aegislash-Delta" || attacker.transformed) return;
			if (move.category === "Status" && move.id !== "infernalshield") return;
			const targetForme = move.id === "infernalshield" ? "Aegislash-Delta" : "Aegislash-Delta-Blade";
			if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
		},
		isPermanent: true,
		name: "Blazing Swap",
		shortDesc: "If the user is Aegislash-Delta, using an damaging move will change to Blade forme. Using Infernal Shield, will change to Shield Form.",
		rating: 4,
		num: 176,
	},
	direambush: {
		onBasePowerPriority: 21,
		onBasePower(basePower, pokemon) {
			let boosted = true;
			for (const target of this.getAllActive()) {
				if (target == pokemon) continue;
				if (this.queue.willMove(target)) {
					boosted = false;
					break;
				}
			}
			if (boosted) {
				this.debug("Dire Ambush boost");
				return this.chainModify([5325, 4096]);
			}
		},
		name: "Dire Ambush",
		shortDesc: "If this Pokemon moves before the target, move's power is increased by 30%.",
		rating: 2.5,
		num: 148,
	},
	fatalize: {
		onModifyTypePriority: -5,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgement', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball'
			];
			if(move.type === "Normal" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Dark';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if(move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4095]);
		},
		name: "Fatalize",
		shortDesc: "Causes all Normal-type moves to be Dark-type and gains 1.2x more power.",
		rating: 4,
		num: 184,
	},
	guardian: {
		onUpdate(pokemon) {
			if(pokemon.status) {
				this.add('-activate', pokemon, 'ability: Guardian');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if((effect as Move).status) this.add('-immune', target, '[from] ability: Guardian');
			return false;
		},
		name: "Guardian",
		shortDesc: "Immune To Status Conditions; Can't be flinched.",
		rating: 4,
		num: 185,
	},
	precedence: {
		onModifyDamage(damage, source, target, move) {
			if(move.priority > 0.1) {
				return this.chainModify(1.5);
			}
		},
		name: "Precedence",
		shortDesc: "Priority moves used by this Pokemon deals 50% more damage.",
		rating: 3,
		num: 113,
	},
	pureguise: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon, target, move) {
			if(pokemon.hp >= pokemon.maxhp) {
				return this.chainModify(1.3);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, pokemon, targert, move) {
			if(pokemon.hp >= pokemon.maxhp) {
				return this.chainModify(1.3);
			}
		},
		name: "Pure Guise",
		shortDesc: "Atk and Sp.Atk will be increased by 1.3x when at Max Hp.",
		rating: 5,
		num: 92,
	},
	strongpsyche: {
		onModifySpAPriority: 5,
		onModifySpA(atk, source, target, move) {
			return this.chainModify(2);
		},
		name: "Strong Psyche",
		rating: 5,
		num: 37,
		shortDesc: "Doubles the special attack of the Pokemon.",
	},
	// tangibility: {
	// 	onModifyMovePriority: -5,
	// 	onModifyMove(move) {
	// 	  if (!move.ignoreImmunity)
	// 		move.ignoreImmunity = {};
	// 	  if (move.ignoreImmunity !== true) {
	// 		move.ignoreImmunity["Ghost"] = true;
	// 	  }
	// 	},
	// 	onTryBoost(boost, target, source, effect) {
	// 	  if (effect.name === "Intimidate" && boost.atk) {
	// 		delete boost.atk;
	// 		this.add("-fail", target, "unboost", "Attack", "[from] ability: Tangibility", "[of] " + target);
	// 	  }
	// 	},
	// 	onModifyDamage(damage, source, target, move) {
	// 	  if (target.getMoveHitData(move).typeMod < 0) {
	// 		if (move.type === "Ghost") {
	// 		  this.debug("Tangibility boost");
	// 		  return this.chainModify(2);
	// 		}
	// 	  }
	// 	},
	// 	name: "Tangibility",
	// 	rating: 3,
	// 	num: 113
	//   },
	//   strongpsyche: {
	// 	onModifySpAPriority: 5,
	// 	onModifySpA(atk) {
	// 	  return this.chainModify(2);
	// 	},
	// 	name: "Strong Psyche",
	// 	rating: 5,
	// 	num: 37
	//   },
	//   precedence: {
	// 	onModifyMovePriority: -5,
	// 	onModifyDamage(damage, source, target, move) {
	// 		if (move.priority > 0.1) {
	// 		  return this.chainModify(1.5);
	// 		}
	// 	},
	// 	name: "Precedence",
	// 	rating: 3,
	// 	num: 113
	//   },
	//   pureguise: {
	// 	onModifyAtkPriority: 5,
	// 	onModifyAtk(atk, pokemon) {
	// 	  if (pokemon.hp >= pokemon.maxhp) {
	// 		return this.chainModify(1.3);
	// 	  }
	// 	},
	// 	onModifySpAPriority: 5,
	// 	onModifySpA(atk, pokemon) {
	// 	  if (pokemon.hp >= pokemon.maxhp) {
	// 		return this.chainModify(1.3);
	// 	  }
	// 	},
	// 	name: "Pure Guise",
	// 	rating: 5,
	// 	num: 92
	//   },
	//   fatalize: {
	// 	onModifyTypePriority: -1,
	// 	onModifyType(move, pokemon) {
	// 	  const noModifyType = [
	// 		"judgment",
	// 		"multiattack",
	// 		"naturalgift",
	// 		"revelationdance",
	// 		"technoblast",
	// 		"terrainpulse",
	// 		"weatherball"
	// 	  ];
	// 	  if (move.type === "Normal" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== "Status") && !(move.name === "Tera Blast" && pokemon.terastallized)) {
	// 		move.type = "Dark";
	// 		move.typeChangerBoosted = this.effect;
	// 	  }
	// 	},
	// 	onBasePowerPriority: 23,
	// 	onBasePower(basePower, pokemon, target, move) {
	// 	  if (move.typeChangerBoosted === this.effect)
	// 		return this.chainModify([4915, 4096]);
	// 	},
	// 	name: "Fatalize",
	// 	rating: 4,
	// 	num: 184
	//   },
	//   blazingswap: {
	// 	onModifyMovePriority: 1,
	// 	onModifyMove(move, attacker, defender) {
	// 	  if (attacker.species.baseSpecies !== "Aegislash" || attacker.transformed)
	// 		return;
	// 	  if (move.category === "Status" && move.id !== "infernalshield")
	// 		return;
	// 	  const targetForme = move.id === "infernalshield" ? "Aegislash-delta" : "Aegislash-delta-Blade";
	// 	  if (attacker.species.name !== targetForme)
	// 		attacker.formeChange(targetForme);
	// 	},
	// 	isPermanent: true,
	// 	name: "Blazing Swap",
	// 	rating: 4,
	// 	num: 176
	//   },
	//   direambush: {
	// 	onBasePowerPriority: 21,
	// 	onBasePower(basePower, pokemon) {
	// 	  let boosted = true;
	// 	  for (const target of this.getAllActive()) {
	// 		if (target === pokemon)
	// 		  continue;
	// 		if (!this.queue.willMove(target)) {
	// 		  boosted = false;
	// 		  break;
	// 		}
	// 	  }
	// 	  if (boosted) {
	// 		this.debug("Dire Ambush boost");
	// 		return this.chainModify([5325, 4096]);
	// 	  }
	// 	},
	// 	name: "Dire Ambush",
	// 	rating: 2.5,
	// 	num: 148
	//   },
	//   shielded: {
	// 	onSetStatus(status, target, source, effect) {
	// 	  if (effect?.status) {
	// 		this.add("-immune", target, "[from] ability: Purifying Salt");
	// 	  }
	// 	  return false;
	// 	},
	// 	onTryAddVolatile(status, target) {
	// 		if (status.id === "flinch")
	// 			return null;
	// 	  	if (status.id === "yawn") {
	// 			this.add("-immune", target, "[from] ability: Purifying Salt");
	// 			return null;
	// 	  	}
	// 	},
	// 	onTryBoost(boost, target, source, effect) {
	// 	  if (effect.name === "Intimidate" && boost.atk) {
	// 		delete boost.atk;
	// 		this.add("-fail", target, "unboost", "Attack", "[from] ability: Inner Focus", "[of] " + target);
	// 	  }
	// 	},
	// 	isBreakable: true,
	// 	name: "Shielded",
	// 	rating: 1,
	// 	num: 39
	//   },
	//   surge: {
	// 	onModifyAtkPriority: 5,
	// 	onModifyAtk(atk, attacker, defender, move) {
	// 	  if (move.type === "Electric" && attacker.hp <= attacker.maxhp / 3) {
	// 		this.debug("Surge boost");
	// 		return this.chainModify(1.5);
	// 	  }
	// 	},
	// 	onModifySpAPriority: 5,
	// 	onModifySpA(atk, attacker, defender, move) {
	// 	  if (move.type === "Electric" && attacker.hp <= attacker.maxhp / 3) {
	// 		this.debug("Surge boost");
	// 		return this.chainModify(1.5);
	// 	  }
	// 	},
	// 	name: "Surge",
	// 	rating: 2,
	// 	num: 66
	//   },
	//   taproot: {
	// 	onSetStatus(status, target, source, effect) {
	// 	  if (target.volatiles["ingrain"])
	// 		return false;
	// 	},
	// 	onTryHealPriority: 1,
	// 	onTryHeal(damage, target, source, effect) {
	// 	  const heals = ["drain", "leechseed", "ingrain", "aquaring", "strengthsap"];
	// 	  if (heals.includes(effect.id)) {
	// 		return this.chainModify([5324, 4096]);
	// 	  }
	// 	},
	// 	onStart(pokemon) {
	// 	  for (const ally of pokemon.alliesAndSelf()) {
	// 		if (pokemon.volatiles["ingrain"] && ["psn", "tox", "slp", "par", "frz", "brn"].includes(ally.status)) {
	// 		  this.add("-activate", pokemon, "ability: Tap Root");
	// 		  ally.cureStatus();
	// 		}
	// 	  }
	// 	},
	// 	onUpdate(pokemon) {
	// 	  if (pokemon.volatiles["ingrain"] && ["psn", "tox", "slp", "par", "frz", "brn"].includes(pokemon.status)) {
	// 		this.add("-activate", pokemon, "ability: Tap Root");
	// 		pokemon.cureStatus();
	// 	  }
	// 	},
	// 	name: "Tap Root",
	// 	rating: 3,
	// 	num: 61
	//   },
	//   sacredbody: {
	// 	onDamagingHit(damage, target, source, move) {
	// 	  if (!this.checkMoveMakesContact(move, source, target))
	// 		return;
	// 	  let announced = false;
	// 	  for (const pokemon of [target, source]) {
	// 		if (pokemon.volatiles["sacredbody"])
	// 		  continue;
	// 		if (!announced) {
	// 		  this.add("-ability", target, "Sacred Body");
	// 		  announced = true;
	// 		}
	// 		pokemon.addVolatile("sacredbody");
	// 	  }
	// 	},
	// 	onTryHitField(target, source, move) {
	// 	  let result = false;
	// 	  let message = false;
	// 	  for (const pokemon of this.getAllActive()) {
	// 		if (this.runEvent("Invulnerability", pokemon, source, move) === false) {
	// 		  this.add("-miss", source, pokemon);
	// 		  result = true;
	// 		} else if (this.runEvent("TryHit", pokemon, source, move) === null) {
	// 		  result = true;
	// 		} else if (!pokemon.volatiles["sacredbody"]) {
	// 		  pokemon.addVolatile("sacredbody");
	// 		  this.add("-start", pokemon, "sacred3", "[silent]");
	// 		  result = true;
	// 		  message = true;
	// 		}
	// 	  }
	// 	  if (!result)
	// 		return false;
	// 	  if (message)
	// 		this.add("-fieldactivate", "move: Sacred Body");
	// 	},
	// 	condition: {
	// 	  duration: 4,
	// 	  onEnd(target) {
	// 		this.add("-start", target, "sacred0");
	// 		this.heal(target.maxhp);
	// 	  },
	// 	  onResidualOrder: 24,
	// 	  onResidual(pokemon) {
	// 		const duration = pokemon.volatiles["sacredbody"].duration;
	// 		this.add("-start", pokemon, "sacred" + duration);
	// 	  }
	// 	},
	// 	name: "Sacred Body",
	// 	rating: 1,
	// 	num: 253
	//   },
	//   hocuspocus: {
	// 	onStart(source) {
	// 	  if (this.effectState.hocus) {
	// 		return;
	// 	  }
	// 	  this.field.addPseudoWeather("trickroom");
	// 	  this.effectState.hocus = true;
	// 	},
	// 	onFractionalPriorityPriority: -1,
	// 	onFractionalPriority(priority, pokemon, target, move) {
	// 	  if (this.field.getPseudoWeather("trickroom")) {
	// 		if (move.category === "Status") {
	// 		  return -0.1;
	// 		}
	// 	  }
	// 	},
	// 	name: "Hocus Pocus",
	// 	rating: 4,
	// 	num: 226
	//   },
	//   conductor: {
	// 	onModifyPriority(priority, pokemon, target, move) {
	// 	  if (move?.name === "Instruct" || move?.name === "Encore" || move?.name === "Tailwind") {
	// 		return priority + 1;
	// 	  }
	// 	},
	// 	onTryHit(target, source, move) {
	// 	  if (target !== source && move.flags["sound"]) {
	// 		this.add("-immune", target, "[from] ability: Conductor");
	// 		return null;
	// 	  }
	// 	},
	// 	onAllyTryHitSide(target, source, move) {
	// 	  if (move.flags["sound"]) {
	// 		this.add("-immune", this.effectState.target, "[from] ability: Conductor");
	// 	  }
	// 	},
	// 	isBreakable: true,
	// 	name: "Conductor",
	// 	rating: 2,
	// 	num: 43
	//   },
	//   performer: {
	// 	onTryHit(target, source, move) {
	// 	  if (target !== source && move.flags["sound"]) {
	// 		this.add("-immune", target, "[from] ability: Performer");
	// 		return null;
	// 	  }
	// 	},
	// 	onAllyTryHitSide(target, source, move) {
	// 	  if (move.flags["sound"]) {
	// 		this.add("-immune", this.effectState.target, "[from] ability: Performer");
	// 	  }
	// 	},
	// 	isBreakable: true,
	// 	name: "Performer",
	// 	rating: 2,
	// 	num: 43
	//   },
	//   crescentform: {
	// 	onSourceBasePowerPriority: 18,
	// 	onSourceBasePower(basePower, attacker, defender, move) {
	// 	  if (move.flags["beam"]) {
	// 		return this.chainModify(0.5);
	// 	  }
	// 	},
	// 	isBreakable: true,
	// 	name: "Crescent Form",
	// 	rating: 2,
	// 	num: 85
	//   },
	//   corrosivesurge: {
	// 	onStart(source) {
	// 	  this.field.setTerrain("corrosiveterrain");
	// 	},
	// 	name: "Corrosive Surge",
	// 	rating: 4,
	// 	num: 229
	//   },
	//   quickwit: {
	// 	onModifyPriority(priority, pokemon, target, move) {
	// 	  const basePowerAfterMultiplier = this.modify(move.basePower, this.event.modifier);
	// 	  this.debug("Base Power: " + basePowerAfterMultiplier);
	// 	  if (basePowerAfterMultiplier <= 60) {
	// 		return priority + 1;
	// 	  }
	// 	},
	// 	name: "Quick Wit",
	// 	rating: 2.5,
	// 	num: 177
	//   },
	//   hospitality: {
	// 	name: "Hospitality",
	// 	rating: 0,
	// 	num: 50
	//   },
	//   blindfury: {
	// 	onSourceModifyDamage(damage, source, target, move) {
	// 	  let mod = 1;
	// 	  mod /= 2;
	// 	  return this.chainModify(mod);
	// 	},
	// 	onTryHit(target, source, move) {
	// 	  if (target !== source && move.flags["raidimmune"]) {
	// 		this.add("-immune", target, "[from] ability: Blind Fury");
	// 		return null;
	// 	  }
	// 	},
	// 	onAllyTryHitSide(target, source, move) {
	// 	  if (move.flags["raidimmune"]) {
	// 		this.add("-immune", this.effectState.target, "[from] ability: Blind Fury");
	// 	  }
	// 	},
	// 	onUpdate(pokemon) {
	// 	  if (pokemon.volatiles["confusion"]) {
	// 		this.add("-activate", pokemon, "ability: Blind Fury");
	// 		pokemon.removeVolatile("confusion");
	// 	  }
	// 	  if (pokemon.volatiles["attract"]) {
	// 		this.add("-activate", pokemon, "ability: Blind Fury");
	// 		pokemon.removeVolatile("attract");
	// 		this.add("-end", pokemon, "move: Attract", "[from] ability: Blind Fury");
	// 	  }
	// 	},
	// 	onTryAddVolatile(status, pokemon) {
	// 	  if (status.id === "confusion")
	// 		return null;
	// 	},
	// 	onHit(target, source, move) {
	// 	  if (move?.volatileStatus === "confusion") {
	// 		this.add("-immune", target, "confusion", "[from] ability: Blind Fury");
	// 	  }
	// 	},
	// 	onImmunity(type, pokemon) {
	// 	  if (type === "attract")
	// 		return false;
	// 	},
	// 	onTakeItem(item, pokemon, source) {
	// 	  if (!this.activeMove)
	// 		throw new Error("Battle.activeMove is null");
	// 	  if (!pokemon.hp || pokemon.item === "stickybarb")
	// 		return;
	// 	  if (source && source !== pokemon || this.activeMove.id === "knockoff") {
	// 		this.add("-activate", pokemon, "ability: Blind Fury");
	// 		return false;
	// 	  }
	// 	},
	// 	onResidualOrder: 28,
	// 	onResidualSubOrder: 2,
	// 	onResidual(pokemon) {
	// 	  if (pokemon.activeTurns) {
	// 		if (this.randomChance(3, 10)) {
	// 		  this.boost({ atk: 1 });
	// 		  this.boost({ spa: 1 });
	// 		  this.boost({ spe: 1 });
	// 		  return;
	// 		}
	// 		if (this.randomChance(3, 10)) {
	// 		  this.boost({ def: 1 });
	// 		  this.boost({ spd: 1 });
	// 		  return;
	// 		}
	// 		if (this.randomChance(3, 10)) {
	// 		  pokemon.cureStatus();
	// 		  return;
	// 		}
	// 		if (this.randomChance(3, 10)) {
	// 		  for (const pokemon of this.getAllActive()) {
	// 			pokemon.clearBoosts();
	// 		  }
	// 		  return;
	// 		}
	// 		if (this.randomChance(3, 10)) {
	// 		  for (const moveSlot of pokemon.moveSlots) {
	// 			moveSlot.pp = moveSlot.maxpp;
	// 		  }
	// 		  return;
	// 		}
	// 		if (this.randomChance(5, 10)) {
	// 		  pokemon.heal(pokemon.baseMaxhp / 3);
	// 		  return;
	// 		}
	// 	  }
	// 	},
	// 	isBreakable: true,
	// 	name: "Blind Fury",
	// 	rating: 2,
	// 	num: 43
	//   },
	//   breach: {
	// 	onModifyMove(move, attacker, defender) {
	// 	  if (move.category === "Physical") {
	// 	  const removeAll = [
	// 		"spikes",
	// 		"toxicspikes",
	// 		"stealthrock",
	// 		"stickyweb",
	// 		"gmaxsteelsurge"
	// 	  ];
	// 	  for (const sideCondition of removeAll) {
	// 		if (attacker.side.removeSideCondition(sideCondition)) {
	// 		  this.add("-sideend", attacker.side, this.dex.conditions.get(sideCondition).name, "[from] ability: Breach", "[of] " + attacker);
	// 		}
	// 		if (defender?.side.removeSideCondition(sideCondition)) {
	// 		  this.add("-sideend", defender.side, this.dex.conditions.get(sideCondition).name, "[from] ability: Breach", "[of] " + defender);
	// 		}
	// 	  }
	// 	  }
	// 	},
	// 	name: "Breach",
	// 	rating: 1,
	// 	num: 133
	//   },
	//   exalt: {
	// 	onDamagingHit(damage, target, source, move) {
	// 	  if (move.category !== "Status") {
	// 		if (!source.hasType("Dragon")) {
	// 		if (source.addType("Dragon")) {
	// 		this.add("-start", source, "typeadd", "Dragon", "[from] ability: Exalt");
	// 		if (source.side.active.length === 2 && source.position === 1) {
	// 		  const action = this.queue.willMove(source);
	// 		  if (action) {
	// 			action.targetLoc = -1;
	// 		  }
	// 		}
	// 	  }
	// 	  }
	// 	  }
	// 	},
	// 	name: "Exalt",
	// 	rating: 1,
	// 	num: 133
	//   },
	//   glitch: {
	// 	onStart(pokemon) {
	// 	  pokemon.addVolatile("slowstart");
	// 	},
	// 	onEnd(pokemon) {
	// 	  delete pokemon.volatiles["slowstart"];
	// 	  this.add("-end", pokemon, "Glitch", "[silent]");
	// 	},
	// 	condition: {
	// 	  duration: 3,
	// 	  onResidualOrder: 28,
	// 	  onResidualSubOrder: 2,
	// 	  onStart(target) {
	// 		this.add("-start", target, "ability: Glitch");
	// 	  },
	// 	  onModifyAtkPriority: 5,
	// 	  onModifyAtk(atk, pokemon) {
	// 		return this.chainModify(1.5);
	// 	  },
	// 	  onModifySpe(spe, pokemon) {
	// 		return this.chainModify(1.5);
	// 	  },
	// 	  onEnd(target) {
	// 		this.add("-end", target, "Glitch");
	// 	  }
	// 	},
	// 	name: "Glitch",
	// 	rating: -1,
	// 	num: 112
	//   },
	//   igneous: {
	// 	onSourceModifyAtkPriority: 6,
	// 	onSourceModifyAtk(atk, attacker, defender, move) {
	// 	  if (move.type === "Water" || move.type === "Fire") {
	// 		this.debug("Igneous weaken");
	// 		return this.chainModify(0.5);
	// 	  }
	// 	},
	// 	onSourceModifySpAPriority: 5,
	// 	onSourceModifySpA(atk, attacker, defender, move) {
	// 	  if (move.type === "Water" || move.type === "Fire") {
	// 		this.debug("Igneous weaken");
	// 		return this.chainModify(0.5);
	// 	  }
	// 	},
	// 	isBreakable: true,
	// 	name: "Igneous",
	// 	rating: 3.5,
	// 	num: 47
	//   },
	//   prowler: {
	// 	onSourceAfterFaint(length, target, source, effect) {
	// 	  if (effect && effect.effectType === "Move") {
	// 		source.heal(source.baseMaxhp / 4);
	// 	  }
	// 	},
	// 	name: "Prowler",
	// 	rating: 3,
	// 	num: 153
	//   },
	//   mindseye: {
	// 	onTryBoost(boost, target, source, effect) {
	// 		if (source && target === source) return;
	// 		if (boost.accuracy && boost.accuracy < 0) {
	// 			delete boost.accuracy;
	// 			if (!(effect as ActiveMove).secondaries) {
	// 				this.add("-fail", target, "unboost", "accuracy", "[from] ability: Mind's Eye", "[of] " + target);
	// 			}
	// 		}
	// 	},
	// 	onModifyMovePriority: -5,
	// 	onModifyMove(move) {
	// 		move.ignoreEvasion = true;
	// 		if (!move.ignoreImmunity) move.ignoreImmunity = {};
	// 		if (move.ignoreImmunity !== true) {
	// 			move.ignoreImmunity['Fighting'] = true;
	// 			move.ignoreImmunity['Normal'] = true;
	// 		}
	// 	},
	// 	isBreakable: true,
	// 	name: "Mind's Eye",
	// 	rating: 3,
	// 	num: 113
	//   },
	//   prospect: {
	// 	onStart(pokemon) {
	// 	  for (const target of pokemon.foes()) {
	// 		for (const moveSlot of target.moveSlots) {
	// 		  const move = this.dex.moves.get(moveSlot.move);
	// 		  if (move.category === "Status")
	// 			continue;
	// 		  const moveType = move.id === "hiddenpower" ? target.hpType : move.type;
	// 		  if (this.dex.getImmunity(moveType, pokemon) && this.dex.getEffectiveness(moveType, pokemon) > 0 || move.ohko) {
	// 			this.add("-ability", pokemon, "Prospect");
	// 			target.addVolatile("prospect");
	// 			return;
	// 		  }
	// 		}
	// 	  }
	// 	},
	// 	onDamagingHit(damage, target, source, move) {
	// 	  if (source.volatiles["disable"])
	// 		return;
	// 	  if (!source.volatiles["prospect"])
	// 		return;
	// 	  if (!move.isMax && !move.flags["futuremove"] && move.id !== "struggle") {
	// 		if (this.randomChance(3, 10)) {
	// 		  source.addVolatile("disable", this.effectState.target);
	// 		}
	// 	  }
	// 	},
	// 	name: "Prospect",
	// 	rating: 0.5,
	// 	num: 107
	//   },
	//   chronostasis: {
	// 	onStart(pokemon) {
	// 	  if (this.suppressingAbility(pokemon))
	// 		return;
	// 	  this.add("-ability", pokemon, "Chronostasis");
	// 	},
	// 	onAnyModifySpe(spe, pokemon) {
	// 	  const abilityHolder = this.effectState.target;
	// 	  if (pokemon.hasAbility("Chronostasis"))
	// 		return;
	// 	  this.debug("Chronostasis Spe drop");
	// 	  return this.chainModify(0.75);
	// 	},
	// 	name: "Chronostasis",
	// 	rating: 4.5,
	// 	num: 285
	//   },
};