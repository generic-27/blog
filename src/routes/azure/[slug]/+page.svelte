<script>
	import DescribingCloudComputing from '../../../components/blog/azure/azure_fundamentals/describing_cloud_concepts/describing-cloud-computing.svelte';
	import { DESCRIBING_CLOUD_CONCEPTS } from '../../../util/route-constants';

	export let data;
</script>

<div class="blog-container">
	{#if data.path === DESCRIBING_CLOUD_CONCEPTS}
		<DescribingCloudComputing />
	{/if}
</div>
