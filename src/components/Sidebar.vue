<template>
  <div :class="[isExpanded ? `expanded` : '', `bar`]">
    <div class="is_one_third">
      <div class="bar__header">
        <b-button type="is-primary" @click="toggle">
          <b-icon icon="menu" size="is-small" />
        </b-button>
      </div>

      <div v-if="isExpanded" class="bar__logo">
        <img alt="Simulatica logo" src="../assets/logo.svg" />
      </div>
    </div>

    <div class="bar__menu is_one_third">
      <b-field>
        <b-button :expanded="isExpanded" type="is-primary" icon-left="wrench" @click="push(`config`)">
          <div v-if="isExpanded" class="nav_button">
            Main config
          </div>
        </b-button>
      </b-field>
      <b-field>
        <b-button :expanded="isExpanded" type="is-primary" icon-left="atom-variant" @click="push(`particles`)">
          <div v-if="isExpanded" class="nav_button">
            Particles
          </div>
        </b-button>
      </b-field>
      <b-field>
        <b-button :expanded="isExpanded" type="is-primary" icon-left="resistor-nodes" @click="push(`editor`)">
          <div v-if="isExpanded" class="nav_button">
            Node editor
          </div>
        </b-button>
      </b-field>
      <b-field>
        <b-button :expanded="isExpanded" type="is-primary" icon-left="list-status" @click="push(`examples`)">
          <div v-if="isExpanded" class="nav_button">
            Examples
          </div>
        </b-button>
      </b-field>
      <b-field>
        <b-button :expanded="isExpanded" type="is-primary"  icon-left="information" @click="push(`about`)">
          <div v-if="isExpanded" class="nav_button">
            About
          </div>
        </b-button>
      </b-field>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {
  @Prop() private msg!: string;

  isExpanded = true;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  home() {
    this.$router.push(`/`);
  }

  push(path: string) {
    this.$router.push(`/${path}`);
  }
}
</script>

<style scoped>
.bar {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  padding: 1rem;
  background-color: #1e1e1e;
  height: 100vh;
  text-align: center;
}

.nav_button {
  text-align: left;
  width: 9rem;
  margin-left: .5rem;
}

.is_one_third {
  height: 33%;
}

.expanded {
  width: 16.5rem;
}

.bar__header {
  display: flex;
  width: 100%;
  justify-content: end;
}

.bar__logo {
  margin-top: 1.5rem;
}

.bar__menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
