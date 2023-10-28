import { error } from '@sveltejs/kit';
import { DESCRIBING_CLOUD_CONCEPTS } from '../../../util/route-constants';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	switch (params.slug) {
		case DESCRIBING_CLOUD_CONCEPTS:
			return { path: DESCRIBING_CLOUD_CONCEPTS };
		default:
			throw error(404, 'Not found');
	}
}
