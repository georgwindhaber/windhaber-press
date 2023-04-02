import { defineStore } from "pinia";

const useGeneralStore = defineStore("general", {
  state: () => ({
    activeFile: "",
    markdownInput: "",
    directories: window.dataFolder.readDataFolder(),
  }),
  actions: {
    openFile(path: string) {
      const file = window.dataFolder.readFile(path);
      this.markdownInput = file.toString();
      this.activeFile = path;
    },
    saveFile() {
      window.dataFolder.writeFile(this.activeFile, this.markdownInput);
    },
    updateDirectories() {
      this.directories = window.dataFolder.readDataFolder();
    },
    addFile(path: string) {
      window.dataFolder.addFile(path, "");
      this.updateDirectories();
    },
    addDirectory(path: string) {
      window.dataFolder.addDirectory(path);
      this.updateDirectories();
    },
    deleteItem(path: string) {
      window.dataFolder.deleteItem(path);
      this.updateDirectories();
    },
  },
});

export { useGeneralStore };
