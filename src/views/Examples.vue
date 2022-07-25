<template lang="pug">
.content
  h1.heading Coming soon
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Examples extends Vue {}
</script>

<style lang="scss">
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.heading {
  font-size: 3rem;
}
</style>
