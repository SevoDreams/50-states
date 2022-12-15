<template>
  <div>
    <div id="navigation-links">
      <span class="nav-link">
        <router-link v-bind:to="{ name: 'StateList' }">Home</router-link>
      </span>

      <!-- router link is connected to the index.js inside our router folder -->
      <!-- so it knows what component we're talking about when we v-bind:to 'StateList' -->
      <span class="nav-link">
        <router-link v-bind:to="{ name: 'AboutSite' }"
          >About this site</router-link
        ></span
      >
    </div>

    <p>
      Header image by
      <a href="https://unsplash.com/photos/KpBXAOs80YI"
        >@chrislawton on Unsplash</a
      >
    </p>
    <p>
      <a target="_blank" href="https://icons8.com/icon/42444/map-marker"
        >Map Marker</a
      >
      icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style scoped>
.nav-link {
  margin: 1rem;
}
</style>
