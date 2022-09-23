<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';
	export let data: PageData
	$: results = data.results
</script>


<svelte:head>
	<title> Search | RTS API Exercise </title>
	<meta name="search" content="Search Hacker News" />

</svelte:head>

<div>
	<h2>Search</h2>
	
	<form 
		action="?/search"
		use:enhance={() => {
			return ({ form, result }) => {
				if (result.type === 'success') {
					form.reset();
				}
			};
		}}
	>
		<input 
			aria-label="search hacker news" 
			placeholder="Find a topic on hacker news"
		>
	</form>
	

	{#if results.length === 0}
		{#await results}
			<p>Sending...</p>
		{:then results}
			{#each results as result}
				<p>
					<a href="{result.url}">{result.title}</a> 
				</p>
			{/each}

		{/await}
	{/if}
		


	
</div>


