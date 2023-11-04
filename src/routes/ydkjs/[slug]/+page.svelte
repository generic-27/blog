<script>
	import UpAndGoing from '../../../components/blog/you_dont_know_js/part_1/up-and-going.svelte';
	import Closure from '../../../components/blog/you_dont_know_js/part_2/closure.svelte';
	import ScopesAndHoisting from '../../../components/blog/you_dont_know_js/part_2/scopes-and-hoisting.svelte';
	import Objects from '../../../components/blog/you_dont_know_js/part_3/objects.svelte';
	import UnderstandingThis from '../../../components/blog/you_dont_know_js/part_3/understanding_this.svelte';
	import {
		CLOSURE,
		OBJECTS,
		SCOPES_AND_HOISTING,
		UNDERSTANDING_THIS,
		UP_AND_GOING
	} from '../../../util/route-constants';

	export let data;
</script>

<div class="blog-container">
	{#if data.path === UP_AND_GOING}
		<UpAndGoing />
	{:else if data.path === SCOPES_AND_HOISTING}
		<ScopesAndHoisting />
	{:else if data.path === CLOSURE}
		<Closure />
	{:else if data.path === UNDERSTANDING_THIS}
		<UnderstandingThis />
	{:else if data.path === OBJECTS}
		<Objects />
	{/if}
</div>
