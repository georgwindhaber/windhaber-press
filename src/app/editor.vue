<script setup lang="ts">
import { useGeneralStore } from './stores/general';

const generalStore = useGeneralStore()

</script>

<template>
	<textarea class="editor" v-model="generalStore.markdownInput" />
</template>

<style scoped lang="scss">
.editor {
	border: none;
	outline: none;
	resize: none;
	padding: 8px;
	resize: horizontal;

	background-color: var(--color-surface-200);
	border-right: var(--color-surface-300) 1px solid;
	border-left: var(--color-surface-300) 1px solid;
}
</style>