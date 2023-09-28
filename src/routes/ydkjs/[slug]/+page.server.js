import { blogData } from '../../../util/blog-data';

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return [{ slug: 'up_and_going' }, { slug: 'scopes_and_closure' }];
}

export const prerender = true;
