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
	<textarea @input="handleInput" />
</template>