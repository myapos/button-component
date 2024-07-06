import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonComponent from '../ButtonComponent.vue'
import ButtonIcon from '../ButtonIcon.vue'
import { VARIANTS, SIZES, ICON_PLACEMENT } from '../constants'
import { TemplateButtonComponent } from './constants'
import { BtnText, basicComponentStoryMeta } from './constants'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ButtonComponent> = {
  ...basicComponentStoryMeta,
  title: 'UIKIT/LinkColor'
} satisfies Meta<typeof ButtonComponent>

export default meta
type Story = StoryObj<typeof ButtonComponent>

export const LinkColorMedium: Story = {
  args: {
    variant: VARIANTS.LINK_COLOR,
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

export const LinkColorMediumDisabled: Story = {
  args: {
    variant: VARIANTS.LINK_COLOR,
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

export const LinkColorMediumIconRight: Story = {
  args: {
    variant: VARIANTS.LINK_COLOR,
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

export const LinkColorMediumIconBoth: Story = {
  args: {
    variant: VARIANTS.LINK_COLOR,
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

export const LinkColorLarge: Story = {
  args: {
    variant: VARIANTS.LINK_COLOR,
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

export const LinkColorExtraLarge: Story = {
  args: {
    variant: VARIANTS.LINK_COLOR,
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

export const LinkColorTwoExtraLarge: Story = {
  args: {
    variant: VARIANTS.LINK_COLOR,
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
