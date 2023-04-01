<script setup lang="ts">
import { computed, defineProps } from "vue";
import type { TreeNode } from "../types/tree-nodes"

const getName = (path: string) => {
	const folders = path.split("/")
	return folders[folders.length - 1]
}

const props = defineProps<{
	fileTree: TreeNode
	level?: number
}>()

const absoluteLevel = computed(() => props.level | 0)
const paddingLeft = `padding-left: ${absoluteLevel.value * 0.75}rem`
</script>


<template>
	<button class="file" :style="paddingLeft">
		{{ getName(props.fileTree.path) }}
	</button>
	<template v-if="props.fileTree.isDirectory">
		<FileList v-for="child of props.fileTree.children" :file-tree="child" :level="absoluteLevel + 1" />
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