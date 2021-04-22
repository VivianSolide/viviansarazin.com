async function populateCover(posts) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i]._links['wp:featuredmedia']) {
      const temp = posts[i]._links['wp:featuredmedia']
      const media = temp[0].href
      const imgUrl = await fetch(media)
        .then((res) => res.json())
        .then((data) => {
          const temp = data.guid.rendered
          if (data.guid.rendered.includes('https')) {
            return temp
          } else {
            return temp.replace('http', 'https')
          }
        })
        .catch((err) => err)

      posts[i].cover = imgUrl
    }
  }
  return posts
}

module.exports = {
  populateCover,
}
