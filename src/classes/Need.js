/**
 * Sims 4:
 *     Bladder, Fun, Hunger, Social, Energy, Hygenie
 * 
 * Heriarchy of Needs
 *     Physiological and Safety (food water warmth rest security safety)
 *     Physcological Needs (belongingness and love) social intimate and friends
 * prestige - feeling of accomplishment
 * self fulfillment needs - creative / potential
 */
export default class Need {

	constructor(opts) {
		opts = {...{
			// defaults:
			name: 'need',
			value: 0,
			minimum: 0,
			maximum: 10,
			delta: 1, // must be positive
			deltaSign: 1, // 1 or -1
		}, ...opts};

		this.name = opts.name;
		this.value = opts.value;
		this.minimum = opts.minimum;
		this.maximum = opts.maximum;
		this.delta = opts.delta;
		this.deltaSign = opts.deltaSign;
	}

	update(dt) {}

	onExceedMaximum() { }

	onExceedMinimum() { }

	onExceed() {
		if (this.deltaSign >= 0) {
			this.onExceedMaximum();
		} else {
			this.onExceedMinimum();
		}
	}

	increment(amount = 1) {
		this.value += (amount * this.delta * this.deltaSign);
		if (this.value < this.minimum || this.value > this.maximum) {
			this.onExceed();
		}

		// Clamp the value. We don't actually want it outside the range
		this.value = Math.max(this.minimum, Math.min(this.maximum, this.value));
	}
}
