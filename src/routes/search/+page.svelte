<script lang="ts">
	import type { PageData } from './$types';
	export let form: PageData
	import history from '../history/store';
	if (form?.success) {
		history.update(oldHistory => [...oldHistory, form.query])
		console.log('store from search page: ',$history)
	}

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
	>
	
		<input 
			aria-label="search hacker news" 
			placeholder="Find a topic on hacker news"
			name="query"
		>
	</form>
	

	{#if form?.success}
		{#each form.hits as result}
			<p>
				<a href="{result.url}">{result.title}</a> 
			</p>
		{/each}
	{/if}



	
</div>


