import React, { useEffect,useState } from 'react'
import Posts from '../components/Posts'

const IndexPage = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/posts').then(response => {
      response.json().then(posts => {
        setPosts(posts)
      })
    })
  }, [])
  return (
    <>
    {posts.length > 0 &&  posts.map(post => (
      <Posts {...post} />
    ))} 
    </>
  )
}

export default IndexPage