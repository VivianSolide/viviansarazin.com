import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils-edge'
import axios from 'axios'

describe('My test', async () => {
  await setup({
    browser: true,
  })

  it('true === true', async () => {
    expect(true).toBe(true)
  })

  it('should fetch smthg', async () => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/todos/1')
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    })
  })

  it('should get the index page', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Vivian SARAZIN')
  })
})

