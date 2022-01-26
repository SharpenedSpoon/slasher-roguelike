
import Character from '@/classes/Character';

export default class Teenager extends Character {
	init() {
		super.init();
		this.addNeed(new Bladder());
		this.addNeed(new Energy());
		this.addNeed(new Fun());
		this.addNeed(new Hunger());
		this.addNeed(new Hygenie());
		this.addNeed(new Social());
	}
}