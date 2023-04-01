<script setup lang="ts">
import { ref } from "vue";
import FileTree from "./components/file-tree.vue"
import { TreeNode } from "./types/tree-nodes";
import { useGeneralStore } from "./stores/general";

const dirs: TreeNode = ref(window.dataFolder.readDataFolder())

const generalStore = useGeneralStore()

</script>

<template>
	<div class="files">
		<div>
			<FileTree v-for="folders of dirs.children" :key="folders.path" :file-tree="folders" />
		</div>
		<button class="save" @click="generalStore.saveFile">Save</button>
	</div>
</template>

<style scoped lang="scss">
.files {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-width: 200px;
	background-color: var(--color-surface-100);
}

.save {
	margin: 8px;
	padding: 8px;
	border-radius: 8px;
	background-color: var(--color-primary-100);
	font-size: larger;
	font-weight: bold;

	&:hover {
		background-color: var(--color-primary-200);
	}
}
</style>