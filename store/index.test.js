import projects from './projects.json'
import posts from './posts.json'
import projectsTags from './projectsTags.json'
import postsTags from './postsTags.json'

import { mutations, state } from './index'

const {
  updateProjects,
  updatePosts,
  updateTags,
  updateProjectsTags,
} = mutations

describe('Fetch content from WP API', () => {
  it('update posts', () => {
    updatePosts(posts)
    expect(state.posts).not.toEqual(expect.arrayContaining(posts))
  })
  it('update projects', () => {
    updateProjects(projects)
    expect(state.projects).not.toEqual(expect.arrayContaining(projects))
  })
})

describe('Fetch tags', () => {
  it('posts tags', () => {
    updateTags(postsTags)
    expect(state.tags).not.toEqual(expect.arrayContaining(postsTags))
  })
  it('projects tags', () => {
    updateProjectsTags(projectsTags)
    expect(state.projectsTags).not.toEqual(expect.arrayContaining(projectsTags))
  })
})
