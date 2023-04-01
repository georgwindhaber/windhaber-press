import { defineStore } from "pinia";

const useGeneralStore = defineStore("general", {
  state: () => ({ activeFile: "", markdownInput: "" }),
  actions: {
    openFile(path: string) {
      const file = window.dataFolder.readFile(path);
      this.markdownInput = file.toString();
      this.activeFile = path;
    },
    saveFile() {
      window.dataFolder.writeFile(this.activeFile, this.markdownInput);
    },
  },
});

export { useGeneralStore };
