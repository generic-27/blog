import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	console.log(params.slug);
	switch (params.slug) {
		case 'up_and_going':
			return { path: 'up_and_going' };
		case 'scopes_and_closure':
			return { path: 'scopes_and_closure' };
		default:
			throw error(404, 'Not found');
	}
}
