<template>
  <div class="bar">
    <b-field>
      <b-button expanded v-model="tmp" type="is-danger" @click="home">
        Home
      </b-button>
    </b-field>
    <b-field>
      <b-button expanded v-model="tmp" type="is-warning" @click="about">
        About
      </b-button>
    </b-field>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {
  @Prop() private msg!: string;

  home() {
    this.$router.push(`/`);
  }

  about() {
    this.$router.push(`/about`);
  }
}
</script>

<style scoped>
.bar {
  display: flex;
  padding: .5rem;
  background-color: #1e1e1e;
  width: 20rem;
  height: 100vh;
}
</style>
