<script setup>
import { defineProps, ref, inject } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  event: {
    required: true,
  },
});
const router = useRouter();
const GStore = inject('GStore');
const eventId = ref(props.event.id);
const register = () => {
  // Assuming successful API call call to register them.

  GStore.flashMessage = `You are registered for ${props.event.title}`;
  setTimeout(() => {
    GStore.flashMessage = '';
  }, 3000);

  router.push({
    name: 'event-details',
    params: { id: eventId.value },
  });
  return {
    register,
  };
};
</script>

<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>
