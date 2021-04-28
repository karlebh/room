<template>
	<div id="app">
		<mobile />
		<desktop />
	</div>
</template>

<script>
	import Mobile from '@/components/Mobile'
	import Desktop from '@/components/Desktop'

	export default {
		name: 'App',
		components: {
			Mobile,
			Desktop,
		}
	}
</script>

