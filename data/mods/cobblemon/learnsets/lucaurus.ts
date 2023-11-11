import { CreatePokemonLearnset } from "../../../../tools/utils/create";
import { ModdedDex } from "../../../../sim/dex";

export default function(dex: ModdedDex) {	const pokemon = new CreatePokemonLearnset("lucaurus", dex);
		/////////////////////////////////////////
		// Level Up Moves
		////////////////////////////////////////
		pokemon
			.addLevelMove("Mean Look", 1)
			.addLevelMove("Rock Smash", 1)
			.addLevelMove("Vacuum Wave", 1)
			.addLevelMove("Screech", 1)
			.addLevelMove("Helping Hand", 1)
			.addLevelMove("Copycat", 1)
			.addLevelMove("Final Gambit", 1)
			.addLevelMove("Reversal", 1)
			.addLevelMove("Quick Attack", 1)
			.addLevelMove("Detect", 1)
			.addLevelMove("Feint", 1)
			.addLevelMove("Jaw Lock", 1) // Evo Move
			.addLevelMove("Bite", 12)
			.addLevelMove("Hone Claws", 16)
			.addLevelMove("Smart Strike", 20)
			.addLevelMove("Scary Face", 24)
			.addLevelMove("Metal Sound", 28)
			.addLevelMove("Roar", 32)
			.addLevelMove("Fire Fang", 36)
			.addLevelMove("Swords Dance", 40)
			.addLevelMove("Spite", 44)
			.addLevelMove("U Turn", 52)
			.addLevelMove("Extreme Speed")
			.addLevelMove("Adamantine Molars", 58)
			.addLevelMove("Crunch", 60);
		/////////////////////////////////////////
		// TM/HM Moves
		////////////////////////////////////////
		pokemon
			.addTMMoves(
				'Roar',
				'Toxic',
				'Hidden Power',
				'Sunny Day',
				'Hyper Beam',
				'Protect',
				'Rain Dance',
				'Iron Tail',
				'Return',
				'Dig',
				'Shadow Ball',
				'Double Team',
				'Aerial Ace',
				'Torment',
				'Facade',
				'Secret Power',
				'Rest',
				'Thief',
				'False Swipe',
				'Fling',
				'Endure',
				'Embargo',
				'Shadow Claw',
				'Payback',
				'Giga Impact',
				'Rock Polish',
				'Stone Edge',
				'Gyro Ball',
				'Swords Dance',
				'Dark Pulse',
				'Rock Slide',
				'X Scissor',
				'Sleep Talk',
				'Swagger',
				'U Turn',
				'Substitute',
				'Hone Claws',
				'Scary Face',
				'Assurance',
				'Thunder Fang',
				'Fire Fang',
				'Ice Fang',
				'Acrobatics',
				'Retaliate',
				'Crunch',
				'Foul Play',
				'Strength',
				'Rock Smash',
				'Rock Climb',
			);
		/////////////////////////////////////////
		// Tutor Moves
		////////////////////////////////////////
		pokemon
				.addTutorMoves(
					'Knock Off',
					'Sucker Punch',
					'Spite',
					'Iron Head',
					'Iron Tail',
					'Foul Play',
					'Dark Pulse',
				);
		/////////////////////////////////////////
		// Egg Moves
		////////////////////////////////////////
		pokemon
					.addEggMoves(
						'Bite',
						'Circle Throw',
						'Cross Chop',
						'Detect',
						'HighJumpKick',
						'Howl',
					);
}