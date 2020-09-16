declare module "pathfinding" {
  import Heap from "heap";
  class Grid {
    private width: number;
    private height: number;
    private nodes: Node[];
    constructor(width: number, height: number, matrix?: number[][]);
    _buildNodes(width: number, height: number, matrix: any[]): void;
    getNodeAt(x: number, y: number): Node;
    isWalkableAt(x: number, y: number): boolean;
    isInside(x: number, y: number): boolean;
    setWalkableAt(x: number, y: number, walkable: any): void;
    getNeighbors(node: { x: any; y: any }, diagonalMovement: number): Node[];
    clone(): Grid;
  }
  class Node {
    private x: number;
    private y: number;
    private walkable: boolean;
    constructor(x: number, y: number, walkable?: boolean);
  }

  type FinderOption = {
    allowDiagonal?: boolean;
    dontCrossCorners?: boolean;
    diagonalMovement?: boolean;
    heuristic?: (dx: number, dy: number) => number;
  };

  class AStarFinder {
    constructor(opt: FinderOption);
    findPath(
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      grid: Grid
    ): number[][];
  }
  class BestFirstFinder {
    constructor(opt: FinderOption);
    findPath(
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      grid: Grid
    ): number[][];
  }
  class BreadthFirstFinder {
    constructor(opt: FinderOption);
    findPath(
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      grid: Grid
    ): number[][];
  }
  class DijkstraFinder {
    constructor(opt: FinderOption);
    findPath(
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      grid: Grid
    ): number[][];
  }
  class BiAStarFinder {
    constructor(opt: FinderOption);
    findPath(
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      grid: Grid
    ): number[][];
  }
  class BiBestFirstFinder {
    constructor(opt: FinderOption);
    findPath(
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      grid: Grid
    ): number[][];
  }
  class BiBreadthFirstFinder {
    constructor(opt: FinderOption);
    findPath(
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      grid: Grid
    ): number[][];
  }
  class BiDijkstraFinder {
    constructor(opt: FinderOption);
    findPath(
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      grid: Grid
    ): number[][];
  }
  class IDAStarFinder {
    constructor(opt: FinderOption);
    findPath(
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      grid: Grid
    ): number[][];
  }
  class JumpPointFinder {
    constructor(opt: FinderOption);
    findPath(
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      grid: Grid
    ): number[][];
  }
  class ThetaStarFinder {
    constructor(opt: FinderOption);
    findPath(
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      grid: Grid
    ): number[][];
  }

  const output: {
    Heap: typeof Heap;
    Node: typeof Node;
    Grid: typeof Grid;
    Util: {
      backtrace: (node: Node) => number[][];
      biBacktrace: (nodeA: Node, nodeB: Node) => number[][];
      pathLength: (path: number[][]) => number;
      interpolate: (
        x0: number,
        y0: number,
        x1: number,
        y1: number
      ) => number[][];
      expandPath: (path: number[][]) => number[][];
      smoothenPath: (grid: Grid, path: number[][]) => any[][];
      compressPath: (path: number[][]) => number[][];
    };
    DiagonalMovement: {
      Always: number;
      Never: number;
      IfAtMostOneObstacle: number;
      OnlyWhenNoObstacles: number;
    };
    Heuristic: {
      manhattan: (dx: number, dy: number) => number;
      euclidean: (dx: number, dy: number) => number;
      octile: (dx: number, dy: number) => number;
      chebyshev: (dx: number, dy: number) => number;
    };
    AStarFinder: typeof AStarFinder;
    BestFirstFinder: typeof BestFirstFinder;
    BreadthFirstFinder: typeof BreadthFirstFinder;
    DijkstraFinder: typeof DijkstraFinder;
    BiAStarFinder: typeof BiAStarFinder;
    BiBestFirstFinder: typeof BiBestFirstFinder;
    BiBreadthFirstFinder: typeof BiBreadthFirstFinder;
    BiDijkstraFinder: typeof BiDijkstraFinder;
    IDAStarFinder: typeof IDAStarFinder;
    JumpPointFinder: typeof JumpPointFinder;
    ThetaStarFinder: typeof ThetaStarFinder;
  };
  export = output;
}
