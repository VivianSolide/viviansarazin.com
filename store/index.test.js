import projects from './projects.json'
import posts from './posts.json'
import { mutations, state } from './index'

const { updateProjects, updatePosts } = mutations

describe('Fetch content from WP API', () => {
  it('update posts', () => {
    // mock state
    // apply mutation
    updatePosts(posts)
    // assert result
    expect(state.posts).not.toEqual(expect.arrayContaining(posts))
  })
  it('update projects', () => {
    // mock state
    // apply mutation
    updateProjects(projects)
    // assert result
    expect(state.projects).not.toEqual(expect.arrayContaining(projects))
  })
})
