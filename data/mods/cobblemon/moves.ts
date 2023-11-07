export const Moves: {[moveid: string]: ModdedMoveData} = {
	adamantinemolars: {
		num: 10002,
		basePower: 75,
		accuracy: 100,
		category: "Physical",
		type: "Steel",
		name: "Adamantine Molars",
		pp: 15,
		priority: 0,
		flags: { bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		contestType: "Tough",
		shortDesc: "20% chance to lower the target's Def by 1 stage.",
	},
	colddeparture: {
		num: 10004,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Cold Departure",
		pp: 20,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1 },
		onHit(target, source, move) {
			const success = this.boost({def: -1, spd: -1, spe: -1}, target, source);
			if(!success && !target.hasAbility('mirrorarmor')) {
				delete move.selfSwitch;
			}
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: { effect: "healreplacement" },
		contestType: "Cool",
		shortDesc: "Lowers the target's Defense, Special Defense, and Speed by 1 stage; Switches Out.",
	},
	decisivebolt: {
		num: 10000,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: 'Decisive Bolt',
		pp: 5,
		priority: 2,
		flags: { contact: 1, protect: 1, mirror: 1 },
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	enflame: {
		num: 20006,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Enflame",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, contact: 1},
		secondary: null,
		onTry(source) {
			if (source.species.baseForme === "Aegislash") return;
			this.attrLastMove("[still]");
			this.hint("Only a Pokemon whose form is Aegislash-Delta or Aegislash-Delta-Blade can use this move.");
			return null;
		},onModifyMove(move, pokemon) {
			// Already defaults to Status for the condition, so no need for a Aegislash-Delta check.
			if(pokemon.species.name !== "Aegislash-Delta-Blade") return;
			move.target = "normal";
			move.basePower = 100;
			move.category =
				// No need for an if condition here.
				// We can do a conditional variable declartion here using ? :.
				(pokemon.getStat("atk", false, true) > pokemon.getStat("spa", false, true)) ?
					"Physical" : "Special";
		},
		onHit(pokemon) {
			// We are only checking if Aegislash-Delta exist.
			// We can just check if it isn't, and if true, then we just return.
			// Makes this code cleaner.
			if (pokemon.species.name !== "Aegislash-Delta") return;
			
			let factor = 0.25;
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add("-fail", pokemon, "heal");
				return this.NOT_FAIL;
			}
			return success;
		},
		target: "self",
		type: "Fire",
	},
	infernalshield: {
		num: 20005,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Infernal Shield",
		pp: 5,
		priority: 4,
		flags: { noassist: 1, failcopycat: 1, failinstruct: 1 },
		stallingMove: true,
		volatileStatus: "infernalshield",
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile("stall");
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add("-singleturn", target, "Protect");
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags["protect"] || move.category === "Status") {
					if (["gmaxoneblow", "gmaxrapidflow"].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) move.smartTarget = false;
				else this.add("-activate", target, "move: Infernal Shield");

				const lockedmove = source.getVolatile("lockedmove");
				if (lockedmove && (source.volatiles["lockedmove"].duration === 2))
					delete source.volatiles["lockedmove"];

				if (this.checkMoveMakesContact(move, source, target)) 
					source.trySetStatus("brn", target);

				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target))
					source.trySetStatus("brn", target);
			},
		},
		secondary: null,
		target: "self",
		type: "Fire",
		contestType: "Cool",
	},
	whiskaway: {
		num: 10001,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Whisk Away",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1 },
		onBasePower(basePower, source, target, move) {
			const item = target.getItem();
			if (!this.singleEvent("TakeItem", item, target.itemState, target, target, move, item)) return;
			if (item.id) return this.chainModify(1.5);
		},
		onAfterHit(target, source) {
			if (!source.hp) return;
			const item = target.takeItem();
			if (item) this.add("-enditem", target, item.name, "[from] move: Whisk Away", "[of] " + source);
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	wretchedstab: {
		num: 20007,
		accuracy: 100,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 + 5 * pokemon.side.totalFainted;
		},
		category: "Physical",
		name: "Wretched Stab",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Ghost",
		shortDesc: "The user attacks to avenge its allies. The more defeated allies there are in the party, the stronger the move. Hits 2-5 times."
	},
	// decisivebolt: {
	// 	num: 10000,
	// 	accuracy: 100,
	// 	basePower: 40,
	// 	category: "Special",
	// 	name: "Decisive Bolt",
	// 	pp: 5,
	// 	priority: 2,
	// 	flags: { contact: 1, protect: 1, mirror: 1 },
	// 	secondary: null,
	// 	target: "normal",
	// 	type: "Electric",
	// 	contestType: "Cool"
	//   },
	//   whiskaway: {
	// 	num: 10001,
	// 	accuracy: 100,
	// 	basePower: 65,
	// 	category: "Special",
	// 	name: "Whisk Away",
	// 	pp: 20,
	// 	priority: 0,
	// 	flags: { contact: 1, protect: 1, mirror: 1 },
	// 	onBasePower(basePower, source, target, move) {
	// 	  const item = target.getItem();
	// 	  if (!this.singleEvent("TakeItem", item, target.itemState, target, target, move, item))
	// 		return;
	// 	  if (item.id) {
	// 		return this.chainModify(1.5);
	// 	  }
	// 	},
	// 	onAfterHit(target, source) {
	// 	  if (source.hp) {
	// 		const item = target.takeItem();
	// 		if (item) {
	// 		  this.add("-enditem", target, item.name, "[from] move: Knock Off", "[of] " + source);
	// 		}
	// 	  }
	// 	},
	// 	secondary: null,
	// 	target: "normal",
	// 	type: "Ghost",
	// 	contestType: "Clever"
	//   },
	//   adamantinemolars: {
	// 	num: 10002,
	// 	accuracy: 100,
	// 	basePower: 75,
	// 	category: "Physical",
	// 	name: "Adamantine Molars",
	// 	pp: 15,
	// 	priority: 0,
	// 	flags: { bite: 1, contact: 1, protect: 1, mirror: 1 },
	// 	secondary: {
	// 	  chance: 20,
	// 	  boosts: {
	// 		def: -1
	// 	  }
	// 	},
	// 	target: "normal",
	// 	type: "Steel",
	// 	contestType: "Tough"
	//   },
	//   iaislash: {
	// 	num: 10003,
	// 	accuracy: 100,
	// 	basePower: 80,
	// 	category: "Physical",
	// 	name: "Iai Slash",
	// 	pp: 5,
	// 	priority: 1,
	// 	flags: { contact: 1, protect: 1, mirror: 1 },
	// 	onTry(source, target) {
	// 	  const action = this.queue.willMove(target);
	// 	  const move = action?.choice === "move" ? action.move : null;
	// 	  if (!move || move.category === "Status" && move.id !== "mefirst" || target.volatiles["mustrecharge"]) {
	// 		return false;
	// 	  }
	// 	},
	// 	secondary: null,
	// 	target: "normal",
	// 	type: "Rock",
	// 	contestType: "Clever"
	//   },
	//   colddeparture: {
	// 	num: 10004,
	// 	accuracy: 100,
	// 	basePower: 0,
	// 	category: "Status",
	// 	name: "Cold Departure",
	// 	pp: 20,
	// 	priority: 0,
	// 	flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1 },
	// 	onHit(target, source, move) {
	// 	  const success = this.boost({ def: -1, spd: -1, spe: -1 }, target, source);
	// 	  if (!success && !target.hasAbility("mirrorarmor")) {
	// 		delete move.selfSwitch;
	// 	  }
	// 	},
	// 	selfSwitch: true,
	// 	secondary: null,
	// 	target: "normal",
	// 	type: "Fairy",
	// 	zMove: { effect: "healreplacement" },
	// 	contestType: "Cool"
	//   },
	// infernalshield: {
	//   num: 20005,
	//   accuracy: 100,
	//   basePower: 0,
	//   category: "Status",
	//   name: "Infernal Shield",
	//   pp: 5,
	//   priority: 4,
	//   flags: { noassist: 1, failcopycat: 1, failinstruct: 1 },
	//   stallingMove: true,
	//   volatileStatus: "infernalshield",
	//   onPrepareHit(pokemon) {
	// 	return !!this.queue.willAct() && this.runEvent("StallMove", pokemon);
	//   },
	//   onHit(pokemon) {
	// 	pokemon.addVolatile("stall");
	//   },
	//   condition: {
	// 	duration: 1,
	// 	onStart(target) {
	// 	  this.add("-singleturn", target, "Protect");
	// 	},
	// 	onTryHitPriority: 3,
	// 	onTryHit(target, source, move) {
	// 	  if (!move.flags["protect"] || move.category === "Status") {
	// 		if (["gmaxoneblow", "gmaxrapidflow"].includes(move.id))
	// 		  return;
	// 		if (move.isZ || move.isMax)
	// 		  target.getMoveHitData(move).zBrokeProtect = true;
	// 		return;
	// 	  }
	// 	  if (move.smartTarget) {
	// 		move.smartTarget = false;
	// 	  } else {
	// 		this.add("-activate", target, "move: Protect");
	// 	  }
	// 	  const lockedmove = source.getVolatile("lockedmove");
	// 	  if (lockedmove) {
	// 		if (source.volatiles["lockedmove"].duration === 2) {
	// 		  delete source.volatiles["lockedmove"];
	// 		}
	// 	  }
	// 	  if (this.checkMoveMakesContact(move, source, target)) {
	// 		source.trySetStatus("brn", target);
	// 	  }
	// 	  return this.NOT_FAIL;
	// 	},
	// 	onHit(target, source, move) {
	// 	  if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
	// 		source.trySetStatus("brn", target);
	// 	  }
	// 	}
	//   },
	//   secondary: null,
	//   target: "self",
	//   type: "Fire",
	//   contestType: "Cool"
	// },
	//   enflame: {
	// 	num: 20006,
	// 	accuracy: 100,
	// 	basePower: 0,
	// 	category: "Status",
	// 	isNonstandard: "Past",
	// 	name: "Enflame",
	// 	pp: 10,
	// 	priority: 0,
	// 	flags: { protect: 1, mirror: 1, contact: 1},
	// 	secondary: null,
	// 	onTry(source) {
	// 	  if (source.species.baseSpecies === "Aegislash") {
	// 		return;
	// 	  }
	// 	  this.attrLastMove("[still]");
	// 	  this.hint("Only a Pokemon whose form is Aegislash or Aegislash-delta-Blade can use this move.");
	// 	  return null;
	// 	},
	// 	onModifyMove(move, pokemon) {
	// 	  if (pokemon.species.name === "Aegislash-delta-Blade") {
	// 		move.target = "normal"
	// 		if (pokemon.getStat("atk", false, true) > pokemon.getStat("spa", false, true)) {
	// 		move.basePower = 100
	// 		move.category = "Physical";
	// 		} else if (pokemon.getStat("atk", false, true) < pokemon.getStat("spa", false, true)) {
	// 		  move.basePower = 100
	// 		  move.category = "Special";
	// 		  }
	// 	  }
	// 	  else 
	// 	  if (pokemon.species.name === "Aegislash-delta") {
	// 		this.hint("GOT HERE STATUS");
	// 		  move.category = "Status";
	// 	  }
	// 	},
	// 	onHit(pokemon) {
	// 	  if (pokemon.species.name === "Aegislash-delta") {
	// 	  let factor = 0.25;
	// 	  const success = !!this.heal(this.modify(pokemon.maxhp, factor));
	// 	  if (!success) {
	// 		this.add("-fail", pokemon, "heal");
	// 		return this.NOT_FAIL;
	// 	  }
	// 	  return success;
	// 	}
	// 	},
	// 	target: "self",
	// 	type: "Fire"
	//   },
	//   wretchedstab: {
	// 	num: 20007,
	// 	accuracy: 100,
	// 	basePower: 20,
	// 	basePowerCallback(pokemon, target, move) {
	// 	  return 20 + 5 * pokemon.side.totalFainted;
	// 	},
	// 	category: "Physical",
	// 	name: "Wretched Stab",
	// 	pp: 10,
	// 	priority: 0,
	// 	flags: { protect: 1, mirror: 1 },
	// 	multihit: [2, 5],
	// 	secondary: null,
	// 	target: "normal",
	// 	type: "Ghost"
	//   },
	//   gigatonanchor: {
	// 	num: 20008,
	// 	accuracy: 100,
	// 	basePower: 160,
	// 	category: "Physical",
	// 	name: "Gigaton Anchor",
	// 	pp: 5,
	// 	priority: 0,
	// 	flags: { protect: 1, mirror: 1 },
	// 	onDisableMove(pokemon) {
	// 	  if (pokemon.lastMove?.id === "gigatonanchor")
	// 		pokemon.disableMove("gigatonanchor");
	// 	},
	// 	beforeMoveCallback(pokemon) {
	// 	  if (pokemon.lastMove?.id === "gigatonanchor")
	// 		pokemon.addVolatile("gigatonanchor");
	// 	},
	// 	onAfterMove(pokemon) {
	// 	  if (pokemon.removeVolatile("gigatonanchor")) {
	// 		this.add("-hint", "Some effects can force a Pokemon to use Gigaton Anchor again in a row.");
	// 	  }
	// 	},
	// 	condition: {},
	// 	secondary: null,
	// 	target: "normal",
	// 	type: "Steel"
	//   },
	//   soulsap: {
	// 	num: 20009,
	// 	accuracy: true,
	// 	basePower: 0,
	// 	category: "Special",
	// 	name: "Soul Sap",
	// 	pp: 2,
	// 	priority: 0,
	// 	flags: { contact: 1, protect: 1, heal: 1, noassist: 1, failcopycat: 1, bite: 1},
	// 	onDisableMove(pokemon) {
	// 	  if (pokemon.lastMove?.id === "soulsap")
	// 		pokemon.disableMove("soulsap");
	// 	},
	// 	beforeMoveCallback(pokemon) {
	// 	  if (pokemon.lastMove?.id === "soulsap")
	// 		pokemon.addVolatile("soulsap");
	// 	},
	// 	onAfterMove(pokemon) {
	// 	  if (pokemon.removeVolatile("soulsap")) {
	// 		this.add("-hint", "Some effects can force a Pokemon to use Soul Sap again in a row.");
	// 	  }
	// 	},
	// 	onModifyMove(move, pokemon) {
	// 	  if (pokemon.getStat("atk", false, true) > pokemon.getStat("spa", false, true))
	// 		move.category = "Physical";
	// 	},
	// 	onHit(target, pokemon) {
	// 	  for (const moveSlot of pokemon.moveSlots) {
	// 		if (moveSlot.id == "soulsap")
	// 		  moveSlot.pp = moveSlot.maxpp;
	// 	  }
	// 	  let move = target.lastMove;
	// 	  if (!move || move.isZ)
	// 		return false;
	// 	  if (move.isMax && move.baseMove)
	// 		move = this.dex.moves.get(move.baseMove);
	// 	  const ppDeducted = target.deductPP(move.id, 2);
	// 	  if (!ppDeducted)
	// 		return false;
	// 	  this.add("-activate", target, "move: Spite", move.name, ppDeducted);
	// 	},
	// 	secondary: null,
	// 	target: "normal",
	// 	type: "Dark",
	// 	basePower: 130,
	// 	accuracy: 85,
	// 	zMove: { effect: "crit2" },
	// 	contestType: "Cute"
	//   },
	//   thebelltolls: {
	// 	num: 20010,
	// 	accuracy: 90,
	// 	basePower: 95,
	// 	category: "Special",
	// 	name: "The Bell Tolls",
	// 	pp: 5,
	// 	priority: 0,
	// 	flags: { contact: 1, protect: 1, mirror: 1 },
	// 	secondary: null,
	// 	onAfterHit(target, pokemon) {
	// 	  if (target.hp && target.removeVolatile("perishsong")) {
	// 		this.add("-end", pokemon, "Leech Seed", "[from] move: Rapid Spin", "[of] " + pokemon);
	// 		target.faint();
	// 	  }
	// 	},
	// 	target: "normal",
	// 	type: "Dark",
	// 	contestType: "Cool"
	//   },
	//   corrosiveterrain: {
	// 	num: 20011,
	// 	accuracy: true,
	// 	basePower: 0,
	// 	category: "Status",
	// 	name: "Corrosive Terrain",
	// 	pp: 10,
	// 	priority: 0,
	// 	flags: { nonsky: 1 },
	// 	terrain: "corrosiveterrain",
	// 	condition: {
	// 	  duration: 5,
	// 	  durationCallback(source, effect) {
	// 		if (source?.hasItem("terrainextender")) {
	// 		  return 8;
	// 		}
	// 		return 5;
	// 	  },
	// 	  onFieldStart(field, source, effect) {
	// 		if (effect?.effectType === "Ability") {
	// 		  this.add("-fieldstart", "move: Corrosive Terrain", "[from] ability: " + effect.name, "[of] " + source);
	// 		} else {
	// 		  this.add("-fieldstart", "move: Corrosive Terrain");
	// 		}
	// 	  },
	// 	  onResidualOrder: 5,
	// 	  onResidualSubOrder: 2,
	// 	  onResidual(pokemon) {
	// 		if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
	// 		  if (pokemon.status || pokemon.hasAbility("comatose")) {
	// 			if (!pokemon.hasType("Poison") && !pokemon.hasType("Steel")) {
	// 			  if (!pokemon.hasAbility("toxicboost") && !pokemon.hasAbility("magicguard") && !pokemon.hasAbility("poisonheal") && !pokemon.hasAbility("immunity") && !pokemon.hasAbility("pastelveil") && !pokemon.hasAbility("wonderguard")) {
	// 				this.damage(pokemon.baseMaxhp / 16, pokemon, pokemon);
	// 			  }
	// 			}
	// 		  }
	// 		} else {
	// 		  this.debug(`Pokemon semi-invuln or not grounded; Corrosive Terrain skipped`);
	// 		}
	// 	  },
	// 	  onFieldResidualOrder: 27,
	// 	  onFieldResidualSubOrder: 7,
	// 	  onFieldEnd() {
	// 		this.add("-fieldend", "move: Corrosive Terrain");
	// 	  }
	// 	},
	// 	secondary: null,
	// 	target: "all",
	// 	type: "Poison",
	// 	zMove: { boost: { def: 1 } },
	// 	contestType: "Beautiful"
	//   },
	//   bizzareelixir: {
	// 	num: 20012,
	// 	accuracy: 100,
	// 	basePower: 0,
	// 	onHit(pokemon) {
	// 	  if (pokemon.hasItem("leftovers")) {
	// 		pokemon.heal(pokemon.baseMaxhp);
	// 	  }
	// 	  else if (pokemon.hasItem("choicescarf")) {
	// 		this.boost({ spe: 2 });
	// 	  }
	// 	  else if (pokemon.hasItem("choiceband")) {
	// 		this.boost({ atk: 2 });
	// 	  }
	// 	  else if (pokemon.hasItem("choicespecs")) {
	// 		this.boost({ spa: 2 });
	// 	  }
	// 	  else if (pokemon.hasItem("lifeorb")) {
	// 		this.boost({ atk: 3 });
	// 		this.damage(pokemon.baseMaxhp / 4, pokemon, pokemon);
	// 	  }
	// 	  else if (pokemon.hasItem("airballoon")) {
	// 		pokemon.setAbility("levitate");
	// 	  }
	// 	  else if (pokemon.hasItem("focussash")) {
	// 		pokemon.setAbility("sturdy");
	// 	  }
	// 	  else if (pokemon.hasItem("heavydutyboots")) {
	// 		pokemon.setAbility("magicguard");
	// 	  }
	// 	  else if (pokemon.hasItem("rockyhelmet")) {
	// 		pokemon.setAbility("roughskin");
	// 	  }
	// 	  else if (pokemon.hasItem("toxicorb")) {
	// 		pokemon.setAbility("poisonheal");
	// 	  }
	// 	  else if (pokemon.hasItem("blacksludge")) {
	// 		this.damage(pokemon.baseMaxhp / 4, pokemon, pokemon);
	// 	  }
	// 	  else if (pokemon.hasItem("kingsrock")) {
	// 		pokemon.setAbility("stench");
	// 	  }
	// 	  else if (pokemon.hasItem("ironball")) {
	
	// 	  }
	// 	  else if (pokemon.hasItem("damprock")) {
	
	// 	  }
	// 	  else if (pokemon.hasItem("heatrock")) {
	
	// 	  }
	// 	  else if (pokemon.hasItem("icyrock")) {
	
	// 	  }
	// 	  else if (pokemon.hasItem("smoothrock")) {
			
	// 	  }
	// 	  else if (pokemon.hasItem("flameorb")) {
	// 		pokemon.setAbility("guts");
	// 	  }
	// 	  else if (pokemon.hasItem("weaknesspolicy")) {
	// 		this.boost({ atk: 2 });
	// 		this.boost({ spa: 2 });
	// 	  }
	// 	  else if (pokemon.hasItem("eviolite")) {
	// 		this.boost({ def: 2 });
	// 		this.boost({ spd: 2 });
	// 	  } else {
	// 		if (this.randomChance(7, 10)) {
	// 		  this.boost({ atk: 1 });
	// 		  this.boost({ spa: 1 });
	// 		} else {
	// 		  pokemon.addVolatile("confusion");
	// 		}
	// 	  }
	// 	  pokemon.takeItem();
	// 	},
	// 	category: "Status",
	// 	name: "Bizzare Elixir",
	// 	pp: 15,
	// 	priority: 0,
	// 	flags: { },
	// 	secondary: null,
	// 	target: "self",
	// 	type: "Fairy",
	// 	contestType: "Clever"
	//   },
	//   chillingvenom: {
	// 	num: 20013,
	// 	accuracy: 95,
	// 	basePower: 100,
	// 	category: "Physical",
	// 	name: "Chilling Venom",
	// 	pp: 10,
	// 	flags: { contact: 1, protect: 1, mirror: 1 },
	// 	onEffectiveness(typeMod, target, type, move) {
	// 	  return typeMod + this.dex.getEffectiveness("Poison", type);
	// 	},
	// 	priority: 0,
	// 	secondary: null,
	// 	target: "any",
	// 	type: "Ice",
	// 	zMove: { basePower: 170 },
	// 	contestType: "Tough"
	//   },
	//   seekingembers: {
	// 	num: 20014,
	// 	accuracy: 100,
	// 	basePower: 40,
	// 	basePowerCallback(pokemon, target, move) {
	// 	  if (target.beingCalledBack || target.switchFlag) {
	// 		this.debug("Seeking Embers damage boost");
	// 		return move.basePower * 2;
	// 	  }
	// 	  return move.basePower;
	// 	},
	// 	category: "Physical",
	// 	isNonstandard: "Past",
	// 	name: "Seeking Embers",
	// 	pp: 20,
	// 	priority: 0,
	// 	flags: { contact: 1, protect: 1, mirror: 1 },
	// 	beforeTurnCallback(pokemon) {
	// 	  for (const side of this.sides) {
	// 		if (side.hasAlly(pokemon))
	// 		  continue;
	// 		side.addSideCondition("seekingembers", pokemon);
	// 		const data = side.getSideConditionData("seekingembers");
	// 		if (!data.sources) {
	// 		  data.sources = [];
	// 		}
	// 		data.sources.push(pokemon);
	// 	  }
	// 	},
	// 	onModifyMove(move, source, target) {
	// 	  if (target?.beingCalledBack || target?.switchFlag)
	// 		move.accuracy = true;
	// 	},
	// 	onTryHit(target, pokemon) {
	// 	  target.side.removeSideCondition("seekingembers");
	// 	},
	// 	condition: {
	// 	  duration: 1,
	// 	  onBeforeSwitchOut(pokemon) {
	// 		this.debug("Seeking Embers start");
	// 		let alreadyAdded = false;
	// 		pokemon.removeVolatile("destinybond");
	// 		for (const source of this.effectState.sources) {
	// 		  if (!source.isAdjacent(pokemon) || !this.queue.cancelMove(source) || !source.hp)
	// 			continue;
	// 		  if (!alreadyAdded) {
	// 			this.add("-activate", pokemon, "move: Seeking Embers");
	// 			alreadyAdded = true;
	// 		  }
	// 		  if (source.canMegaEvo || source.canUltraBurst) {
	// 			for (const [actionIndex, action] of this.queue.entries()) {
	// 			  if (action.pokemon === source && action.choice === "megaEvo") {
	// 				this.actions.runMegaEvo(source);
	// 				this.queue.list.splice(actionIndex, 1);
	// 				break;
	// 			  }
	// 			}
	// 		  }
	// 		  this.actions.runMove("seekingembers", source, source.getLocOf(pokemon));
	// 		}
	// 	  }
	// 	},
	// 	secondary: null,
	// 	target: "normal",
	// 	type: "Fire",
	// 	contestType: "Clever"
	//   },
	//   matchagotcha: {
	// 	num: 20015,
	// 	accuracy: 100,
	// 	basePower: 80,
	// 	category: "Special",
	// 	name: "Matcha Gotcha",
	// 	pp: 15,
	// 	priority: 0,
	// 	flags: { protect: 1, mirror: 1, heal: 1 },
	// 	drain: [1, 2],
	// 	secondary: {
	// 	  chance: 20,
	// 	  status: "brn"
	// 	},
	// 	target: "normal",
	// 	type: "Grass",
	// 	contestType: "Clever"
	//   },
	//   tomahawkvolley: {
	// 	num: 20016,
	// 	accuracy: 85,
	// 	basePower: 25,
	// 	category: "Physical",
	// 	name: "Tomahawk Volley",
	// 	pp: 10,
	// 	priority: 0,
	// 	flags: { protect: 1, mirror: 1 },
	// 	multihit: [2, 5],
	// 	secondary: null,
	// 	target: "normal",
	// 	type: "Fire",
	// 	zMove: { basePower: 140 },
	// 	maxMove: { basePower: 130 },
	// 	contestType: "Cute"
	//   },
	//   error151: {
	// 	num: 20017,
	// 	accuracy: 30,
	// 	basePower: 0,
	// 	category: "Physical",
	// 	name: "Error151",
	// 	pp: 5,
	// 	priority: 0,
	// 	flags: { protect: 1, mirror: 1, raidimmune: 1 },
	// 	secondary: null,
	// 	ohko: "Bug",
	// 	target: "normal",
	// 	type: "Bug",
	// 	zMove: { basePower: 180 },
	// 	maxMove: { basePower: 130 },
	// 	contestType: "Beautiful"
	//   },
	//   bloodmoon: {
	// 	num: 20018,
	// 	accuracy: 100,
	// 	basePower: 140,
	// 	category: "Special",
	// 	name: "Blood Moon",
	// 	pp: 5,
	// 	priority: 0,
	// 	flags: { protect: 1, mirror: 1 },
	// 	onDisableMove(pokemon) {
	// 	  if (pokemon.lastMove?.id === "bloodmoon")
	// 		pokemon.disableMove("bloodmoon");
	// 	},
	// 	beforeMoveCallback(pokemon) {
	// 	  if (pokemon.lastMove?.id === "bloodmoon")
	// 		pokemon.addVolatile("bloodmoon");
	// 	},
	// 	onAfterMove(pokemon) {
	// 	  if (pokemon.removeVolatile("bloodmoon")) {
	// 		this.add("-hint", "Some effects can force a Pokemon to use Blood Moon again in a row.");
	// 	  }
	// 	},
	// 	condition: {},
	// 	secondary: null,
	// 	target: "normal",
	// 	type: "Normal"
	//   },
	//   divination: {
	// 	num: 248,
	// 	accuracy: 100,
	// 	basePower: 120,
	// 	category: "Special",
	// 	name: "Divination",
	// 	pp: 10,
	// 	priority: 0,
	// 	flags: { allyanim: 1, futuremove: 1 },
	// 	ignoreImmunity: true,
	// 	onTry(source, target) {
	// 	  if (!target.side.addSlotCondition(target, "futuremove"))
	// 		return false;
	// 	  Object.assign(target.side.slotConditions[target.position]["futuremove"], {
	// 		duration: 3,
	// 		move: "futuresight",
	// 		source,
	// 		moveData: {
	// 		  id: "divination",
	// 		  name: "Divination",
	// 		  accuracy: 100,
	// 		  basePower: 120,
	// 		  category: "Special",
	// 		  priority: 0,
	// 		  flags: { allyanim: 1, futuremove: 1 },
	// 		  ignoreImmunity: false,
	// 		  effectType: "Move",
	// 		  type: "Dark"
	// 		}
	// 	  });
	// 	  this.add("-start", source, "move: Divination");
	// 	  return this.NOT_FAIL;
	// 	},
	// 	secondary: null,
	// 	target: "normal",
	// 	type: "Dark",
	// 	contestType: "Clever"
	//   },
	//   fluxemission: {
	// 	num: 20020,
	// 	accuracy: true,
	// 	basePower: 0,
	// 	category: "Status",
	// 	name: "Flux Emission",
	// 	pp: 10,
	// 	priority: 0,
	// 	flags: { bypasssub: 1, allyanim: 1, raidimmune: 1 },
	// 	onHit(target, source) {
	// 	  if (source.ability === "chronostasis") {
	// 		source.setAbility("speedboost");
	// 		this.boost({ spa: 1 }, source, source, this.dex.getActiveMove("Flux Emission"));
	// 		this.add("-ability", source, source.getAbility().name, "[from] move: Flux Emission", "[of] " + target);
	// 		return;
	// 	  } else {
	// 		return false;
	// 	  }
	// 	},
	// 	secondary: null,
	// 	target: "normal",
	// 	type: "Ice",
	// 	zMove: { boost: { spe: 1 } },
	// 	contestType: "Cute"
	//   },
};