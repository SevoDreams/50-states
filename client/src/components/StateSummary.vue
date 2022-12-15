<template>
  <div>
    <p>There are a total of {{ states.length }} states, including D.C.</p>
    <p>You have visited {{ totalVisited }} of them</p>
    <p id="all-visited-message" v-show="areAllVisited">
      You've visited all states, and even D.C. Congragulations!!
    </p>
  </div>
</template>

<script>
export default {
  name: "StateSummary",
  props: {
    states: Array,
  },
  computed: {
    totalVisited() {
      let visitedCount = 0;
      this.states.forEach((state) => {
        if (state.visited) {
          visitedCount++;
        }
      });
      return visitedCount;
    },
    areAllVisited() {
      return this.totalVisited === this.states.length;
    },
  },
};
</script>

<style scoped>
#all-visited-message {
  color: purple;
  font-weight: 600;
}
</style>
