<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page',
  },
});
</script>

<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <Router-link :to="{ name: 'event-list' }">Back to home page</Router-link>
</template>

<style lang="scss" scoped></style>
