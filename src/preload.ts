// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge } from "electron";
import { readdirSync, statSync } from "fs";
import { TreeNode } from "./app/types/tree-nodes";

function buildTree(rootPath: string) {
  const root = new TreeNode(rootPath);

  const stack = [root];

  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode) {
      currentNode.isDirectory = statSync(currentNode.path).isDirectory();
      const children = readdirSync(currentNode.path);

      for (const child of children) {
        const childPath = `${currentNode.path}/${child}`;
        const childNode = new TreeNode(childPath);
        currentNode.children.push(childNode);

        if (statSync(childNode.path).isDirectory()) {
          stack.push(childNode);
        }
      }
    }
  }

  return root;
}

contextBridge.exposeInMainWorld("dataFolder", {
  readDataFolder: () => buildTree("./data"),
});
