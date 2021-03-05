import React from 'react'

// 1
import Post from './index'

// 2
const fakePost = {
  id: "post1",
  imageUrl: "https://i.imgur.com/aVqLAG7.png",
  description: "It's in the shed",
  liked: false,
  totalLikes: 200,
  totalComments: 20,
  user: {
    id: "user1",
    username: "AJ"
  }
}

// 3
export default {
  title: 'Post',
  component: Post,
}

// 4
export const Default = () => (
  <Post post={fakePost}></Post>
)
