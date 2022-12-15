<template>
  <div>
    <h1>States you've visited</h1>
    <p v-for="state in visitedStates" v-bind:key="state.name">
      {{ state.name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "StatesVisited",
  data() {
    return {
      visitedStates: [],
    };
  },
  mounted() {
    this.findVisitedStates();
  },

  methods: {
    findVisitedStates() {
      this.$stateService
        .getVisitedStates()
        .then((states) => {
          this.visitedStates = states;
        })
        .catch((err) => {
          alert("Can't fetch visited states");
          console.error(err);
        });
    },
  },
};
</script>

<style scoped></style>
