<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { inject } from 'vue';

const GStore = inject('GStore');
</script>

<template>
  <div id="app">
    <div id="flashMessage" v-if="GStore.flashMessage">{{ GStore.flashMessage }}</div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink>
          |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}

@keyframes yelloFade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}
#flashMessage {
  animation-name: yelloFade;
  animation-duration: 3s;
}
</style>
