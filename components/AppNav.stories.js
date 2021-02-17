import { withDesign } from 'storybook-addon-designs'
import AppNav from './AppNav'

export default {
  title: 'AppNav',
  decorators: [withDesign],
}

export const Nav = () => ({
  template: '<AppNav />',
  components: { AppNav },
})

Nav.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5',
  },
}
