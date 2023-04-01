<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import MarkdownIt from "markdown-it"

const md = new MarkdownIt();

const markdownInput = ref("")
const markdown = computed(() => {
	return md.render(markdownInput.value)
})
</script>

<template>
	<textarea v-model="markdownInput" />

	<div v-html="markdown"></div>
</template>
