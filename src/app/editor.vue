<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(["change"])

const markdownText = ref("")

const handleInput = (event: Event) => {
	markdownText.value = (event.target as HTMLTextAreaElement).value
	emit("change", markdownText.value)
}

</script>

<template>
	<textarea class="editor" @input="handleInput" re />
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