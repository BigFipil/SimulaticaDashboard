<template lang="pug">
  .properties
    .properties__add
        b-button(
          type="is-primary"
          icon-left="plus"
          expanded
          @click="addProperty"
        )
          | Add property

    .properties-list
      .properties-list__element(
        v-for="(value, name) in properties"
        :key="name"
      )
        b-field.properties-list__element--primary(label="name")
          b-input(
            :value="name"
            @input="(newName) => namePlaceholder = newName"
            @blur="setPropName(name)"
          )

        b-field.properties-list__element--secondary(label="type")
          b-input(
            :value="value"
            @input="(newValue) => setPropValue(newValue, name)"
          )

</template>

<script lang="ts">
import { Component, Model, Vue } from "vue-property-decorator";

@Component
export default class PropertyList extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Model(`input`) readonly properties!: any;

  namePlaceholder: string = ``;

  addProperty() {
    this.$emit(`input`, {
      ...this.properties,
      property: ``,
    });
  }

  setPropName(name: string) {
    let obj = this.properties;
    obj[this.namePlaceholder] = obj[name];
    delete obj[name];

    this.$emit(`input`, { ...obj });
  }

  setPropValue(newValue: string, name: string) {
    let obj = this.properties;
    obj[name] = newValue;

    this.$emit(`input`, { ...obj });
  }
}
</script>

<style scoped>
.properties {
  display: grid;
  grid-template-rows: 1fr auto;
  height: 31.75rem;
}

.properties__add {
  grid-row-start: 2;
  padding: 1rem;
}

.properties-list {
  overflow: auto;
}

.properties-list__element {
  display: flex;
}

.properties-list__element--primary {
  margin-right: .5rem;
}
.properties-list__element--secondary {
  margin-left: .5rem;
}
</style>
