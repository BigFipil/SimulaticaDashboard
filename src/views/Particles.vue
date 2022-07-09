<template lang="pug">
  .view
    .container
      .columns
        .column
          Form(label="Particle:")
            div(v-if="particle")
              b-field(label='Name:')
                b-input(v-model='particle.name' @input="update")

              b-field(label='Quantity:')
                b-input(v-model.number='particle.quantity' type='number' @input="update")

              .columns.no__margin
                b-field.column.no__margin(label='X' expanded='')
                  b-input(v-model='particle.outputInformations.x' @input="update")

                b-field.column.no__margin(label='Y')
                  b-input(v-model='particle.outputInformations.y' @input="update")

                b-field.column.no__margin(label='Z')
                  b-input(v-model='particle.outputInformations.z' @input="update")

              b-field(label='Color:')
                b-input(v-model='particle.outputInformations.color' @input="update")

              b-field(label='Type:')
                b-input(v-model='particle.outputInformations.type' @input="update")

              b-field(label='Size:')
                b-input(v-model='particle.outputInformations.size' @input="update")

        .column
          Form(label="Properties:")
            PropertyList(
              v-if="particle"
              v-model="particle.properties"
            )

    .particle-bar
      .particle-bar__add
        b-button(
          type="is-primary"
          icon-left="plus"
          expanded
          @click="addParticle"
        )
          | Add particle

      .particle-bar__list
        .particle(
          v-for="(particle, index) in localParticles"
          :key="particle.name"
          :class="selected == index ? `selected` : ``"
          v-text="particle.name"
          @click="() => selected = index"
        )

</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Form from "@/components/Form.vue";
import PropertyList from "@/components/PropertyList.vue";
import { Particle } from "@/types";

@Component({
  components: {
    Form,
    PropertyList,
  },
})
export default class Particles extends Vue {
  localParticles: Particle[] = this.particles;
  selected: number | null = null;

  @Watch(`particles`)
  onParticleChange(value: Particle[]) {
    this.localParticles = [...value];
  }

  addParticle() {
    this.localParticles.push({
      name: `new particle #${this.localParticles.length + 1}`,
      quantity: 0,
      properties: {},
      methods: {},
      outputInformations: {
        color: `white`,
        x: `<1>`,
        y: `<2>`,
        z: `<3>`,
        size: 5,
        type: `dot`,
      },
    });

    this.update();
  }

  update() {
    this.$store.commit(`updateParticles`, this.localParticles);
  }

  get particles() {
    return this.$store.state.particles;
  }

  get particle() {
    if (this.selected !== null) return this.localParticles[this.selected];
    return null;
  }
}
</script>

<style scoped>
.view {
  display: flex;
  height: calc(100% - 4.5rem);
}

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

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 2rem 10%;
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

.add__button {
  display: flex;
  gap: 0.5rem;
}
.label {
  font-size: 1rem;
  padding-top: 0.15rem;
  opacity: 0.5;
}

.no__margin {
  margin-bottom: 0 !important;
}
</style>
