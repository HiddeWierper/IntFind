<script setup>
import CustomButton from '../components/CustomButton.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template> 
  <footer class="w-full bg-white p-4 shadow-md flex justify-around">
    <CustomButton to="/chat" icon="💬"></CustomButton>
    <CustomButton to="/" icon="🏠"></CustomButton>
    <CustomButton to="/settings" icon="⚙️"></CustomButton>
  </footer>
</template>