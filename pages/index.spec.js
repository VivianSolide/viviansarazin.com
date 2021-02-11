import { shallowMount } from '@vue/test-utils'
import index from './index.vue'

describe('Home Page', () => {
  test('mounts properly', () => {
    const wrapper = shallowMount(index)
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = shallowMount(index)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
