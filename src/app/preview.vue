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
	<div class="editor" v-html="html"></div>
</template>

<style scoped lang="scss">
.editor {
	padding: 8px;
}
</style>

<style lang="scss">
a {
	color: var(--color-primary-100);
	font-weight: bold;
}
</style>