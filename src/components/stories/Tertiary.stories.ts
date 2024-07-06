import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonComponent from '../ButtonComponent.vue'
import ButtonIcon from '../ButtonIcon.vue'
import { VARIANTS, SIZES, ICON_PLACEMENT } from '../constants'
import { TemplateButtonComponent } from './constants'
import { BtnText, basicComponentStoryMeta } from './constants'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ButtonComponent> = {
  ...basicComponentStoryMeta,
  title: 'UIKIT/Tertiary'
} satisfies Meta<typeof ButtonComponent>

export default meta
type Story = StoryObj<typeof ButtonComponent>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const TertiaryMedium: Story = {
  args: {
    variant: VARIANTS.TERTIARY,
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

export const TertiaryMediumDisabled: Story = {
  args: {
    variant: VARIANTS.TERTIARY,
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

export const TertiaryMediumIconRight: Story = {
  args: {
    variant: VARIANTS.TERTIARY,
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

export const TertiaryMediumIconBoth: Story = {
  args: {
    variant: VARIANTS.TERTIARY,
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

export const TertiaryLarge: Story = {
  args: {
    variant: VARIANTS.TERTIARY,
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

export const TertiaryExtraLarge: Story = {
  args: {
    variant: VARIANTS.TERTIARY,
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

export const TertiaryTwoExtraLarge: Story = {
  args: {
    variant: VARIANTS.TERTIARY,
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
