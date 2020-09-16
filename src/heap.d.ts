declare module "heap" {
  function heappush(array: any[], item: any, cmp?: any): any;
  function heappop(array: any[], cmp?: any): any;
  function heapreplace(array: any[], item: any, cmp?: any): any;
  function heappushpop(array: any[], item: any, cmp?: any): any;
  function heapify(array: any[], cmp?: any): any[];
  function updateItem(array: any[], item: any, cmp?: any): any;
  function nlargest(array: any[], n: any, cmp?: any): any[];
  function nsmallest(array: any[], n: number, cmp?: any): any[];
  class Heap {
    cmp: any;
    private nodes;
    static push: typeof heappush;
    static pop: typeof heappop;
    static replace: typeof heapreplace;
    static pushpop: typeof heappushpop;
    static heapify: typeof heapify;
    static updateItem: typeof updateItem;
    static nlargest: typeof nlargest;
    static nsmallest: typeof nsmallest;
    constructor(cmp?);
    push(x: any): any;
    pop(): any;
    peek(): any;
    contains(x: any): boolean;
    replace(x: any): any;
    pushpop(x: any): any;
    heapify(): any[];
    updateItem(x: any): any;
    clear(): never[];
    empty(): boolean;
    size(): number;
    clone(): Heap;
    toArray(): any[];
  }
  interface Heap {
    insert: typeof Heap.prototype.push;
    top: typeof Heap.prototype.peek;
    front: typeof Heap.prototype.peek;
    has: typeof Heap.prototype.contains;
    copy: typeof Heap.prototype.clone;
  }
  export = Heap;
}
