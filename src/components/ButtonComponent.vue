<template>
  <button @click="$emit(EVENTS.BUTTON_CLICKED)">{{ text }}</button>
</template>

<script setup lang="ts">
import { EVENTS } from './constants'

defineEmits([EVENTS.BUTTON_CLICKED])

defineProps<{
  text: String
}>()
</script>

<style scoped></style>
