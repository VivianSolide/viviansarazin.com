async function populateCover(posts) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i]._links['wp:featuredmedia']) {
      const temp = posts[i]._links['wp:featuredmedia']
      const media = temp[0].href
      const imgUrl = await fetch(media)
        .then((res) => res.json())
        .then((data) => data.guid.rendered)
        .catch((err) => err)

      posts[i].cover = imgUrl
    }
  }
  return posts
}

module.exports = {
  populateCover,
}
