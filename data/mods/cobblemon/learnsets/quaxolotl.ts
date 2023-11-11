import { CreatePokemonLearnset } from "../../../../tools/utils/create";
import { ModdedDex } from "../../../../sim/dex";

export default function(dex: ModdedDex) {	const pokemon = new CreatePokemonLearnset("quaxolotl", dex);
		/////////////////////////////////////////
		// Level Up Moves
		////////////////////////////////////////
		pokemon
			.addLevelMove("Water Gun", 1)
			.addLevelMove("Tail Whip", 1)
			.addLevelMove("Rain Dance", 4)
			.addLevelMove("Disarming Voice", 8)
			.addLevelMove("Mist", 12)
			.addLevelMove("Haze", 12)
			.addLevelMove("Slam", 16)
			.addLevelMove("Yawn", 23)
			.addLevelMove("Aqua Tail", 28)
			.addLevelMove("Muddy Water", 34)
			.addLevelMove("Charm", 40)
			.addLevelMove("Play Rough", 46)
			.addLevelMove("Moonblast", 52);
		/////////////////////////////////////////
		// TM/HM Moves
		////////////////////////////////////////
		pokemon
			.addTMMove("Headbutt")
			.addTMMove("Toxic")
			.addTMMove("Rock Smash")
			.addTMMove("Psych Up")
			.addTMMove("Hyper Beam")
			.addTMMove("Hidden Power")
			.addTMMove("Snore")
			.addTMMove("Protect")
			.addTMMove("Rain Dance")
			.addTMMove("Endure")
			.addTMMove("Frustration")
			.addTMMove("Iron Tail")
			.addTMMove("Return")
			.addTMMove("Psychic")
			.addTMMove("Mud Slap")
			.addTMMove("Double Team")
			.addTMMove("Ice Punch")
			.addTMMove("Swagger")
			.addTMMove("Sleep Talk")
			.addTMMove("Dream Eater")
			.addTMMove("Defense Curl")
			.addTMMove("Rest")
			.addTMMove("Attract")
			.addTMMove("Surf")
			.addTMMove("Flash")
			.addTMMove("Whirlpool")
			.addTMMove("Water Pulse")
			.addTMMove("Calm Mind")
			.addTMMove("Hail")
			.addTMMove("Ice Beam")
			.addTMMove("Blizzard")
			.addTMMove("Light Screen")
			.addTMMove("Reflect")
			.addTMMove("Waterfall")
			.addTMMove("Dive")
			.addTMMove("Energy Ball")
			.addTMMove("Focus Blast")
			.addTMMove("Brine")
			.addTMMove("U Turn")
			.addTMMove("Defog")
			.addTMMove("Psyshock")
			.addTMMove("Substitute")
			.addTMMove("Scald")
			.addTMMove("Giga Impact")
			.addTMMove("Secret Power")
			.addTMMove("Confide")
			.addTMMove("Dazzling Gleam")
			.addTMMove("Thunder Wave")
			.addTMMove("Misty Terrain");
		/////////////////////////////////////////
		// Tutor Moves
		////////////////////////////////////////
		pokemon
			.addTutorMove("Ice Beam")
			.addTutorMove("Defense Curl")
			.addTutorMove("Double Edge")
			.addTutorMove("Endure")
			.addTutorMove("Ice Punch")
			.addTutorMove("Mimic")
			.addTutorMove("Mud Slap")
			.addTutorMove("Seismic Toss")
			.addTutorMove("Sleep Talk")
			.addTutorMove("Snore")
			.addTutorMove("Substitute")
			.addTutorMove("Swagger")
			.addTutorMove("Aqua Tail")
			.addTutorMove("Dive")
			.addTutorMove("Earth Power")
			.addTutorMove("Icy Wind")
			.addTutorMove("After You")
			.addTutorMove("Iron Tail")
			.addTutorMove("Water Pulse")
			.addTutorMove("Flip Turn")
			.addTutorMove("Hypnosis")
			.addTutorMove("Zen Headbutt")
			.addTutorMove("Defog");
		/////////////////////////////////////////
		// Egg Moves
		////////////////////////////////////////
		pokemon
			.addEggMove("Life Dew")
			.addEggMove("Soak")
			.addEggMove("Aqua Jet")
			.addEggMove("Body Slam")
			.addEggMove("Safeguard")
			.addEggMove("Ancient Power")
			.addEggMove("Mud Sport")
			.addEggMove("Split Up")
			.addEggMove("Stockpile")
			.addEggMove("Swallow")
			.addEggMove("Recover")
			.addEggMove("Encore")
			.addEggMove("After You")
			.addEggMove("Eerie Impulse")
			.addEggMove("Haze")
			.addEggMove("Mist");
}