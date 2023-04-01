<script setup>
import { ref } from 'vue';

import files from "./files.vue"
import editor from "./editor.vue"
import preview from "./preview.vue"

const markdownInput = ref("")
</script>

<template>
	<files />
	<editor v-model="markdownInput" />
	<preview :markdown-string="markdownInput" />
</template>
