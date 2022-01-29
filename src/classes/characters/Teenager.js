
import Character from '@/classes/Character';
import Bladder from '@/classes/needs/Bladder';
import Energy from '@/classes/needs/Energy';
import Fun from '@/classes/needs/Fun';
import Hunger from '@/classes/needs/Hunger';
import Hygenie from '@/classes/needs/Hygenie';
import Social from '@/classes/needs/Social';

export default class Teenager extends Character {

	name = 'UnnamedTeen';

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