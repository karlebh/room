<template>
	<div class="hidden lg:flex lg:flex-col">
		<div class="flex">
				<div id="slider" class="w-3/5 bg-auto bg-no-repeat bg-cover bg-center">
					<div class="flex items-baseline font-semibold text-gray-200 text-md px-10 ml-5 py-16">
						<logo class="mr-10" />
						<a class="mr-8" href="#">home</a>
						<a class="mr-8" href="#">shop</a>
						<a class="mr-8" href="#">about</a>
						<a href="#">contact</a>
					</div>
				</div>
			<!--  -->
			<div class="w-2/5 px-20 py-20 relative">
				<div class="mb-28">
					<h1 class="mb-5 text-4xl font-semibold">Discover innovative <br> ways to decorate</h1>
					<article class="text-gray-500">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa obcaecati, quo blanditiis illo. Beatae accusantium, harum aut eum veritatis velit, aspernatur iste cupiditate totam, suscipit sit aliquam, qui iusto rem!
					</article>
					
					<div style="letter-spacing: .5rem;" class="flex items-center mt-1">
						<h1 class="uppercase mr-28 text-xl font-semibold">Shop Now </h1>
						<svg class="mt-2" width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
					</div>
				</div>

				<div class="absolute left-0 bottom-0 flex text-white block">
					<span class="bg-black px-4 pb-3 text-8xl font-thin text-gray-100 hover:bg-gray-200 hover:text-black cursor-pointer ">&lt;</span>
					<span class="bg-black px-4 pb-3 text-8xl font-thin text-gray-100 hover:bg-gray-200 hover:text-black cursor-pointer ">&gt;</span>
				</div>
			</div>
		</div>

		<div class="flex">
			<div style="width: 30%;" class="bg-about-dark bg-auto bg-no-repeat bg-cover bg-center">
				
			</div>

			<div style="width: 40%;" class="px-10 py-20">
				<h1 class="mb-3 text-xl font-semibold">Discover innovative ways to decorate</h1>
				<article class="text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa obcaecati, quo blanditiis illo. Beatae accusantium, harum aut eum veritatis velit, aspernatur iste cupiditate totam, suscipit sit aliquam, qui iusto rem!
				</article>
			</div>

			<div style="width: 30%;" class="bg-about-light bg-auto bg-no-repeat bg-cover bg-center">
				
			</div>

		</div>
		
	</div>
</template>

<script>
	import Logo from '@/components/Logo'

	export default {
		components: {
			Logo,
		},

		data() {
			return {
			}
		},

		mounted() {
			setInterval(this.Slider(), 1000)
			// this.Slider
		},

		methods: {
			Slider() {
				const images = [
					'bg-d-hero-1',
					'bg-d-hero-2',
					'bg-d-hero-3',
				]

				let currSlide = 0
				
				document.getElementById('slider')
						.classList
						.add(images[currSlide])


				if (currSlide < images.length - 1) {
					currSlide++
				} else {
					currSlide = 0
				}

				setInterval(() => {
					// currSlide < images.length - 1 ? currSlide++ : currSlide = 0
					document.getElementById('slider')
						.classList
						.replace(images[currSlide], images[++currSlide])
				}, 1000)
			}
		}
	}
</script>
