<script setup>
import CustomButton from '../components/CustomButton.vue';
import Navigation from '../components/Navigation.vue';
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden; /* Verwijdert scrollen volledig */
}
</style>

<template>
    <div class="w-screen h-screen max-h-screen bg-gray-100 flex flex-col items-center justify-between">
      <!-- Header -->
      <header class="w-full bg-white p-4 shadow-md flex justify-center">
        <h1 class="text-blue-600 font-bold text-2xl">Intfind</h1>
      </header>
  
      <!-- Main Section -->
      <section class="h-[60%] flex items-center justify-center flex-col gap-4 border-2 w-80 border-gray-300 rounded overflow-hidden">
        <Navigation></Navigation>
        <!-- Skills Content -->
        <div class="relative flex flex-col items-left p-4 text-sm">
          <h2 class="text-lg font-semibold mt-4">Mijn Vaardigheden</h2>
          <ul class="list-disc ml-6 mt-2 text-gray-500">
            <li>HTML, CSS, JavaScript</li>
            <li>Vue.js, React</li>
            <li>Node.js, Express</li>
            <li>Git, GitHub</li>
            <li>Responsive Design</li>
          </ul>
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
  

  

  