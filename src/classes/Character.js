import Thing from "@/classes/Thing";
import MotivationFactory from "./factories/MotivationFactory";

import Motivation from '@/classes/Motivation';
import Action from '@/classes/Action';
import Need from '@/classes/Need';
import Thing from '@/classes/Thing';

export default class Character extends Thing {

	constructor() {
		this.needs = [];

		this.currentMotivation = null;
		super();
	}

	get currentAction() {
		if (! this.currentMotivation) {
			return null;
		}

		return this.currentMotivation.getAction();
	}


	addNeed(need) {
		this.needs.push(need);
	}


	doSomething(dt = 1) {
		this.updateNeeds(1);
		if (this.currentMotivation) {
			const result = this.currentMotivation.doSomething(dt);
			return result;
		} else {
			this.currentMotivation = this.determineMotivation();
			const result = this.currentMotivation.doSomething(dt);
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


