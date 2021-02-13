import { withDesign } from 'storybook-addon-designs'
import AppFooter from './AppFooter'

export default {
  title: 'AppFooter',
  decorators: [withDesign],
}

export const Footer = () => ({
  template: '<AppFooter />',
  components: { AppFooter },
})

Footer.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5',
  },
  allowFullscreen: true,
}
