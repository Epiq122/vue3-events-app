<script setup>
import { ref, onMounted, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import EventService from '../../services/EventService';

const event = ref(null);
const router = useRouter();
const props = defineProps({
  id: {
    required: true,
  },
});

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      console.log(error);
      router.push({ name: '404Resource', params: { resource: 'event' } });
    });
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <RouterLink :to="{ name: 'event-details' }"> Details</RouterLink>
      <RouterLink :to="{ name: 'event-register' }"> | Register</RouterLink>
      <RouterLink :to="{ name: 'event-edit' }"> | Edit</RouterLink>
    </div>
    <RouterView :event="event"></RouterView>
  </div>
</template>
