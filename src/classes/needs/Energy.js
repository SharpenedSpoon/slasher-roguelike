
import Need from '@/classes/Need';
import { computed } from 'vue';


export default class Energy extends Need {
	constructor() {
		super({
			name: 'energy',
			value: 10,
			minimum: 0,
			maximum: 10,
			delta: 1,
			deltaSign: -1,
		});

		this._isDead = computed(() => this.value >= this.minimum);
	}

	update(dt) {
		this.increment(dt);
	}

	onExceedMinimum() {
		console.log('onExceedMinimum. this._isDead:', this._isDead);
	}
}
