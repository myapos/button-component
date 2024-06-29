<template>
  <header>
    <div class="wrapper">
      <ButtonComponent text="Button CTA" @[EVENTS.BUTTON_CLICKED]="onButtonClick" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { EVENTS } from './components/constants'
import ButtonComponent from './components/ButtonComponent.vue'

const onButtonClick = () => {
  console.log('button clicked')
}
</script>

<style scoped></style>
