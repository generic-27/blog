<script>
	import DescribingCloudComputing from '../../../components/blog/azure/azure_fundamentals/describing_cloud_concepts/describing-cloud-computing.svelte';

	export let data;
</script>

<div class="blog-container">
	{#if data.path === 'describing_cloud_concepts'}
		<DescribingCloudComputing />
	{/if}
</div>
