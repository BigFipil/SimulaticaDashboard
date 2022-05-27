<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg" />
    <!-- <Sidebar/> -->
    <b-field label="Welcome to your Vue">
      <b-button expanded v-model="tmp" type="is-danger">
        Lorem ipsum dolor sit amet, consectetur
      </b-button>
    </b-field>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  tmp = null;
}
</script>
