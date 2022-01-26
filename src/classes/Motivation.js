
import { ref } from 'vue';

export default class Motivation {
	#actionsQueue;

	constructor() {
		this.#actionsQueue = ref([]);
	}


	get isActive() {
		return this.#actionsQueue.value.length > 0;
	}

	doSomething(dt = 1) {
		if (this.isActive) {
			const nextAction = this._getAction(false);
			const result = nextAction.execute();
			return result;
		} else {
			return null;
		}
	}


	/**
	 * @param {Action} action
	 * @returns {int}
	 * @private
	 */
	_addAction(action) {
		return this.#pushAction(action);
	}


	/**
	 * Gets the next action to be performed.
	 * 
	 * @param {boolean} viewOnly Does not alter the queue
	 * @returns {Action|null}
	 */
	_getAction(viewOnly = true) {
		if (this.isActive) {
			if (viewOnly) {
				return this.#actionsQueue.value[0];
			} else {
				return this.#shiftAction();
			}
		} else {
			return null;
		}
	}


	/**
	 * Nondestructively get the next action
	 * 
	 * @returns {Action|null}
	 */
	getAction() {
		return this._getAction(true);
	}


	/**
	 * @returns {Action|null}
	 * @private
	 */
	#shiftAction() {
		if (this.#actionsQueue.value.length > 0) {
			return this.#actionsQueue.value.shift();
		}

		return null;
	}


	/**
	 * @returns {Action|null}
	 * @private
	 */
	#popAction() {
		if (this.#actionsQueue.value.length > 0) {
			return this.#actionsQueue.value.pop();
		}

		return null;
	}


	/**
	 * @param {Action} action
	 * @returns {int}
	 * @private
	 */
	#unshiftAction() {
		if (this.#actionsQueue.value.length > 0) {
			return this.#actionsQueue.value.unshift();
		}

		return null;
	}


	/**
	 * @param {Action} action
	 * @returns {int}
	 * @private
	 */
	#pushAction(action) {
		return this.#actionsQueue.value.push(action);
	}
}
