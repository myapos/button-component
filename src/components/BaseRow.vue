<template>
  <section class="flex flex-wrap md:self-stretch items-center gap-5">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: String
})
</script>
