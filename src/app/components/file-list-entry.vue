<script setup lang="ts">
import { defineProps } from "vue";
import { TreeNode } from "../types/tree-nodes"

const props = defineProps({
	name: String,
	isDirectory: Boolean
})
</script>


<template>
	{{ props.name }}
</template>