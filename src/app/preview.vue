<script setup>
import MarkdownIt from "markdown-it"
import { computed } from "vue";
const md = new MarkdownIt();

const props = defineProps({
	markdownString: String
})

const html = computed(() => {
	return md.render(props.markdownString)
})

</script>

<template>
	<div v-html="html"></div>
</template>