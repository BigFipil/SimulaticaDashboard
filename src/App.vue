<template>
  <div class="app">
    <Sidebar />
    <div class="app__content">
      <Topbar />

      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sidebar from "@/components/Sidebar.vue";
import Topbar from "@/components/Topbar.vue";

@Component({
  components: {
    Sidebar,
    Topbar,
  },
})
export default class App extends Vue {
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #464646;
  display: flex;
}

.label {
  color: #f1f1f1;
}

.app__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
