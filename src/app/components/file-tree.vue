<script setup lang="ts">
import { computed, ref } from "vue";
import type { TreeNode } from "../types/tree-nodes"
import { useGeneralStore } from "../stores/general"

const props = defineProps<{
	fileTree: TreeNode
	level?: number
}>()

const generalStore = useGeneralStore()

const isDirectoryOpen = ref(props.fileTree.isDirectory)

const absoluteLevel = computed(() => props.level | 0)
const paddingLeft = `padding-left: ${absoluteLevel.value * 0.75}rem`
const rotateDirectoryChevron = computed(() => isDirectoryOpen.value ? "transform: rotate(90deg)" : "")

const getName = (path: string) => {
	const folders = path.split("/")
	return folders[folders.length - 1]
}

const handleClick = () => {
	if (props.fileTree.isDirectory) {
		isDirectoryOpen.value = !isDirectoryOpen.value
	} else {
		generalStore.openFile(props.fileTree.path)
	}
}

const addFile = () => {
	generalStore.addFile(props.fileTree.path + "/new-file")
}

const addDirectory = () => {
	generalStore.addDirectory(props.fileTree.path + "/new-folder")
	console.log("dir")
}

</script>


<template>
	<button class="file" :style="paddingLeft" @click="handleClick">
		<span class="file-name">
			<span v-if="props.fileTree.isDirectory">
				<v-icon name="ri-arrow-right-s-line" scale="1" :style="rotateDirectoryChevron"></v-icon>
			</span>
			{{ getName(props.fileTree.path) }}
		</span>
		<div class="add-buttons" v-if="props.fileTree.isDirectory">
			<button class="add-button" @click.stop="addFile">
				<v-icon name="ri-file-add-line"></v-icon>
			</button>
			<button class="add-button" @click.stop="addDirectory">
				<v-icon name="ri-folder-add-line"></v-icon>
			</button>
		</div>
	</button>
	<template v-if="props.fileTree.isDirectory && isDirectoryOpen">
		<FileTree v-for="child of props.fileTree.children" :file-tree="child" :level="absoluteLevel + 1" />
	</template>
</template>

<style scoped lang="scss">
.file {
	display: flex;
	justify-content: space-between;
	width: 100%;
	border: none;
	padding: 0;
	text-align: left;
	padding: 6px 4px 6px 0.75rem;
	font-size: 16px;

	&:hover {
		background-color: var(--color-surface-200);

		.add-buttons,
		.file-name {
			background-color: var(--color-surface-200);
		}
	}
}

$add-button-size: 20px;

.add-button {
	height: $add-button-size;
	width: $add-button-size;
	border: none;
	border-radius: 8px;
	margin-right: 4px;
	padding: 0;
	// background-color: var(--color-surface-200);

	&:hover {
		background-color: var(--color-surface-300);
	}
}
</style>