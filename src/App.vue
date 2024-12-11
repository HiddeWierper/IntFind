<script setup>
import CustomButton from './components/CustomButton.vue';
</script>

<template>
  <div class="w-screen h-screen bg-gray-100 flex flex-col items-center justify-between">
    <!-- Header -->
    <header class="w-full bg-white p-4 shadow-md flex justify-center">
      <h1 class="text-blue-600 font-bold text-2xl">Intfind</h1>
    </header>

    <section class="w-1/2 flex items-center justify-center flex-col gap-4">
    <nav class="flex space-x-4 mt-4">
      <button class="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-sm">home</button>
      <button class="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-sm">skills</button>
      <button class="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-sm">school</button>
      <button class="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-sm">about</button>
    </nav>

    <!-- Image Section -->
    <div class="relative flex flex-col items-center">
      <img src="./assets/image.png" alt="Placeholder" class="w-48 h-48 rounded-full border-4 border-gray-300">
      <h2 class="text-xl font-semibold mt-4">Name age</h2>
      <p class="text-gray-500">Software developer</p>
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
/* Optioneel: Voeg globale stijlen toe */
</style>
