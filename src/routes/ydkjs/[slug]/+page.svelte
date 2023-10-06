<script>
	import UpAndGoing from '../../../components/blog/you_dont_know_js/part_1/up-and-going.svelte';
	import Closure from '../../../components/blog/you_dont_know_js/part_2/closure.svelte';
	import ScopesAndHoisting from '../../../components/blog/you_dont_know_js/part_2/scopes-and-hoisting.svelte';

	export let data;
</script>

<div class="blog-container">
	{#if data.path === 'up_and_going'}
		<UpAndGoing />
	{:else if data.path === 'scopes_and_hoisting'}
		<ScopesAndHoisting />
	{:else if data.path === 'closure'}
		<Closure />
	{/if}
</div>
