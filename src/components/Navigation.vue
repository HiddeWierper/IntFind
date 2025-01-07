<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="flex space-x-4 mt-0">
    <RouterLink 
      to="/" 
      :class="[
        'rounded-full w-16 h-16 flex items-center justify-center text-sm',
        route.path === '/' ? 'bg-blue-200' : 'bg-gray-200'
      ]">
      Home
    </RouterLink>
    <RouterLink 
      to="/skills" 
      :class="[
        'rounded-full w-16 h-16 flex items-center justify-center text-sm',
        route.path === '/skills' ? 'bg-blue-200' : 'bg-gray-200'
      ]">
      Skills
    </RouterLink>
    <RouterLink 
      to="/school" 
      :class="[
        'rounded-full w-16 h-16 flex items-center justify-center text-sm',
        route.path === '/school' ? 'bg-blue-200' : 'bg-gray-200'
      ]">
      School
    </RouterLink>
    <RouterLink 
      to="/about" 
      :class="[
        'rounded-full w-16 h-16 flex items-center justify-center text-sm',
        route.path === '/about' ? 'bg-blue-200' : 'bg-gray-200'
      ]">
      About
    </RouterLink>
  </nav>
</template>
