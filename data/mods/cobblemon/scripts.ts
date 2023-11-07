import {CreatePokemonLearnset} from "./../../../tools/utils/create";
export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: "gen9",
	init() {
		//#region Learnsets

		//#region Spectreon
		const spectreon = new CreatePokemonLearnset("spectreon", this)
		/////////////////////////////////////////
		// Level Up Moves
		////////////////////////////////////////
		spectreon.addLevelMove("covet", 1);
		spectreon.addLevelMove("swift", 1);
		spectreon.addLevelMove("bite", 1);
		spectreon.addLevelMove("copycat", 1);
		spectreon.addLevelMove("batonpass", 1);
		spectreon.addLevelMove("takedown", 1),
		spectreon.addLevelMove("charm", 1);
		spectreon.addLevelMove("doubleedge", 1);
		spectreon.addLevelMove("tackle", 1);
		spectreon.addLevelMove("growl", 1);
		spectreon.addLevelMove("tailwhip", 1);
		spectreon.addLevelMove("astonish", 1);
		spectreon.addLevelMove("sandattack", 5);
		spectreon.addLevelMove("quickattack", 10);
		spectreon.addLevelMove("babydolleyes", 15);
		spectreon.addLevelMove("shadowsneak", 20);
		spectreon.addLevelMove("hex", 25);
		spectreon.addLevelMove("willowisp", 30);
		spectreon.addLevelMove("confusion", 35);
		spectreon.addLevelMove("shadowball", 40);
		spectreon.addLevelMove("mysticalfire", 45);
		spectreon.addLevelMove("nastyplot", 50);
		spectreon.addLevelMove("destinybond", 55);
		spectreon.addLevelMove("whiskaway", 60);
		/////////////////////////////////////////
		// TM/HM Moves
		////////////////////////////////////////
		spectreon
			.addTMMove("toxic")
			.addTMMove("bodyslam")
			.addTMMove("doubleedge")
			.addTMMove("hyperbeam")
			.addTMMove("psychic")
			.addTMMove("teleport")
			.addTMMove("doubleteam")
			.addTMMove("reflect")
			.addTMMove("bide")
			.addTMMove("dreameater")
			.addTMMove("rest")
			.addTMMove("substitute")
			.addTMMove("curse")
			.addTMMove("hiddenpower")
			.addTMMove("sunnyday")
			.addTMMove("protect")
			.addTMMove("endure")
			.addTMMove("frustration")
			.addTMMove("shadowball")
			.addTMMove("swagger")
			.addTMMove("sleeptalk")
			.addTMMove("attract")
			.addTMMove("nightmare")
			.addTMMove("calmmind")
			.addTMMove("taunt")
			.addTMMove("lightscreen")
			.addTMMove("return")
			.addTMMove("secretpower")
			.addTMMove("thief")
			.addTMMove("torment")
			.addTMMove("willowisp")
			.addTMMove("shadowclaw")
			.addTMMove("payback")
			.addTMMove("flash")
			.addTMMove("psychup")
			.addTMMove("captivate")
			.addTMMove("darkpulse")
			// .addTMMove("sleeptalk")
			.addTMMove("Psyshock")
			.addTMMove("snarl")
			.addTMMove("faketears")
			.addTMMove("nastyplot")
			.addTMMove("nightshade")
			.addTMMove("storedpower")
			.addTMMove("foulplay")
			.addTMMove("dazzlinggleam")
			.addTMMove("aurasphere")
			.addTMMove("terablast")
			.addTMMove("charm")
			.addTMMove("trick");
		/////////////////////////////////////////
		// Tutor Moves
		////////////////////////////////////////
		spectreon
			.addTutorMove("mimic")
			.addTutorMove("ominouswind")
			.addTutorMove("suckerpunch")
			.addTutorMove("lastresort")
			.addTutorMove("snore")
			.addTutorMove("spite")
			.addTutorMove("swift")
			.addTutorMove("irondefense")
			.addTutorMove("knockoff")
			.addTutorMove("painsplit")
			.addTutorMove("foulplay")
			.addTutorMove("darkpulse")
			.addTutorMove("zenheadbutt")
			.addTutorMove("poltergeist");
		/////////////////////////////////////////
		// Egg Moves
		////////////////////////////////////////
		spectreon
			.addEggMove("curse")
			.addEggMove("detect")
			.addEggMove("doublekick")
			.addEggMove("flail")
			.addEggMove("mudslap")
			.addEggMove("tickle")
			.addEggMove("wish")
			.addEggMove("yawn");
		//#endregion Spectreon
		
		//#endregion Learnsets
	},
};