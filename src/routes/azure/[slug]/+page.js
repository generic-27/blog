import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	switch (params.slug) {
		case 'describing_cloud_concepts':
			return { path: 'describing_cloud_concepts' };
		default:
			throw error(404, 'Not found');
	}
}
