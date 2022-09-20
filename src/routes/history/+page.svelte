<script>
	import historyStore from '../../store'
</script>

<svelte:head>
	<title> History | RTS API Exercise </title>
	<meta name="history" content="History of Hacker News searches" />
</svelte:head>

<div>
	<h2>History</h2>
	{#each $historyStore as item}
		<p>{item}</p>
	{/each}
</div>