<template lang="pug">
  .view
    baklava-editor.editor(:plugin="viewPlugin")

</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import { Editor } from "@baklavajs/core";
import { ViewPlugin } from "@baklavajs/plugin-renderer-vue";
import { OptionPlugin } from "@baklavajs/plugin-options-vue";
import { Engine } from "@baklavajs/plugin-engine";
import { StartNode } from "@/components/nodes/StartNode";
import { DisplayNode } from "@/components/nodes/DisplayNode";

@Component()
export default class NodeViewer extends Vue {
  editor = new Editor();
  viewPlugin = new ViewPlugin();
  engine = new Engine(true);

  selected = null;

  created() {
    // Register the plugins
    // The view plugin is used for rendering the nodes
    this.editor.use(this.viewPlugin);
    // The option plugin provides some default option UI elements
    this.editor.use(new OptionPlugin());
    // The engine plugin calculates the nodes in the graph in the
    // correct order using the "calculate" methods of the nodes
    this.editor.use(this.engine);

    // Show a minimap in the top right corner
    this.viewPlugin.enableMinimap = true;

    // register the nodes we have defined, so they can be
    // added by the user as well as saved & loaded.
    this.editor.registerNodeType("StartNode", StartNode);
    this.editor.registerNodeType("DisplayNode", DisplayNode);

    // add some nodes so the screen is not empty on startup
    const node1 = this.addNodeWithCoordinates(StartNode, 100, 140);
    const node2 = this.addNodeWithCoordinates(DisplayNode, 400, 140);
    this.editor.addConnection(
      node1.getInterface("Result"),
      node2.getInterface("Value")
    );
    this.engine.calculate();
  }

  addNodeWithCoordinates(nodeType, x, y) {
    const n = new nodeType();
    this.editor.addNode(n);
    n.position.x = x;
    n.position.y = y;
    return n;
  }
}
</script>

<style scoped>
.view {
  display: flex;
}

.editor {
  width: 100%;
  height: 100%;
}
</style>
