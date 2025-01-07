<script setup>
import PersonalNavigation from '../components/PersonalNavigation.vue';
import AllNavigation from '../components/AllNavigation.vue';
import Choose from '../components/Choose.vue';
import Header from '../components/Header.vue';
</script>

<template>
    <div class="w-screen h-screen max-h-screen bg-gray-100 flex flex-col items-center justify-between">
      <!-- Header -->
      <Header></Header>
  
      <!-- Main Section -->
      <section class="h-[60%] flex items-center justify-center flex-col gap-4 border-2 border-gray-300 w-80 rounded overflow-hidden">
        
        <PersonalNavigation></PersonalNavigation>
  
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
          <Choose></Choose>
      </section>
  
      <!-- Footer -->
      <AllNavigation />
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
  