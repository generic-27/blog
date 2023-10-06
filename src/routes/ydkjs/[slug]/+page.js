import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	switch (params.slug) {
		case 'up_and_going':
			return { path: 'up_and_going' };
		case 'scopes_and_hoisting':
			return { path: 'scopes_and_hoisting' };
		case 'closure':
			return { path: 'closure' };
		default:
			throw error(404, 'Not found');
	}
}
