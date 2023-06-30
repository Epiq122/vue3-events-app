<template>
  <div class="networkError">
    <h1>Uh-oh!</h1>

    <h3>
      It looks like you're not connected to the internet. Please check your connection and try
      again.
      <a href="#" @click="$router.go(-1)">click here</a> to try again
    </h3>
  </div>
</template>
