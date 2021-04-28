<template>
    <header>
        <!-- Mobile Header -->
        <div class="lg:hidden bg-m-image-hero bg-cover" style="height: 100rem;">
            <div class="mx-5 pt-20 flex items-center justify-between text-gray-100">
                <logo />
                <svg v-if="isOpen" @click="isOpen = ! isOpen" class="cursor-pointer" width="24" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/></g></svg>
                <!-- hello -->
            </div>

            <div class="h-full flex flex-wrap content-center justify-center">
                <p class="text-gray-100 font-light border-4 text-5xl sm:text-4xl md:text-6xl p-5 sm:text-7xl sm:p-10 md:text-8xl md:p-9">
                    IMMERSIVE <br>
                    EXPERIENCES <br>
                    THAT <br>
                    DELEIVER <br>
                </p>
            </div>

            <!-- Nav Menu -->
            <nav v-if="!isOpen" 
            class="px-10 bg-black h-full fixed right-0 left-0 bottom-0 top-0 text-white">
                <div class="mr-5 pt-20 flex items-center justify-between text-gray-100">
                    <logo />
                    <svg @click="isOpen = ! isOpen" class="cursor-pointer" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#FFF" fill-rule="evenodd"/></svg>

                </div>
                
                <div class="flex flex-col mt-20">
                    <a href="#" class="text-2xl font-thin text-gray-300">ABOUT</a>
                    <a href="#" class="text-2xl font-thin text-gray-300 my-3">CAREERS</a>
                    <a href="#" class="text-2xl font-thin text-gray-300 my-3">EVENTS</a>
                    <a href="#" class="text-2xl font-thin text-gray-300 my-3">PRODUCTS</a>
                    <a href="#" class="text-2xl font-thin text-gray-300 my-3">SUPPORT</a>
                </div>
            </nav>

        </div>

        <!-- Desktop Header -->
        <div class="hidden lg:block">
        <!-- Block 1 -->
            <div class="bg-d-hero bg-no-repeat relative" style="height: 40.5rem;">
                <div class="flex items-baseline justify-between text-gray-100 mx-20 pt-20">
                    <h1 class="font-bold text-5xl">loopstudios</h1>

                    <div class="flex items-baseline">
                        <a href="#" class="text-xl font-medium text-gray-300">About</a>
                        <a href="#" class="text-xl font-medium text-gray-300 mx-3">Careers</a>
                        <a href="#" class="text-xl font-medium text-gray-300 mx-3">Events</a>
                        <a href="#" class="text-xl font-medium text-gray-300 mx-3">Products</a>
                        <a href="#" class="text-xl font-medium text-gray-300 mx-3">Support</a>
                    </div>
                </div>

                <div class="absolute ml-20 top-64">
                    <p class="text-gray-100 font-thin text-8xl border-2 px-10 py-5">
                        IMMERSIVE <br>
                        EXPERIENCES <br>
                        THAT 
                        DELEIVER <br>
                    </p>
                </div>
            </div>

        </div>
    </header>
</template>

<style scoped>
    .svg {
        background-size: 4px;
    }
</style>

<script>
    import Logo from '@/components/Logo'

    export default {
        components: {
            Logo,
        },

        data() {
            return {
                isOpen: true,
            }
        }
    }
</script>


