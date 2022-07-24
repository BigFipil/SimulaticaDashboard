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
import { Particle } from "@/types";

@Component
export default class Topbar extends Vue {
  download() {
    const blob = new Blob([JSON.stringify(this.simulationConfig)], { type: `application/json` });
    saveAs(blob, `simulation.conig`);
  }

  get simulationConfig() {
    return {
      particleBlueprints: this.mapParticles(),
      ...this.settings,
    };
  }

  get settings() {
    return this.$store.state.settings;
  }

  get particles(): Particle[] {
    return this.$store.state.particles;
  }

  mapParticles() {
    return this.particles.map((particle) => {
      const mapped = Object.fromEntries(
        particle.rawMethods
          .split(`[SimulaticaMethod]`)
          .filter((_element, index) => index != 0)
          .map((methodString) => {
            const header = methodString
              .substring(0, methodString.indexOf(`{`))
              .replace(`public void `, ``)
              .replace(`private void `, ``)
              .trim();

            const body = methodString
              .replaceAll(`\n`, ``)
              .replaceAll(`\t`, ``)
              .trim()
              .substring(
                methodString.indexOf(`{`),
                methodString.lastIndexOf(`}`) - 1
              )
              .replace(/\}([^}]*)$/, `$1`);

            return [header, body];
          })
      );

      return { ...particle, methods: mapped };
    });
  }
}
</script>

<style scoped>
.bar {
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
  background-color: #2b2a2a;
  text-align: center;
}
</style>
