import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonComponent from '../ButtonComponent.vue'
import ButtonIcon from '../ButtonIcon.vue'
import { VARIANTS, SIZES, ICON_PLACEMENT } from '../constants'
import { TemplateButtonComponent } from './constants'
import { BtnText, basicComponentStoryMeta } from './constants'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ButtonComponent> = {
  ...basicComponentStoryMeta,
  title: 'UIKIT/Destructive'
} satisfies Meta<typeof ButtonComponent>

export default meta

type Story = StoryObj<typeof ButtonComponent>

export const DestructiveMedium: Story = {
  args: {
    variant: VARIANTS.DESTRUCTIVE,
    size: SIZES.MEDIUM,
    iconOnly: false,
    placement: ICON_PLACEMENT.LEFT,
    disabled: false,
    text: BtnText
  },
  render: (args: any) => ({
    components: { ButtonComponent, ButtonIcon },
    setup() {
      return { args }
    },
    template: TemplateButtonComponent
  })
}

export const DestructiveMediumDisabled: Story = {
  args: {
    variant: VARIANTS.DESTRUCTIVE,
    size: SIZES.MEDIUM,
    iconOnly: false,
    placement: ICON_PLACEMENT.LEFT,
    disabled: true,
    text: BtnText
  },
  render: (args: any) => ({
    components: { ButtonComponent, ButtonIcon },
    setup() {
      return { args }
    },
    template: TemplateButtonComponent
  })
}

export const DestructiveMediumIconRight: Story = {
  args: {
    variant: VARIANTS.DESTRUCTIVE,
    size: SIZES.MEDIUM,
    iconOnly: false,
    placement: ICON_PLACEMENT.RIGHT,
    disabled: false,
    text: BtnText
  },
  render: (args: any) => ({
    components: { ButtonComponent, ButtonIcon },
    setup() {
      return { args }
    },
    template: TemplateButtonComponent
  })
}

export const DestructiveMediumIconBoth: Story = {
  args: {
    variant: VARIANTS.DESTRUCTIVE,
    size: SIZES.MEDIUM,
    iconOnly: false,
    placement: ICON_PLACEMENT.BOTH,
    disabled: false,
    text: BtnText
  },
  render: (args: any) => ({
    components: { ButtonComponent, ButtonIcon },
    setup() {
      return { args }
    },
    template: TemplateButtonComponent
  })
}

export const DestructiveLarge: Story = {
  args: {
    variant: VARIANTS.DESTRUCTIVE,
    size: SIZES.LARGE,
    iconOnly: false,
    placement: ICON_PLACEMENT.LEFT,
    disabled: false,
    text: BtnText
  },
  render: (args: any) => ({
    components: { ButtonComponent, ButtonIcon },
    setup() {
      return { args }
    },
    template: TemplateButtonComponent
  })
}

export const DestructiveExtraLarge: Story = {
  args: {
    variant: VARIANTS.DESTRUCTIVE,
    size: SIZES.EXTRA_LARGE,
    iconOnly: false,
    placement: ICON_PLACEMENT.LEFT,
    disabled: false,
    text: BtnText
  },
  render: (args: any) => ({
    components: { ButtonComponent, ButtonIcon },
    setup() {
      return { args }
    },
    template: TemplateButtonComponent
  })
}

export const DestructiveTwoExtraLarge: Story = {
  args: {
    variant: VARIANTS.DESTRUCTIVE,
    size: SIZES.TWO_EXTRA_LARGE,
    iconOnly: false,
    placement: ICON_PLACEMENT.LEFT,
    disabled: false,
    text: BtnText
  },
  render: (args: any) => ({
    components: { ButtonComponent, ButtonIcon },
    setup() {
      return { args }
    },
    template: TemplateButtonComponent
  })
}
