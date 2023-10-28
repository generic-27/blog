import {
	CLOSURE,
	SCOPES_AND_HOISTING,
	UNDERSTANDING_THIS,
	UP_AND_GOING
} from '../../../util/route-constants';

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return [
		{ slug: UP_AND_GOING },
		{ slug: SCOPES_AND_HOISTING },
		{ slug: CLOSURE },
		{ slug: UNDERSTANDING_THIS }
	];
}

export const prerender = true;
