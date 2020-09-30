
class FancyError extends Error {
	constructor(status) {
		super(`error with status ${status}`);
	}
}

module.exports = {
	FancyError
}

