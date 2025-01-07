
<script setup>
import CustomButton from '../components/CustomButton.vue';
import Navigation from '../components/Navigation.vue';
</script>

<template>
  <div class="w-screen h-screen max-h-screen bg-gray-100 flex flex-col items-center justify-between">
    <!-- Header -->
    <header class="w-full bg-white p-4 shadow-md flex justify-center">
      <h1 class="text-blue-600 font-bold text-2xl">Intfind</h1>
    </header>

    <section class="h-[60%] flex items-center justify-center flex-col gap-4 border-2 border-gray-300 rounded w-80 overflow-hidden">
        <Navigation></Navigation>

      <!-- About Section -->
      <div class="relative flex flex-col items-left p-4 text-sm">
        <h2 class="text-lg font-semibold mt-4">Over Mij</h2>
        <p class="text-gray-500 mt-2 leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga corrupti quo quos veniam tempora tempore nulla qui voluptatibus, laborum molestiae cupiditate quaerat!
        </p>
        <p class="text-gray-500 mt-2 leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga corrupti quo quos veniam tempora tempore?
        </p>
      </div>

      <!-- Buttons Section -->
      <div class="flex space-x-6 mb-8">
        <CustomButton icon="❌" color="bg-red-500" />
        <CustomButton icon="🤖" color="bg-yellow-500" />
        <CustomButton icon="✅" color="bg-green-500" />
      </div>
    </section>

    <!-- Footer -->
    <footer class="w-full bg-white p-4 shadow-md flex justify-around">
      <CustomButton icon="💬"></CustomButton>
      <CustomButton icon="🏠"></CustomButton>
      <CustomButton icon="⚙️"></CustomButton>
    </footer>
  </div>
</template>


<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden; /* Verwijdert scrollen volledig */
}
</style>
