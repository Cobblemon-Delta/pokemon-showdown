import {ModdedDex} from "./../../../../sim/dex";
import {CreatePokemonLearnset} from "./../../../../tools/utils/create";
export function GarchompDeltaLearnset(dex: ModdedDex) {
	const pokemon = new CreatePokemonLearnset("placeholder", dex);
		/////////////////////////////////////////
		// Level Up Moves
		////////////////////////////////////////
		pokemon
		.addLevelMove('Ice Shard')
		.addLevelMove('Tackle')
		.addLevelMove('Powder Snow', 6)
		.addLevelMove('Dragon Breath', 12)
		.addLevelMove('Freeze Dry') // Evo Move
		.addLevelMove('Icy Wind', 18)
		.addLevelMove('Bite', 25)
		.addLevelMove('Slash', 30)
		.addLevelMove('Dragon Claw', 36)
		.addLevelMove('Avalanche', 42)
		.addLevelMove('Snowscape', 48)
		.addLevelMove('Take Down', 54)
		.addLevelMove('Dragon Pulse', 60);
		/////////////////////////////////////////
		// TM/HM Moves
		////////////////////////////////////////
		pokemon
			.addTMMoves(
				'Dragon Claw',
				'Roar',
				'Toxic',
				'Hidden Power',
				'Hyper Beam',
				'Protect',
				'Rain Dance',
				'Frustration',
				'Iron Tail',
				'Return',
				'Double Team',
				'Rock Tomb',
				'Aerial Ace',
				'Facade',
				'Secret Power',
				'Rest',
				'Attract',
				'False Swipe',
				'Fling',
				'Endure',
				'Dragon Pulse',
				'Shadow Claw',
				'Giga Impact',
				'Swords Dance',
				'Captivate',
				'Sleep Talk',
				'Natural Gift',
				'Swagger',
				'Substitute',
				'Cut',
				'Surf',
				'Strength',
				'Whirlpool',
				'Rock Smash',
				'Rock Climb',
				'Hail',
				'Thunderbolt',
				'Thunder',
				'Psychic',
				'Focus Blast',
				'Energy Ball',
				'Avalanche',
				'Ice Beam',
				'Blizzard',
				'Hail',
				'Thunder Wave',
				'Flash Cannon',
				'Shock Wave',
				'Frost Breath',
				'Calm Mind',
				'Psyshock',
				'Outrage',
				'Dragon Claw',
				'Dragon Pulse',
				'Earth Power',
				'Iron Head',
				'Icicle Spear',
				// 'Avalanche',
				'Ice Fang',
				'Thunder Fang',
				'Breaking Swipe',
				'Waterfall',
				'Crunch',
				'Dragon Tail',
				'Tera Blast',
			);

		/////////////////////////////////////////
		// Tutor Moves
		////////////////////////////////////////
		pokemon
		.addTutorMoves(
			'Aqua Tail',
			'Draco Meteor',
			'Earth Power',
			'Fury Cutter',
			'Headbutt',
			'Iron Head',
			'Mud Slap',
			'Outrage',
			'Snore',
			'Swift',
			'Twister',
			'Dragon Pulse',
			'Dual Chop',
			'Iron Tail',
			'Laser Focus',
			'Scale Shot',
			'Icy Wind',
			'Triple Axel',
		);
		/////////////////////////////////////////
		// Egg Moves
		////////////////////////////////////////
		pokemon
		.addEggMoves(
			'Double Edge',
			'Dragon Breath',
			'Iron Head',
			'Metal Claw',
			'Outrage',
			'Rock Climb',
			'Scary Face',
			'Thrash',
			'Twister',
			'Body Slam',
			'Iron Tail',
		);
}