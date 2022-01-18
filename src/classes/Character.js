import Thing from "@/classes/Thing";
import MotivationFactory from "./factories/MotivationFactory";

export default class Character extends Thing {
	determineMotivation() {
		// TODO examine needs
		// TODO determine what type (i.e. string(?) or enum) of motivation is needed
		let motivationName = ''; // todo

		// Create Motivation
		const motivationFactory = new MotivationFactory(motivationName);
		return motivationFactory.getMotivation(motivationName);
	}
}


