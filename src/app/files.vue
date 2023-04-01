<script setup lang="ts">
import { ref } from "vue";
import FileTree from "./components/file-tree.vue"
import { TreeNode } from "./types/tree-nodes";

const dirs: TreeNode = ref(window.dataFolder.readDataFolder())

</script>

<template>
	<div class="files">
		<FileTree v-for="folders of dirs.children" :file-tree="folders" />
	</div>
</template>

<style lang="scss">
.files {
	min-width: 200px;
	background-color: var(--color-surface-100);
}
</style>