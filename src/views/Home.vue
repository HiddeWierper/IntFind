
<script setup>
  import AllNavigation from '../components/AllNavigation.vue';
  import PersonalNavigation from '../components/PersonalNavigation.vue';
  import Choose from '../components/Choose.vue';
  import Header from '../components/Header.vue';
</script>

<template>
  <div class="w-screen h-screen bg-gray-100 flex flex-col">
    <!-- Header -->
    <Header></Header>

    <!-- Scrollable Section -->
    <section class="flex-grow flex items-center justify-center overflow-y-auto p-4">
      <div class="h-auto flex items-center justify-center flex-col gap-4 border-2 border-gray-300 rounded w-80 p-4">
        <PersonalNavigation />

        <!-- Image Section -->
        <div class="relative flex flex-col items-center">
          <img src="../assets/image.png" alt="Placeholder" class="w-48 h-48 rounded-full border-4 border-gray-300">
          <h2 class="text-xl font-semibold mt-4">Name age</h2>
          <p class="text-gray-500">Software developer</p>
        </div>

        <!-- Buttons Section -->
       <Choose></Choose>
      </div>
    </section>

    <!-- Footer -->
    <allNavigation />
  </div>
</template>
