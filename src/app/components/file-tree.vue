<script setup lang="ts">
import { computed, ref } from "vue";
import type { TreeNode } from "../types/tree-nodes"

const props = defineProps<{
	fileTree: TreeNode
	level?: number
}>()

const emit = defineEmits<{ (e: 'fileSelect', file: string): void }>()

const isDirectoryOpen = ref(props.fileTree.isDirectory)

const absoluteLevel = computed(() => props.level | 0)
const paddingLeft = `padding-left: ${absoluteLevel.value * 0.75}rem`

const getName = (path: string) => {
	const folders = path.split("/")
	return folders[folders.length - 1]
}

const handleClick = () => {
	if (props.fileTree.isDirectory) {
		isDirectoryOpen.value = !isDirectoryOpen.value
	} else {
		emit("fileSelect", props.fileTree.path)
		console.log("emitted", props.fileTree.path)
	}
}
</script>


<template>
	<button class="file" :style="paddingLeft" @click="handleClick">
		{{ getName(props.fileTree.path) }}
	</button>
	<template v-if="props.fileTree.isDirectory && isDirectoryOpen">
		<FileTree v-for="child of props.fileTree.children" :file-tree="child" :level="absoluteLevel + 1" />
	</template>
</template>

<style scoped lang="scss">
.file {
	display: block;
	width: 100%;
	border: none;
	padding: 0;
	text-align: left;
	padding: 6px 4px 6px 0.75rem;
	font-size: 16px;

	cursor: pointer;

	&:hover {
		background-color: var(--color-surface-200);
	}
}
</style>