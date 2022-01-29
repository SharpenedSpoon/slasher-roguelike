import Thing from "@/classes/Thing";

import Motivation from '@/classes/Motivation';
import Action from '@/classes/Action';
import Need from '@/classes/Need';
import { ref } from "vue";

export default class Character extends Thing {

	name = 'Unnamed';
	currentMotivation = null;

	constructor({name = 'Unnamed'} = {name: 'Unnamed'}) {
		super();

		this.name = name;
	}

	get currentAction() {
		if (! this.currentMotivation) {
			return null;
		}

		return this.currentMotivation.getAction();
	}


	addNeed(need) {
		this.needs = this.needs || ref([]);
		this.needs.value.push(need);
	}


	/**
	 * This is the main loop for each character. Perhaps it should be called `loop()`. 
	 * 
	 * 
	 * @param {int} dt 
	 * @returns 
	 */
	loop(dt = 1) {
		this.updateNeeds(1);
		const nextAction = this.figureOutNextAction(dt);
	}


	/**
	 * TODO
	 * 
	 * Figures out the next action. Returns exactly one action to be performed.
	 * 
	 * @param {number} dt
	 */
	figureOutNextAction(dt) {
		// TODO
		return new Action();
		if (this.currentMotivation) {
			const result = this.currentMotivation.figureOutNextAction(dt); // todo 2022-01-30: refactor prbly?
			return result;
		} else {
			this.currentMotivation = this.determineMotivation();
			const result = this.currentMotivation.figureOutNextAction(dt); // todo 2022-01-30: refactor prbly?
			return result;
		}
	}


	updateNeeds(dt) {
		this.needs.forEach((need) => {
			/** @var {Need} need */
			need.update(dt);
		});
	}


	/**
	 * @returns {Motivation}
	 */
	determineMotivation() {
		// TODO examine needs, consider environment, consider Things in vicinity, and figure out what to do.
		return new Motivation();
	}
}


