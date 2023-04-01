<script setup>
import MarkdownIt from "markdown-it"
const md = new MarkdownIt();

const props = defineProps({
	markdownString: String
})
</script>

<template>
	<div v-html="md.render(markdownString)"></div>
</template>