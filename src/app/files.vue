<script setup lang="ts">
import FileTree from "./components/file-tree.vue"

</script>

<template>
	<div class="files">
		<FileTree />
	</div>
</template>

<style lang="scss">
.files {
	min-width: 200px;
	background-color: var(--color-surface-100);
}
</style>