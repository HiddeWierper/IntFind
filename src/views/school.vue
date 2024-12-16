<template>
    <div class="w-screen h-screen max-h-screen bg-gray-100 flex flex-col items-center justify-between">
      <!-- Header -->
      <header class="w-full bg-white p-4 shadow-md flex justify-center">
        <h1 class="text-blue-600 font-bold text-2xl">Intfind</h1>
      </header>
  
      <!-- Main Section -->
      <section class="w-1/2 h-[60%] flex items-center justify-center flex-col gap-4 border-2 border-gray-300 w-80 rounded overflow-hidden">
        <nav class="flex space-x-4 mt-4">
          <!-- Navigatie knoppen -->
          <RouterLink to="/" class="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-sm">Home</RouterLink>
          <RouterLink to="/skills" class="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-sm">Skills</RouterLink>
          <RouterLink to="/school" class="bg-blue-200 rounded-full w-16 h-16 flex items-center justify-center text-sm">School</RouterLink>
          <RouterLink to="/about" class="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-sm">About</RouterLink>
        </nav>
  
        <!-- School Content -->
        <div class="relative flex flex-col items-left p-4 text-sm">
          <h2 class="text-lg font-semibold mt-4">Mijn Opleiding</h2>
          <p class="text-gray-500 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus porro culpa sunt voluptates libero blanditiis at.
          </p>
          <p class="text-gray-500 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam eum repellat? Ipsa illum natus labore dolorum rem aliquid error nisi aspernatur cum.
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
  
  <script setup>
  import CustomButton from '../components/CustomButton.vue';
  </script>
  
  <style>
  html,
  body {
    margin: 0;
    padding: 0;
    overflow: hidden; /* Verwijdert scrollen volledig */
  }
  </style>
  