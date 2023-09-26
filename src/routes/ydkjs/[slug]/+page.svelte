<script>
	import UpAndGoing from '../../../components/blog/you_dont_know_js/part_1/up-and-going.svelte';
	import ScopesAndClosure from '../../../components/blog/you_dont_know_js/part_2/scopes-and-closure.svelte';

	export let data;
</script>

<div class="blog-container">
	{#if data.path === 'up_and_going'}
		<UpAndGoing />
	{:else if data.path === 'scopes_and_closure'}
		<ScopesAndClosure />
	{/if}
</div>
