<template lang="pug">
  .particle-bar
      .particle-bar__add
        b-button(
          type="is-primary"
          icon-left="plus"
          expanded
          :disabled="!addingMode"
          @click="() => $emit(`addParticle`)"
        )
          | Add particle

      .particle-bar__list
        .particle(
          v-for="(particle, index) in particles"
          :key="particle.name"
          :class="selected == index ? `selected` : ``"
          v-text="particle.name"
          @click="() => select(index)"
        )

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Particle } from "@/types";

@Component
export default class ParticleBar extends Vue {
  @Prop() readonly particles!: Particle[];
  @Prop() readonly selected!: number;
}
</script>

<style scoped>
.particle-bar {
  display: grid;
  grid-template-rows: 1fr auto;
  min-width: 15rem;
  box-shadow: -10px 0 5px -5px rgba(0, 0, 0, 0.05);
}

.particle-bar__add {
  grid-row-start: 2;
  padding: 1rem;
}

.particle-bar__list {
  overflow: auto;
}

.particles {
  height: 30rem;
  overflow: auto;
}

.particle {
  padding: 1.25rem 1rem 1rem 1.5rem;
  background-color: #fdfdfd;
  margin: 1rem;
  border-radius: 0.25rem;
}

.selected {
  background-color: #d3d3d3;
}
</style>
