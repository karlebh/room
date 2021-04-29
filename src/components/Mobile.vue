<template>
	<div class="lg:hidden">
		<MobileNav v-if="isOpen" />
		<div style="height: 50rem;" class="relative bg-m-image-hero bg-auto bg-no-repeat bg-cover bg-center">
			<div class="flex justify-between mx-7 pt-8">
				<svg @click="isOpen = !isOpen" width="20" height="14" xmlns="http://www.w3.org/2000/svg">
					<path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/>
				</svg>
				<logo />
				<br>
			</div>

			<div class="absolute right-0 bottom-0 flex text-white">
				<span class="bg-black px-8 pb-3 text-8xl font-thin hover:bg-gray-200 hover:text-black cursor-pointer">&lt;</span>
				<span class="bg-black px-8 pb-3 text-8xl font-thin hover:bg-gray-200 hover:text-black cursor-pointer">&gt;</span>
			</div>
		</div>

		<!-- Box 2 -->
		<div class="px-10 py-20">
			<h1 class="mb-3 text-3xl font-semibold">Discover innovative ways to decorate</h1>
			<article class="text-gray-500">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa obcaecati, quo blanditiis illo. Beatae accusantium, harum aut eum veritatis velit, aspernatur iste cupiditate totam, suscipit sit aliquam, qui iusto rem!
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit molestiae quisquam perspiciatis eveniet doloremque nostrum dolorem eius eaque voluptas veritatis minima ut dicta praesentium velit, iure voluptatum non consequuntur illo!
			</article>
			
			<div style="letter-spacing: 1rem;" class="flex items-center mt-16">
				<h1 class="uppercase mr-28 text-xl font-semibold">Shop Now </h1>
				<svg class="mt-2" width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
			</div>
		</div>

		<!-- Box 3 -->
		<div>
			<img class="w-full" src="../helpers/images/image-about-dark.jpg" alt="Shitty Picture">
		</div>
		
		<!-- Box 4 -->
		<div class="px-10 py-20">
			<h1 class="mb-3 text-3xl font-semibold uppercase">About Our Furniture</h1>
			<article class="text-gray-500">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa obcaecati, quo blanditiis illo. Beatae accusantium, harum aut eum veritatis velit, aspernatur iste cupiditate totam, suscipit sit aliquam, qui iusto rem!
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit molestiae quisquam perspiciatis eveniet doloremque nostrum dolorem eius eaque voluptas veritatis minima ut dicta praesentium velit, iure voluptatum non consequuntur illo!
			</article>
		</div>


		<!-- Box 5 -->
		<div>
			<img class="w-full" src="../helpers/images/image-about-light.jpg" alt="Shitty Picture">
		</div>
	</div>

</template>
<script>
	import Logo from '@/components/Logo'
	import MobileNav from '@/components/MobileNav'

	export default {

		data() {
			return {
				isOpen: false,
			}
		},

		components: {
			Logo,
			MobileNav,
		}, 

	}
</script>

<style>
.ham {
	margin-right: 40%;
}
</style>