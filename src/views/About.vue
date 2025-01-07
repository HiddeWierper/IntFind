
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

    <section class="h-[60%] flex items-center justify-center flex-col gap-4 border-2 border-gray-300 rounded w-80 overflow-hidden">
        <PersonalNavigation></PersonalNavigation>

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
