export interface IDataFolder {
  readDataFolder: () => Promise<void>;
}

declare global {
  interface Window {
    dataFolder: IDataFolder;
  }
}
