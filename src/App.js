import React, { useState } from 'react'
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'

import dummyData from './dummy-data'

import './App.css'

const App = () => {
  const [posts, setPosts] = useState(dummyData)
  // stretch
  const [search, setSearch] = useState('')

  const likePost = postId => {
    setPosts(
      posts.map(x => (x.id === postId ? { ...x, likes: x.likes + 1 } : x))
    )
  }

  // stretch
  const searchItems = e => setSearch(e.target.value)

  const sortItems = (posts, search) =>
    posts.filter(item => item.username.includes(search.toLowerCase()))

  return (
    <div className='App'>
      <SearchBar searchItems={searchItems} />
      <Posts posts={sortItems(posts, search)} likePost={likePost} />
    </div>
  )
}

export default App
