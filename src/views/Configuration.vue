<template lang="pug">
  .container
    .columns
      .column
        Form(label="Simulation settings")
          div
            b-field(label='Iteration count:')
              b-input(v-model.number='settings.IterationCount' type='number')

            b-field(label='Step time:')
              b-input(v-model.number='settings.SimulationStepTime' type='number')

            b-field(label='Data savings step time:')
              b-input(v-model.number='settings.DataSaveStepTime' type='number')

            b-field(label='Memory mode:')
              b-switch(v-model='settings.FullRamMode' disabled='true')
                | {{ fullRamMode ? `Tylko pamięć ram` : `Bez ograniczeń` }}

      .column
        Form(label="Output settings")
          div
            b-field(label='Simulation type:')
              b-select(v-model='simulationType' expanded='')
                option(v-for='type in simulationTypes' :key='type' :value='type' v-text='type')

            .columns.no__margin
              b-field.column.no__margin(label='X' expanded='')
                b-input(v-model.number='simulationBoxSize.X' type='number')

              b-field.column.no__margin(label='Y')
                b-input(v-model.number='simulationBoxSize.Y' type='number')

              b-field.column.no__margin(v-if='simulationType == `3D`' label='Z')
                b-input(v-model.number='simulationBoxSize.Z' type='number')

            b-field(label='Animation framerate:')
              b-input(v-model.number='settings.OutputAnimationFramerate' type='number')

            b-field(label='Output path:')
              b-input(v-model='settings.OutputPath')

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Form from "@/components/Form.vue";

@Component({
  components: {
    Form,
  },
})
export default class Configuration extends Vue {
  settings = {
    IterationCount: 100,
    SimulationStepTime: 1,
    DataSaveStepTime: 10,
    FullRamMode: true,
    OutputPath: ``,
    OutputAnimationFramerate: 12,
    Threads: 1,
  };

  simulationBoxSize = {
    X: 10,
    Y: 10,
    Z: 10,
  }

  simulationType = `3D`;

  simulationTypes = [`2D`, `3D`];
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
