import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonComponent from '../ButtonComponent.vue'
import ButtonIcon from '../ButtonIcon.vue'
import { VARIANTS, SIZES, ICON_PLACEMENT } from '../constants'
import { TemplateButtonComponent } from './constants'
import { BtnText, basicComponentStoryMeta } from './constants'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ButtonComponent> = {
  ...basicComponentStoryMeta,
  title: 'UIKIT/LinkGray'
} satisfies Meta<typeof ButtonComponent>

export default meta
type Story = StoryObj<typeof ButtonComponent>

export const LinkGrayMedium: Story = {
  args: {
    variant: VARIANTS.LINK_GRAY,
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

export const LinkGrayMediumDisabled: Story = {
  args: {
    variant: VARIANTS.LINK_GRAY,
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

export const LinkGrayMediumIconRight: Story = {
  args: {
    variant: VARIANTS.LINK_GRAY,
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

export const LinkGrayMediumIconBoth: Story = {
  args: {
    variant: VARIANTS.LINK_GRAY,
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

export const LinkGrayLarge: Story = {
  args: {
    variant: VARIANTS.LINK_GRAY,
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

export const LinkGrayExtraLarge: Story = {
  args: {
    variant: VARIANTS.LINK_GRAY,
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

export const LinkGrayTwoExtraLarge: Story = {
  args: {
    variant: VARIANTS.LINK_GRAY,
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
