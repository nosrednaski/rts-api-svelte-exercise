<script lang="ts">
	import historyStore from '../history/store';
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


