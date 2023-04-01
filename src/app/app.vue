<script setup lang="ts">
import { ref } from 'vue';

import Files from "./files.vue"
import Editor from "./editor.vue"
import Preview from "./preview.vue"
import { useGeneralStore } from './stores/general';

const generalStore = useGeneralStore()

</script>

<template>
	<Files />
	<Editor />
	<Preview />
</template>

<style lang="scss"></style>