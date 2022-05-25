<template>
  <div class="about">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <Sidebar/> -->
    <b-field>
      <b-button expanded v-model="tmp" type="is-danger">
        Button 1
      </b-button>
    </b-field>
    <b-field>
      <b-button expanded v-model="tmp" type="is-danger">
        Button 2
      </b-button>
    </b-field>
    <b-field>
      <b-button expanded v-model="tmp" type="is-danger">
        Button 3
      </b-button>
    </b-field>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  tmp2 = null;
}
</script>
