import { CreatePokemonLearnset } from "../../../../tools/utils/create";
import { ModdedDex } from "../../../../sim/dex";

export default function(dex: ModdedDex) {	const pokemon = new CreatePokemonLearnset("sableyedelta", dex);
		/////////////////////////////////////////
		// Level Up Moves
		////////////////////////////////////////
		pokemon
			.addLevelMove('Teleport')
			.addLevelMove('Scratch')
			.addLevelMove('Ancient Power', 3)
			.addLevelMove('Shadow Sneak', 9)
			.addLevelMove('Fake Out', 12)
			.addLevelMove('Disable', 15)
			.addLevelMove('Detect', 18)
			.addLevelMove('Night Shade', 21)
			.addLevelMove('Dark Void', 24)
			.addLevelMove('Knock Off', 27)
			.addLevelMove('Nightmare', 30)
			.addLevelMove('Shadow Claw', 33)
			.addLevelMove('Parting Shot', 36)
			.addLevelMove('Power Gem', 39)
			.addLevelMove('Strength Sap', 42)
			.addLevelMove('Phantom Force', 45)
			.addLevelMove('Foul Play', 48);
		/////////////////////////////////////////
		// TM/HM Moves
		////////////////////////////////////////
		pokemon
			.addTMMoves(
				'Focus Punch',
				'Toxic',
				'Hidden Power',
				'Sunny Day',
				'Taunt',
				'Protect',
				'Rain Dance',
				'Frustration',
				'Return',
				'Dig',
				'Psychic',
				'Shadow Ball',
				'Double Team',
				'Torment',
				'Facade',
				'Secret Power',
				'Rest',
				'Thief',
				'Snatch',
				'Cut',
				'Flash',
				'Rock Smash',
				'Fling',
				'WilloWisp',
				'Embargo',
				'Shadow Claw',
				'Payback',
				'Giga Impact',
			);
		/////////////////////////////////////////
		// Tutor Moves
		////////////////////////////////////////
		pokemon
				.addTutorMoves(
					'Body Slam',
					'Counter',
					'Double Edge',
					'Dream Eater',
					'Dynamic Punch',
					'Endure',
					'Fire Punch',
					'Fury Cutter',
					'Ice Punch',
					'Mega Kick',
					'Mega Punch',
					'Mimic',
					'Mud Slap',
					'Nightmare',
					'Seismic Toss',
					'Sleep Talk',
					'Snore',
					'Substitute',
					'Swagger',
					'Thunder Punch',
					'Gravity',
					'Headbutt',
					'Icy Wind',
					'Knock Off',
					'Low Kick',
					'Magic Coat',
					'Ominous Wind',
					'Pain Split',
					'Signal Beam',
					'Spite',
					'Trick',
					'Zen Headbutt',
					'Dark Pulse',
					'Foul Play',
					'Wonder Room',
					'Poltergeist',
					'Meteor Beam',
					'Rock Slide',
					'Ancient Power',
					'Block',
					'Stealth Rock'
				);
		/////////////////////////////////////////
		// Egg Moves
		////////////////////////////////////////
		pokemon
					.addEggMoves(
						'Hypnosis',
						'Screech',
						'Block',
						'Recover',
						'Nasty Plot',
						'Flatter',
						'Feint',
						'Metal Burst',
						'Trick',
						'Sucker Punch',
						'Torment',
					);
}