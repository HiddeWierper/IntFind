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
    <section class="flex-grow flex justify-center overflow-y-auto p-4">
      <div class="h-auto flex flex-col items-center gap-4 border-2 border-gray-300 rounded w-80 p-4">
        <PersonalNavigation></PersonalNavigation>

        <!-- Skills Content -->
        <div class="relative flex flex-col items-start p-4 text-sm">
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
        <Choose></Choose>
      </div>
    </section>

    <!-- Footer -->
<AllNavigation />
  </div>
</template>

  

  

  