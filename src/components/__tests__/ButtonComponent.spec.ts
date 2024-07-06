import { describe, it, expect, vi, beforeEach } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import ButtonComponent from '../ButtonComponent.vue'
import ButtonIcon from '../ButtonIcon.vue'

import { EVENTS, VARIANTS, ICON_PLACEMENT } from '@/components/constants'

const clickEventHandler = vi.fn()
const buttonText = 'Button CTA'
const clickEvent = `on${EVENTS.BUTTON_CLICKED.charAt(0).toUpperCase() + EVENTS.BUTTON_CLICKED.slice(1)}`

const findAllIndices = (str: string, strPattern: string) =>
  [...str.matchAll(new RegExp(strPattern, 'gi'))].map((a) => a.index)
describe('ButtonComponent suite', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  describe('Primary Button', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          // Bind the event handler using the correct syntax
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.PRIMARY
        }
      })
    })
    it('should emit callback on click for primary button', async () => {
      expect(wrapper.find('button')).exist
      expect(wrapper.text()).toBe(buttonText)
      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty(EVENTS.BUTTON_CLICKED)
      expect(clickEventHandler).toBeCalledTimes(1)
    })

    it('should not emit callback on click for primary disabled button', async () => {
      const clickEventHandler = vi.fn()
      wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          // Bind the event handler using the correct syntax
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.PRIMARY,
          disabled: true
        }
      })

      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty(EVENTS.BUTTON_CLICKED)
      expect(clickEventHandler).toBeCalledTimes(0)
    })

    it('should have primary classes with primary button', () => {
      const primaryClasses = [
        'flex',
        'justify-center',
        'items-center',
        'rounded',
        'disabled:text-neutral-400',
        'bg-indigo-700',
        'font-medium',
        'text-white',
        'hover:bg-indigo-800',
        'disabled:bg-neutral-100',
        'focus:ring',
        'focus:ring-violet-100',
        'text-sm',
        'gap-1',
        'px-3.5',
        'py-2.5'
      ]

      expect(wrapper.classes()).toEqual(primaryClasses)
    })

    it('should display an icon on left', () => {
      // ButtonIcon

      wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.PRIMARY,
          placement: ICON_PLACEMENT.LEFT
        },
        slots: {
          icon: ButtonIcon
        }
      })

      expect(wrapper.findAllComponents(ButtonIcon)).toHaveLength(1)

      // check svg is placed on the left
      const btn = wrapper.find('button')
      const html = btn.element.innerHTML
      expect(html.indexOf('svg')).toBeLessThan(html.indexOf(buttonText))
    })

    it('should display an icon on right', () => {
      wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.PRIMARY,
          placement: ICON_PLACEMENT.RIGHT
        },
        slots: {
          icon: ButtonIcon
        }
      })

      // check svg is placed on the right
      expect(wrapper.classes()).toContain('flex-row-reverse')
    })

    it('should display an icon on both sides', () => {
      wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.PRIMARY,
          placement: ICON_PLACEMENT.BOTH
        },
        slots: {
          icon: ButtonIcon
        }
      })

      const btn = wrapper.find('button')
      const html = btn.element.innerHTML

      const svgIndices = findAllIndices(html, '<svg')
      const buttonTextIndices = findAllIndices(html, buttonText)

      expect(svgIndices).toHaveLength(2)
      expect(buttonTextIndices).toHaveLength(1)

      expect(svgIndices[0]).toBeLessThan(buttonTextIndices[0])
      expect(buttonTextIndices[0]).toBeLessThan(svgIndices[1])
    })
  })

  describe('Secondary Button', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          // Bind the event handler using the correct syntax
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.SECONDARY
        }
      })
    })

    it('should emit callback on click for secondary button', async () => {
      expect(wrapper.find('button')).exist
      expect(wrapper.text()).toBe(buttonText)
      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty(EVENTS.BUTTON_CLICKED)
      expect(clickEventHandler).toBeCalledTimes(1)
    })
    it('should not emit callback on click for secondary disabled button', async () => {
      const clickEventHandler = vi.fn()
      wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          // Bind the event handler using the correct syntax
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.SECONDARY,
          disabled: true
        }
      })

      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty(EVENTS.BUTTON_CLICKED)
      expect(clickEventHandler).toBeCalledTimes(0)
    })

    it('should have secondary classes with secondary button', () => {
      const secondaryClasses = [
        'flex',
        'justify-center',
        'items-center',
        'rounded',
        'disabled:text-neutral-400',
        'bg-white',
        'border-[0.5px]',
        'border-solid',
        'border-[#e6e6e6]',
        'font-medium',
        'text-neutral-900',
        'hover:bg-neutral-50',
        'disabled:bg-neutral-100',
        'focus:ring',
        'focus:ring-violet-100',
        'text-sm',
        'gap-1',
        'px-3.5',
        'py-2.5'
      ]

      expect(wrapper.classes()).toEqual(secondaryClasses)
    })
  })

  describe('Tertiary button', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          // Bind the event handler using the correct syntax
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.TERTIARY
        }
      })
    })

    it('should emit callback on click for tertiary button', async () => {
      expect(wrapper.find('button')).exist
      expect(wrapper.text()).toBe(buttonText)
      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty(EVENTS.BUTTON_CLICKED)
      expect(clickEventHandler).toBeCalledTimes(1)
    })
    it('should not emit callback on click for tertiary disabled button', async () => {
      const wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          // Bind the event handler using the correct syntax
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.TERTIARY,
          disabled: true
        }
      })

      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty(EVENTS.BUTTON_CLICKED)
      expect(clickEventHandler).toBeCalledTimes(0)
    })

    it('should have tertiary classes with tertiary button', () => {
      const tertiaryClasses = [
        'flex',
        'justify-center',
        'items-center',
        'rounded',
        'disabled:text-neutral-400',
        'font-medium',
        'text-indigo-700',
        'hover:bg-neutral-50',
        'disabled:bg-transparent',
        'focus:ring',
        'focus:ring-violet-100',
        'text-sm',
        'gap-1',
        'px-3.5',
        'py-2.5'
      ]

      expect(wrapper.classes()).toEqual(tertiaryClasses)
    })
  })

  describe('Link Color Button', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          // Bind the event handler using the correct syntax
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.LINK_COLOR
        }
      })
    })

    it('should emit callback on click for link color button', async () => {
      expect(wrapper.find('button')).exist
      expect(wrapper.text()).toBe(buttonText)
      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty(EVENTS.BUTTON_CLICKED)
      expect(clickEventHandler).toBeCalledTimes(1)
    })
    it('should not emit callback on click for link color disabled button', async () => {
      const clickEventHandler = vi.fn()
      const wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          // Bind the event handler using the correct syntax
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.LINK_COLOR,
          disabled: true
        }
      })

      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty(EVENTS.BUTTON_CLICKED)
      expect(clickEventHandler).toBeCalledTimes(0)
    })

    it('should have link color classes with link color button', () => {
      const linkColorClasses = [
        'flex',
        'justify-center',
        'items-center',
        'rounded',
        'disabled:text-neutral-400',
        'font-medium',
        'text-indigo-700',
        'focus:ring',
        'focus:ring-violet-100',
        'gap-1',
        'px-0.5',
        'text-sm'
      ]

      expect(wrapper.classes()).toEqual(linkColorClasses)
    })
  })
  describe('Link Gray Button', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          // Bind the event handler using the correct syntax
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.LINK_GRAY
        }
      })
    })
    it('should emit callback on click for link gray button', async () => {
      expect(wrapper.find('button')).exist
      expect(wrapper.text()).toBe(buttonText)
      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty(EVENTS.BUTTON_CLICKED)
      expect(clickEventHandler).toBeCalledTimes(1)
    })
    it('should not emit callback on click for link gray disabled button', async () => {
      const clickEventHandler = vi.fn()
      const wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          // Bind the event handler using the correct syntax
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.LINK_GRAY,
          disabled: true
        }
      })

      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty(EVENTS.BUTTON_CLICKED)
      expect(clickEventHandler).toBeCalledTimes(0)
    })

    it('should have link gray classes with link gray button', () => {
      const linkGrayClasses = [
        'flex',
        'justify-center',
        'items-center',
        'rounded',
        'disabled:text-neutral-400',
        'font-medium',
        'text-neutral-600',
        'focus:ring',
        'focus:ring-violet-100',
        'gap-1',
        'px-0.5',
        'text-sm'
      ]

      expect(wrapper.classes()).toEqual(linkGrayClasses)
    })
  })

  describe('Destructive Button', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          // Bind the event handler using the correct syntax
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.DESTRUCTIVE
        }
      })
    })

    it('should emit callback on click for descructive button', async () => {
      expect(wrapper.find('button')).exist
      expect(wrapper.text()).toBe(buttonText)
      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty(EVENTS.BUTTON_CLICKED)
      expect(clickEventHandler).toBeCalledTimes(1)
    })
    it('should not emit callback on click for descructive disabled button', async () => {
      const clickEventHandler = vi.fn()
      const wrapper = mount(ButtonComponent, {
        props: {
          text: buttonText,
          // Bind the event handler using the correct syntax
          [clickEvent]: clickEventHandler,
          variant: VARIANTS.DESTRUCTIVE,
          disabled: true
        }
      })

      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty(EVENTS.BUTTON_CLICKED)
      expect(clickEventHandler).toBeCalledTimes(0)
    })

    it('should have descructive classes with descructive button', () => {
      const desctructiveClasses = [
        'flex',
        'justify-center',
        'items-center',
        'rounded',
        'disabled:text-neutral-400',
        'bg-red-600',
        'hover:bg-red-700',
        'disabled:bg-transparent',
        'text-white',
        'focus:ring',
        'focus:ring-red-100',
        'text-sm',
        'gap-1',
        'px-3.5',
        'py-2.5'
      ]

      expect(wrapper.classes()).toEqual(desctructiveClasses)
    })
  })
})
