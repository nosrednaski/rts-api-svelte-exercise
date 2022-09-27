<script>
	import history from './store'
	console.log('store from history page', $history)
</script>

<svelte:head>
	<title> History | RTS API Exercise </title>
	<meta name="history" content="History of Hacker News searches" />
</svelte:head>

<div>
	<h2>History</h2>
	{#if $history.length == 0}
		<h3>Try searching something to see your history.</h3>
	{:else}
		{#each $history as item}
			<p>{item}</p>
		{/each}
	{/if}
</div>