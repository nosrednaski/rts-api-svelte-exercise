<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';
	export let data
	export let form
	export let results

</script>


<svelte:head>
	<title> Search | RTS API Exercise </title>
	<meta name="search" content="Search Hacker News" />

</svelte:head>

<div>
	<h2>Search</h2>
	
	<form 
		action="?/search"
		method="POST"
		use:enhance={({form, data, cancel}) => {
			return ({  result }) => {
				if (result.type === 'success') {
					console.log('result in form:::', result.data)
					results = result.data
					form.reset();
				}
			};
		}}
	>
		<input 
			aria-label="search hacker news" 
			placeholder="Find a topic on hacker news"
			name="query"
		>
	</form>
	

	{#if results?.success}
			{#each results.hits as result}
				<p>
					<a href="{result.url}">{result.title}</a> 
				</p>
			{/each}
	{/if}



	
</div>


