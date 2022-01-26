
export default class Thing {
	/** @var {string} #type */
	_type = 'thing'; // Override this in subclasses.

	_canBeHeld = false; // Override this in subclasses.

	constructor() {
		this.init();
	}

	init() {
		this.#type = this.#type || 'thing';
	}

	get type() {
		return this._type;
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

	
	/**
	 * @returns {ActionResult|null}
	 */
	doSomething() {
		return null;
	}
}
