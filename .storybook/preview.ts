import { setup } from '@storybook/vue3'
import type { Preview } from '@storybook/vue3'
import ButtonComponent from '../src/components/ButtonComponent.vue'
import ButtonIcon from '../src/components/ButtonIcon.vue'

import 'tailwindcss/tailwind.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

setup((app) => {
  app.use(ButtonIcon)
  app.use(ButtonComponent)
})

export default preview
