import fs from 'fs'
import path from 'path'
import { shallowMount } from '@vue/test-utils'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import index from './index.vue'

expect.extend({ toMatchImageSnapshot })

describe('Home Page', () => {
  test('mounts properly', () => {
    const wrapper = shallowMount(index)
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    // const wrapper = shallowMount(index)
    // expect(wrapper.html()).toMatchSnapshot()
  })

  it('to compare with the wireframe', () => {
    const imageAtTestPath = path.resolve(__dirname, '../assets', 'projects.png')
    const imageAtTest = fs.readFileSync(imageAtTestPath)
    expect(imageAtTest).toMatchImageSnapshot()
  })
})
