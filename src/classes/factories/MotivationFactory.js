import Motivation from '@/classes/Motivation';

export default class MotivationFactory {

	/**
	 *
	 * @param {string} motivationName
	 * @returns {Motivation}
	 */
	getMotivation(motivationName) {
		return this._makeMotivation(motivationName);
	}

	/**
	 * Override me!
	 *
	 * @param {string} motivationName
	 * @return {Motivation}
	 * @private
	 */
	_makeMotivation(motivationName) {
		return new Motivation();
	}
}
