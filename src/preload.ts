// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge } from "electron";
import {
  appendFileSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "fs";
import { createTreeNode } from "./app/types/tree-nodes";

const buildTree = (rootPath: string) => {
  const root = createTreeNode(rootPath);

  const stack = [root];

  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode) {
      currentNode.isDirectory = statSync(currentNode.path).isDirectory();
      const children = readdirSync(currentNode.path);

      for (const child of children) {
        const childPath = `${currentNode.path}/${child}`;
        const childNode = createTreeNode(childPath);
        currentNode.children.push(childNode);

        if (statSync(childNode.path).isDirectory()) {
          stack.push(childNode);
        }
      }
    }
  }

  return root;
};

contextBridge.exposeInMainWorld("dataFolder", {
  readDataFolder: () => buildTree("./data"),
  readFile: (path: string) => readFileSync(path, "utf8"),
  writeFile: (path: string, content: string) => writeFileSync(path, content),
  addFile: (path: string) => appendFileSync(path + ".md", ""),
  addDirectory: (path: string) => mkdirSync(path),
});
