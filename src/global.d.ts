export interface IDataFolder {
  readDataFolder: () => Promise<void>;
  readFile: (path: string) => Buffer;
}

declare global {
  interface Window {
    dataFolder: IDataFolder;
  }
}
