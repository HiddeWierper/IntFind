
<script setup>
import CustomButton from '../components/CustomButton.vue';
import Navigation from '../components/Navigation.vue';
</script>

<template>
  <div class="w-screen h-screen bg-gray-100 flex flex-col">
    <!-- Header -->
    <header class="w-full bg-white p-4 shadow-md flex justify-center">
      <h1 class="text-blue-600 font-bold text-2xl">Intfind</h1>
    </header>

    <!-- Scrollable Section -->
    <section class="flex-grow flex items-center justify-center overflow-y-auto p-4">
      <div class="h-auto flex items-center justify-center flex-col gap-4 border-2 border-gray-300 rounded w-80 p-4">
        <Navigation></Navigation>

        <!-- Image Section -->
        <div class="relative flex flex-col items-center">
          <img src="../assets/image.png" alt="Placeholder" class="w-48 h-48 rounded-full border-4 border-gray-300">
          <h2 class="text-xl font-semibold mt-4">Name age</h2>
          <p class="text-gray-500">Software developer</p>
        </div>

        <!-- Buttons Section -->
        <div class="flex space-x-6 mb-8">
          <CustomButton icon="❌" color="bg-red-500" />
          <CustomButton icon="🤖" color="bg-yellow-500" />
          <CustomButton icon="✅" color="bg-green-500" />
        </div>
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
