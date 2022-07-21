import { Node } from "@baklavajs/core";

export class StartNode extends Node {
  constructor() {
    super();
    this.type = "StartNode";
    this.name = "Simulation Run";
    this.addInputInterface("Reapet", "NumberOption", 1);
    this.addOutputInterface("Result");
  }

  calculate() {
    const n1 = this.getInterface("Number 1").value;
    this.getInterface("Result").value = n1;
  }
}
