import type { Meta } from '@storybook/vue3'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { VARIANTS, SIZES, ICON_PLACEMENT, EVENTS } from '../constants'

export const TemplateButtonComponent = `
<ButtonComponent v-bind="args" :key="Math.random()">
  <template #icon>
    <ButtonIcon />
    </template>
</ButtonComponent>`

export const BtnText = 'Button CTA'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export const basicComponentStoryMeta: Meta<typeof ButtonComponent> = {
  title: 'UIKIT/ButtonComponent',
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        VARIANTS.PRIMARY,
        VARIANTS.SECONDARY,
        VARIANTS.TERTIARY,
        VARIANTS.LINK_GRAY,
        VARIANTS.LINK_COLOR,
        VARIANTS.DESTRUCTIVE
      ]
    },
    size: {
      control: 'select',
      options: [SIZES.MEDIUM, SIZES.LARGE, SIZES.EXTRA_LARGE, SIZES.TWO_EXTRA_LARGE]
    },
    iconOnly: {
      control: 'boolean'
    },
    placement: {
      control: 'select',
      options: [ICON_PLACEMENT.LEFT, ICON_PLACEMENT.RIGHT, ICON_PLACEMENT.BOTH]
    },
    disabled: {
      control: 'boolean'
    },
    text: {
      control: 'text'
    },
    [EVENTS.BUTTON_CLICKED as string]: {
      action: EVENTS.BUTTON_CLICKED
    }
  }
} satisfies Meta<typeof ButtonComponent>
