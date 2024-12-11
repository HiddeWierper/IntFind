<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'bg-gray-300',
  },
});
</script>

<template>
  <button :class="`${color} rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl`">
    {{ icon }}
  </button>
</template>
