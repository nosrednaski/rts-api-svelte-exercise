<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';
	export let data
	export let form

</script>


<svelte:head>
	<title> Search | RTS API Exercise </title>
	<meta name="search" content="Search Hacker News" />

</svelte:head>

<div>
	<h2>Search</h2>
	
	<form 
		action="?/search"
		use:enhance={({form, data, cancel}) => {
			return ({  result }) => {
				if (result.type === 'success') {
					console.log('result in form:::', result.data)
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
	

	{#if form?.success}
		<p>{data}</p>
		<p>success</p>

		<!-- {#await form}
			<p>Sending...</p>
		{:then results}
			{#each results as result}
				<p>
					<a href="{result.url}">{result.title}</a> 
				</p>
			{/each}

		{/await} -->
	{/if}



	
</div>


