<script setup lang="ts">
import { ref, watch } from 'vue';

import Files from "./files.vue"
import Editor from "./editor.vue"
import Preview from "./preview.vue"

const markdownInput = ref("")
</script>

<template>
	<Files />
	<Editor @change="(change) => markdownInput = change" />
	<Preview :markdown-string="markdownInput" />
</template>

<style lang="scss"></style>