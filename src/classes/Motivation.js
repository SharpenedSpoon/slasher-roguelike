
import { ref } from 'vue';

export default class Motivation {
	//_actionsQueue = '';

	constructor() {
		this._actionsQueue = ref([]);
	}


	get isActive() {
		return this._actionsQueue.value.length > 0;
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
		return this._pushAction(action);
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
				return this._actionsQueue.value[0];
			} else {
				return this._shiftAction();
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
	_shiftAction() {
		if (this._actionsQueue.value.length > 0) {
			return this._actionsQueue.value.shift();
		}

		return null;
	}


	/**
	 * @returns {Action|null}
	 * @private
	 */
	_popAction() {
		if (this._actionsQueue.value.length > 0) {
			return this._actionsQueue.value.pop();
		}

		return null;
	}


	/**
	 * @param {Action} action
	 * @returns {int}
	 * @private
	 */
	_unshiftAction() {
		if (this._actionsQueue.value.length > 0) {
			return this._actionsQueue.value.unshift();
		}

		return null;
	}


	/**
	 * @param {Action} action
	 * @returns {int}
	 * @private
	 */
	_pushAction(action) {
		return this._actionsQueue.value.push(action);
	}
}
