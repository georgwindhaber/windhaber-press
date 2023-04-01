type TreeNode = {
  path: string;
  children: Array<TreeNode>;
  isDirectory: boolean;
};

const createTreeNode = (path: string): TreeNode => ({
  path,
  children: [],
  isDirectory: false,
});

export { TreeNode, createTreeNode };
