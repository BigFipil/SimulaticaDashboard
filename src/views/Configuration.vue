<template lang="pug">
  .container
    .columns
      .column
        Form(label="Simulation settings")
          div
            b-field(label='Iteration count:')
              b-input(v-model.number='localSettings.IterationCount' expanded type='number' @input="update")

            b-field(label='Step time:')
              b-input(v-model.number='localSettings.SimulationStepTime' expanded type='number' @input="update")

            b-field(label='Data savings step time:')
              b-input(v-model.number='localSettings.DataSaveStepTime' expanded type='number' @input="update")

            b-field(label='Memory mode:')
              b-switch(v-model='localSettings.FullRamMode' disabled='true' @input="update")
                | {{ localSettings.FullRamMode ? `Tylko pamięć ram` : `Bez ograniczeń` }}

      .column
        Form(label="Output settings")
          div
            b-field(label='Simulation type:')
              b-select(v-model='localSettings.SimulationType' expanded @input="update")
                option(v-for='type in simulationTypes' :key='type' :value='type' v-text='type')

            .columns.no__margin
              b-field.column.no__margin(label='X' expanded)
                b-input(v-model.number='localSettings.SimulationBoxSize.X' type='number' @input="update")

              b-field.column.no__margin(label='Y')
                b-input(v-model.number='localSettings.SimulationBoxSize.Y' type='number' @input="update")

              b-field.column.no__margin(v-if='simulationType == `3D`' label='Z')
                b-input(v-model.number='localSettings.SimulationBoxSize.Z' type='number' @input="update")

            b-field(label='Animation framerate:')
              b-input(v-model.number='localSettings.OutputAnimationFramerate' type='number' @input="update")

            b-field(label='Output path:')
              b-input(v-model='localSettings.OutputPath' @input="update")

</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Form from "@/components/Form.vue";
import { Settings } from "@/types";

@Component({
  components: {
    Form,
  },
})
export default class Configuration extends Vue {
  simulationTypes = [`2D`, `3D`];

  localSettings: Settings = this.settings;

  @Watch(`settings`)
  onSettingsChange(value: Settings) {
    this.localSettings = { ...value };
  }

  update() {
    this.$store.commit(`updateSettings`, this.localSettings);
  }

  get settings() {
    return this.$store.state.settings;
  }

  get simulationType() {
    return this.localSettings.SimulationType;
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
.no__margin {
  margin-bottom: 0 !important;
}
</style>
