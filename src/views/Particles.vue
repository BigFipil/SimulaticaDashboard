<template lang="pug">
  .container
    .columns
      .column
        Form(label="Particle List:")
          div
            .particle(
              v-for="(particle, index) in localParticles"
              :key="particle.name"
              :class="selected == index ? `selected` : ``"
              v-text="particle.name"
              @click="() => selected = index"
            )

            .add__button
              b-field
                b-button(
                  type="is-primary"
                  size="is-small"
                  style="background-color: transparent; color: black"
                  @click="addParticle"
                )
                  b-icon(
                    icon="plus"
                    size="is-small"
                  )

              .label Dodaj nowy element

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

</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Form from "@/components/Form.vue";
import { Particle } from "@/types";

@Component({
  components: {
    Form,
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
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  margin: 2rem 15%;
}

.particle {
  padding: 1.25rem 1rem 1rem 1.5rem;
  background-color: #fdfdfd;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
}

.selected {
  background-color: #d3d3d3;
}

.add__button {
  display: flex;
  gap: 0.5rem;
}
/* .todoitem
    display: flex
    width: 100%
    gap: .5rem
    margin-block: .5rem
.todoitem__label
    flex-shrink: 1
    flex-grow: 1
    width: 100%
.todoitem__button
    flex-shrink: 0
    flex-grow: 0
    width: 1rem
    padding-top: .25rem
    background-color: transparent
    display: none */
.label {
  font-size: 1rem;
  padding-top: 0.15rem;
  opacity: 0.5;
}


.no__margin {
  margin-bottom: 0 !important;
}
</style>
