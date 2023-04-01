<script setup>
import { ref, watch } from 'vue';

import files from "./files.vue"
import editor from "./editor.vue"
import preview from "./preview.vue"

const markdownInput = ref("")

</script>

<template>
	<files />
	<editor @change="(change) => markdownInput = change" />
	<preview :markdown-string="markdownInput" />
</template>

<style lang="scss"></style>