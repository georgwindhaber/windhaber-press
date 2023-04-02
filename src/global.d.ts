import { TreeNode } from "./app/types/tree-nodes";

export interface IDataFolder {
  readDataFolder: () => TreeNode;
  readFile: (path: string) => Buffer;
  writeFile: (path: string, content: string) => void;
  addFile: (path: string, content: string) => void;
  addDirectory: (path: string) => void;
}

declare global {
  interface Window {
    dataFolder: IDataFolder;
  }
}
