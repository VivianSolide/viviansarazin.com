import { populateCover } from './helpers/populateCover'
const siteURL = 'https://blog.viviansarazin.com/'

export const state = () => ({
  posts: [],
  tags: [],
  projects: [],
  projectsTags: [],
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  },
  updateProjects: (state, projects) => {
    state.projects = projects
  },
  updateProjectsTags: (state, projectsTags) => {
    state.projectsTags = projectsTags
  },
}

export const actions = {
  async getPosts({ state, commit, dispatch }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
      ).then((res) => res.json())

      posts = posts
        .filter((el) => el.status === 'publish')
        .map(({ id, slug, title, excerpt, date, tags, content, _links }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content,
          _links,
        }))

      posts = await populateCover(posts)

      commit('updatePosts', posts)
    } catch (err) {
      return new Error(err)
    }
  },
  async getTags({ state, commit }) {
    if (state.tags.length) return

    let allTags = state.posts.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then((res) => res.json())

      tags = tags.map(({ id, name }) => ({
        id,
        name,
      }))

      commit('updateTags', tags)
    } catch (err) {
      return new Error(err)
    }
  },
  async getProjects({ state, commit }) {
    if (state.projects.length) return

    try {
      let projects = await fetch(
        `${siteURL}/wp-json/wp/v2/projects`
      ).then((res) => res.json())

      projects = projects
        .filter((el) => el.status === 'publish')
        .map(({ id, slug, title, excerpt, date, tags, content, _links }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content,
          _links,
        }))

      projects = await populateCover(projects)

      commit('updateProjects', projects)
    } catch (err) {
      return new Error(err)
    }
  },
  async getProjectsTags({ state, commit }) {
    if (state.projectsTags.length) return

    let allTags = state.projects.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then((res) => res.json())

      tags = tags.map(({ id, name }) => ({
        id,
        name,
      }))

      commit('updateProjectsTags', tags)
    } catch (err) {
      return new Error(err)
    }
  },
}
