import { error } from '@sveltejs/kit';
import {
	CLOSURE,
	OBJECTS,
	SCOPES_AND_HOISTING,
	UNDERSTANDING_THIS,
	UP_AND_GOING
} from '../../../util/route-constants';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	switch (params.slug) {
		case UP_AND_GOING:
			return { path: UP_AND_GOING };
		case SCOPES_AND_HOISTING:
			return { path: SCOPES_AND_HOISTING };
		case CLOSURE:
			return { path: CLOSURE };
		case UNDERSTANDING_THIS:
			return { path: UNDERSTANDING_THIS };
		case OBJECTS:
			return { path: OBJECTS };
		default:
			throw error(404, 'Not found');
	}
}
