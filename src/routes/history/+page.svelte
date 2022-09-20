<script>
	import historyStore from './store'
</script>

<svelte:head>
	<title> History | RTS API Exercise </title>
	<meta name="history" content="History of Hacker News searches" />
</svelte:head>

<div>
	<h2>History</h2>
	{#if $historyStore.length == 0}
		<h3>Try searching something to see your history.</h3>
	{:else}
		{#each $historyStore as item}
			<p>{item}</p>
		{/each}
	{/if}
</div>