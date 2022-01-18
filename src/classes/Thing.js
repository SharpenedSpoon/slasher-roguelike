
class Thing {
	/** @var {string} #type */
	#type;

	constructor() {
	}

	init() {
		this.#type = this.#type || 'thing';
	}

	/**
	 * @param {Thing} target
	 * @param {Action} action
	 */
	interactWith(target, action) {}


	/**
	 *
	 * @param {Thing} originator
	 * @param {Action} action
	 */
	beInteractedWith(originator, action) {}
}
