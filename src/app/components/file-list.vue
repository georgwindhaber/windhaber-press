<script setup lang="ts">
import { defineProps } from "vue";
import { TreeNode } from "../types/tree-nodes"

const props = defineProps({
	fileTree: TreeNode
})
</script>


<template>
	<div v-if="props.fileTree.isDirectory">
		<FileList v-for="child of props.fileTree.children" :file-tree="child" />
	</div>
	<div v-else>
		{{ props.fileTree.path }}
	</div>
</template>