class TreeNode {
  public path: string;
  public children: Array<TreeNode>;
  public isDirectory: boolean;

  constructor(path: string) {
    this.path = path;
    this.children = [];
  }
}

export { TreeNode };
