<script setup lang="ts">
import { ref } from 'vue';
import FileList from './file-list.vue';
import { TreeNode } from '../types/tree-nodes';

const dirs: TreeNode = ref(window.dataFolder.readDataFolder())
</script>

<template>
	<div>
		<FileList :file-tree="dirs" />
	</div>
</template>