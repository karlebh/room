<template>
	<nav id="navBar" class="fixed right-0 left-0 top-0 bottom-0 w-full h-full z-20">
		<div class="flex justify-around items-baseline font-semibold text-gray-900 text-2xl bg-gray-50 px-10 py-16">
			<svg @click="closeNav" class="text-black" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity="1"/></svg>
			<a href="#">home</a>
			<a href="#">shop</a>
			<a href="#">about</a>
			<a href="#">contact</a>
		</div>
		
	</nav>
</template>

<script>
	export default {
		methods: {
			closeNav() {
				document.getElementById('navBar').classList.add('hidden')
				document.getElementById('navBar').classList.add('transition')
				document.getElementById('navBar').classList.add('duration-500')
			}
		}
	}
</script>

<style>
	#navBar {
		background-color: rgb(0,0,0); /* Fallback color */
		background-color: rgba(0,0,0,0.7); /* Black w/ opacity */
	}
</style>