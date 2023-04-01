export interface IDataFolder {
  readDataFolder: () => Promise<void>;
  readFile: (path: string) => Buffer;
  writeFile: (path: string, content: string) => void;
}

declare global {
  interface Window {
    dataFolder: IDataFolder;
  }
}
