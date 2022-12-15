<template>
  <div class="state-map">
    <h2>The state of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state yet</p>

    <!-- Todo Map -->

    <div id="map-container" v-if="dataReady">
      <l-map
        ref="map"
        v-on:ready="onMapReady"
        v-bind:center="mapCenter"
        v-bind:zoom="state.zoom"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        ></l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  name: "StateMap",
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      state: {},
      dataReady: false,
      mapReady: false,
    };
  },
  mounted() {
    this.state.name = this.$route.params.state; // Grabs the name from the url in routes (where we get this parameter)
    this.fetchStateData();
  },
  methods: {
    fetchStateData() {
      this.$stateService
        .getOneState(this.state.name)
        .then((state) => {
          this.state = state;
          this.dataReady = true;
        })
        .catch((err) => {
          // 404
          if (err.response && err.response.status === 404) {
            this.state.name = "?";
          } else {
            // 500
            alert("Error fetching state data");
            console.error(err); // For the developer
          }
        });
    },

    onMapReady() {
      this.mapReady = true;
    },

    setMapView() {
      if (this.mapReady && this.dataReady) {
        // Todo - make sure map is correct
        this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom);
        // since we need a decent amount of preparation before we load our map, this if statement makes sure we circumvent any problems related to that
      }
    },
  },
  computed: {
    mapCenter() {
      return [this.state.lat, this.state.lon];
    },
  },
};
</script>

<style scoped>
#map-container {
  height: 30rem;
}
</style>
