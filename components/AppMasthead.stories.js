import { withDesign } from 'storybook-addon-designs'
import AppMasthead from './AppMasthead'

export default {
  title: 'AppMasthead',
  decorators: [withDesign],
}

export const Header = () => ({
  template: '<AppMasthead />',
  components: { AppMasthead },
})

Header.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5',
  },
}
