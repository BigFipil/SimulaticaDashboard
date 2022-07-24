<template lang="pug">
  .form
    .label
      b {{ label }}
    .content
      slot

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Form extends Vue {
  @Prop() private label!: string;
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
.label {
  font-size: 2rem;
  color: #f1f1f1;
}
.content {
  padding-left: 1rem;
  margin-bottom: 3rem;
}
</style>
