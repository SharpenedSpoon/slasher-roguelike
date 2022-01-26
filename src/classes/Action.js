import ActionResult from '@/classes/ActionResult';

export default class Action {

	constructor({
		originator,
		target,
		motivation
	}) {
		this.originator = originator;
		this.target     = target;
		this.motivation = motivation;
	}

	execute() {
		// TODO: Override this, do something!
		console.log('executed action!    (todo: override this function):', {
			action: this,
			originator: this.originator,
			target: this.target,
			motivation: this.motivation
		});

		return new ActionResult();
	}
}
