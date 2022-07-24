<template lang="pug">
.view
  .editor
    .editor__nodes
      NodeViewer
    .editor__code
      .editor__code--monaco(id="monacoEditor")

  particle-bar(
    :particles="particles"
    @selectParticle="particleSwitch"
  )

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NodeViewer from "@/components/NodeViewer.vue";
import loader from "@monaco-editor/loader";
import { Particle } from "@/types";
import ParticleBar from "@/components/ParticleBar.vue";
import ResizeObserver from "resize-observer-polyfill";

@Component({
  components: {
    NodeViewer,
    ParticleBar,
  },
})
export default class EditorWohWoh extends Vue {
  async mounted() {
    const editorOptions = {
      language: `csharp`,
      minimap: { enabled: false },
      value: ``,
      scrollbar: {
        vertical: `auto`,
        horizontal: `auto`,
      },
      theme: `vs-dark`,
      automaticLayout: true,
      wordWrap: `on`,
    };
    new ResizeObserver(this.editorResized).observe(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById(`monacoEditor`)!
    );
    loader.init().then((monaco: any) => {
      this.monacoEditor = monaco.editor.create(
        document.getElementById(`monacoEditor`),
        editorOptions
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      this.monacoEditor.getModel().onDidChangeContent((_event: unknown) => {
        this.$store.commit(`updateParticle`, {
          particle: {
            ...this.particle,
            rawMethods: this.monacoEditor.getValue(),
          },
          index: this.selected,
        });
      });
    });
  }

  showCssEditor: boolean = false;
  monacoEditor: any;
  selected: number | null = null;

  editorResized() {
    this.monacoEditor.layout();
  }

  particleSwitch(index: number) {
    this.selected = index;
    this.monacoEditor.getModel().setValue(this.particle?.rawMethods);
  }

  get code() {
    return this.monacoEditor.getValue();
  }

  get particles() {
    return this.$store.state.particles;
  }

  get particle(): Particle | null {
    return this.selected !== null
      ? this.$store.state.particles[this.selected]
      : null;
  }
}
</script>

<style scoped>
.view {
  display: flex;
  height: calc(100vh - 4.5rem);
}

.editor {
  display: flex;
  width: 100%;
}

.editor__nodes {
  width: 50%;
}

.editor__code {
  width: 50%;
}

.editor__code--monaco {
  height: 100%;
}

.selected {
  background-color: #d3d3d3;
}

.add__button {
  display: flex;
  gap: 0.5rem;
}

.no__margin {
  margin-bottom: 0 !important;
}
</style>
