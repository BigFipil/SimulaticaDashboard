export type Settings = {
  IterationCount: number;
  SimulationStepTime: number;
  DataSaveStepTime: number;
  FullRamMode: boolean;
  SimulationType: string;
  SimulationBoxSize: Vector3D;
  OutputPath: string;
  OutputAnimationFramerate: number;
  Threads: number;
};

export type Vector3D = {
  X: number;
  Y: number;
  Z: number;
};

export function emptySettings(): Settings {
  return {
    IterationCount: 100,
    SimulationStepTime: 1,
    DataSaveStepTime: 10,
    FullRamMode: true,
    SimulationType: `3D`,
    SimulationBoxSize: {
      X: 10,
      Y: 10,
      Z: 10,
    },
    OutputPath: ``,
    OutputAnimationFramerate: 30,
    Threads: 4,
  };
}
