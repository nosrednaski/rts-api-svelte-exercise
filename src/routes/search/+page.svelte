<script lang="ts">
	// import type { PageData, ActionData } from './$types';
	// export let data: PageData
	// export let form
	// $: results = data.results
	
	import historyStore from '../../store';
	import { api } from './api';
	let submit
	async function handleSubmit(e) {
		let query = e.target[0].value
		submit = api(query)
        historyStore.updateHistory(query)
	}
	
</script>


<svelte:head>
	<title> Search | RTS API Exercise </title>
	<meta name="search" content="Search Hacker News" />

</svelte:head>

<div>
	<h2>Search</h2>
	
	<!-- <form 
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
		<button on:click = {submit} type="submit">Submit</button>
	</form> -->
	<form 
		on:submit|preventDefault={handleSubmit} method="post"
	>
		<input type="text" aria-label="search hacker news" 
		placeholder="Find a topic on hacker news" name="query"/>
		<button type="submit">Submit</button>
	</form>

	{#if submit}
		{#await submit}
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


