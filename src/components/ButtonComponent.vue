<template>
  <button
    @click="$emit(EVENTS.BUTTON_CLICKED)"
    :class="classes"
    :aria-label="text"
    :disabled="disabled"
  >
    <slot name="icon"></slot>

    <template v-if="showText">
      {{ text }}
    </template>

    <template v-if="shouldShowBothIcons">
      <slot name="icon"></slot>
    </template>
  </button>
</template>

<script setup lang="ts">
import { withDefaults, defineEmits, defineProps } from 'vue'
import { EVENTS, VARIANTS, SIZES, ICON_PLACEMENT } from './constants'
import { type ButtonProps } from './types'

defineEmits([EVENTS.BUTTON_CLICKED])

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: VARIANTS.PRIMARY, // default value for variant
  size: SIZES.MEDIUM, // default value for size
  iconOnly: false,
  placement: ICON_PLACEMENT.LEFT,
  disabled: false
})

const baseClasses = 'flex justify-center items-center rounded disabled:text-neutral-400'

const variantClasses = {
  [VARIANTS.PRIMARY]:
    'bg-indigo-700 font-medium text-white hover:bg-indigo-800 disabled:bg-neutral-100 focus:ring focus:ring-violet-100',
  [VARIANTS.SECONDARY]:
    'bg-white border-[0.5px] border-solid border-[#e6e6e6] font-medium text-neutral-900 hover:bg-neutral-50 disabled:bg-neutral-100  focus:ring focus:ring-violet-100',
  [VARIANTS.TERTIARY]:
    'font-medium text-indigo-700 hover:bg-neutral-50 disabled:bg-transparent focus:ring focus:ring-violet-100',
  [VARIANTS.LINK_COLOR]: 'font-medium text-indigo-700 focus:ring focus:ring-violet-100',
  [VARIANTS.LINK_GRAY]: 'font-medium text-neutral-600 focus:ring focus:ring-violet-100',
  [VARIANTS.DESTRUCTIVE]:
    'bg-red-600 hover:bg-red-700 disabled:bg-transparent text-white focus:ring focus:ring-red-100'
}

const placementClasses = {
  [ICON_PLACEMENT.LEFT]: '',
  [ICON_PLACEMENT.RIGHT]: 'flex-row-reverse',
  [ICON_PLACEMENT.BOTH]: ''
}

const isLinkIcon = props.variant === VARIANTS.LINK_COLOR || props.variant === VARIANTS.LINK_GRAY

const sizeClasses = {
  [SIZES.MEDIUM]: isLinkIcon ? 'gap-1 px-0.5 text-sm' : 'text-sm gap-1 px-3.5 py-2.5',
  [SIZES.LARGE]: isLinkIcon ? 'gap-1.5 px-0.5 text-base' : 'text-base gap-1.5 px-4 py-2.5',
  [SIZES.EXTRA_LARGE]: isLinkIcon ? 'gap-1.5 px-0.5 text-base' : 'text-base gap-1.5 px-5 py-3',
  [SIZES.TWO_EXTRA_LARGE]: isLinkIcon ? 'gap-2.5 px-0.5 text-lg' : 'text-lg gap-2.5 px-6 py-4'
}

const showText = !props.iconOnly
const shouldShowBothIcons = ICON_PLACEMENT.BOTH === props.placement
const shouldAddBaseClasses = true

const classes = {
  [baseClasses]: shouldAddBaseClasses,
  [variantClasses[props.variant]]: true,
  [placementClasses[props.placement]]: true,
  [sizeClasses[props.size]]: true
}
</script>

<style scoped></style>
