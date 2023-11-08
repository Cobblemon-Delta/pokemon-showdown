import {ModdedDex} from "./../../../../sim/dex";
import {CreatePokemonLearnset} from "./../../../../tools/utils/create";
export function YanmelliaLearnset(dex: ModdedDex) {
	const pokemon = new CreatePokemonLearnset("yanmellia", dex);
		/////////////////////////////////////////
		// Level Up Moves
		////////////////////////////////////////
		pokemon
		.addLevelMove('Giga Drain')
		.addLevelMove('Air Slash')
		.addLevelMove('Tailwind')
		.addLevelMove('Bug Bite')
		.addLevelMove('Mega Drain')
		.addLevelMove('Wing Attack')
		.addLevelMove('Tackle')
		.addLevelMove('Gust')
		.addLevelMove('Quick Attack', 6)
		.addLevelMove('Double Team', 11)
		.addLevelMove('Leech Seed', 14)
		.addLevelMove('Detect', 17)
		.addLevelMove('Mimic', 22)
		.addLevelMove('Uproar', 27)
		.addLevelMove('Grass Whistle', 30)
		.addLevelMove('Ancient Power', 33)
		.addLevelMove('Mega Drain', 38)
		.addLevelMove('Wing Attack', 43)
		.addLevelMove('Screech', 46)
		.addLevelMove('Air Slash', 49)
		.addLevelMove('Giga Drain', 54)
		.addLevelMove('Boomburst', 57);
		/////////////////////////////////////////
		// TM/HM Moves
		////////////////////////////////////////
		pokemon
			.addTMMoves(
				'Toxic',
				'Hidden Power',
				'Sunny Day',
				'Hyper Beam',
				'Protect',
				'Rain Dance',
				'Giga Drain',
				'Endure',
				'Frustration',
				'Solar Beam',
				'Dragon Breath',
				'Return',
				'Shadow Ball',
				'Double Team',
				'Swagger',
				'Sleep Talk',
				'Sludge Bomb',
				'Swift',
				'Defense Curl',
				'Detect',
				'Rest',
				'Thief',
				'Steel Wing',
				'Fury Cutter',
				'Reflect',
				'Light Screen',
				'Facade',
				'Aerial Ace',
				'Torment',
				'Secret Power',
				'Roost',
				'Energy Ball',
				'Fling',
				'Dragon Pulse',
				'Silver Wind',
				'Natural Gift',
				'Poison Jab',
				'Grass Knot',
				'U Turn',
				'Substitute',
				'Sky Drop',
				'Round',
				'Echoed Voice',
				'Acrobatics',
				'X Scissor',
				'Nature Power',
				'Leech Life',
				'Fly',
				'Magical Leaf',
				'Scary Face',
				'Cross Poison',
				'Snarl',
				'Grassy Terrain',
				'Air Slash',
				'Brutal Swing',
				'Hyper Voice',
				'Leaf Blade',
				'Dragon Dance',
				'Bug Buzz',
				'Hurricane',
				'Take Down',
				'Trailblaze',
				'Air Cutter',
				'Seed Bomb',
				'Tera Blast',
			);
		/////////////////////////////////////////
		// Tutor Moves
		////////////////////////////////////////
		pokemon
				.addTutorMoves(
					'Double Edge',
					'Substitute',
					'Swagger',
					'Sleep Talk',
					'Endure',
					'Air Cutter',
					'Fury Cutter',
					'Ominous Wind',
					'Sucker Punch',
					'Swift',
					'Synthesis',
					'Uproar',
					'Ancient Power',
					'Twister',
					'Trick',
					'Dragon Pulse',
					'Roost',
					'Sky Attack',
					'Giga Drain',
					'Tailwind',
					'Worry Seed',
					'Grassy Glide',
					'Dual Wingbeat',
				);
		/////////////////////////////////////////
		// Egg Moves
		////////////////////////////////////////
		pokemon
		.addEggMoves(
			'Rage Powder',
			'Worry Speed',
			'Grassy Terrain',
			'Whirlwind',
			'Signal Beam',
			'Pursuit',
			'Sleep Powder',
			'Spiky Shield',
		);
}