import {ModdedDex} from "./../../../../sim/dex";
import {CreatePokemonLearnset} from "./../../../../tools/utils/create";
export function GibleDeltaLearnset(dex: ModdedDex) {
	const pokemon = new CreatePokemonLearnset("gibledelta", dex);
		/////////////////////////////////////////
		// Level Up Moves
		////////////////////////////////////////
		pokemon
			.addLevelMove('Ice Shard')
			.addLevelMove('Tackle')
			.addLevelMove('Powder Snow', 6)
			.addLevelMove('Dragon Breath', 12)
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
				'Protect',
				'Rain Dance',
				'Frustration',
				'Return',
				'Double Team',
				'Rock Tomb',
				'Aerial Ace',
				'Facade',
				'Secret Power',
				'Rest',
				'Attract',
				'Endure',
				'Dragon Pulse',
				'Shadow Claw',
				'Captivate',
				'Sleep Talk',
				'Natural Gift',
				'Swagger',
				'Substitute',
				'Cut',
				'Strength',
				'Rock Smash',
				'Rock Climb',
				'Ice Beam',
				'Blizzard',
				'Hail',
				'Shock Wave',
				'Thunder Wave',
				'Psyshock',
				'Calm Mind',
				'Frost Breath',
				'Outrage',
				'Dragon Claw',
				'Dragon Pulse',
				'Earth Power',
				'Iron Head',
				'Icicle Spear',
				'Avalanche',
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
						'Body Slam',
						'Double Edge',
						'Dragon Breath',
						'Iron Head',
						'Metal Claw',
						'Outrage',
						'Scary Face',
						'Thrash',
						'Twister',
						'Iron Tail',
						'Rock Climb',
					);
}