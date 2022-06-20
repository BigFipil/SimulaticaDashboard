<template lang="pug">
  .bar
    b-field
      b-button(
        type="is-primary"
        v-text="`Download`"
        @click="download"
      )
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { saveAs } from "file-saver";

@Component
export default class Topbar extends Vue {
  download() {
    const blob = new Blob([JSON.stringify(this.simulationConfig)], { type: `application/json` });
    saveAs(blob, `simulation.conig`);
  }

  get simulationConfig() {
    return {
      particleBlueprints: this.particles,
      ...this.settings,
    };
  }

  get settings() {
    return this.$store.state.settings;
  }

  get particles() {
    return this.$store.state.particles;
  }
}
</script>

<style scoped>
.bar {
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
  background-color: #f0f0f0;
  text-align: center;
}
</style>
