import { NodeBuilder } from "@baklavajs/core";

export const DisplayNode = new NodeBuilder("DisplayNode")
  .setName("Display")
  .addInputInterface("Value")
  .onCalculate()
  .build();
