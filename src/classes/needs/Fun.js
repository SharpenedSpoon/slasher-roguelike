
import Need from '@/classes/Need';


export default class Fun extends Need {
	constructor() {
		super({
			name: 'fun',
			value: 10,
			minimum: 0,
			maximum: 10,
			delta: 1,
			deltaSign: -1,
		});
	}

	update(dt) {
		this.increment(dt);
	}
}
