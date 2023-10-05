<script>
	import DescribingCloudConcepts from '../../../components/blog/azure/azure_fundamentals/describing_cloud_concepts/describing-cloud-concepts.svelte';

	export let data;
</script>

<div class="blog-container">
	{#if data.path === 'describing_cloud_concepts'}
		<DescribingCloudConcepts />
	{/if}
</div>
