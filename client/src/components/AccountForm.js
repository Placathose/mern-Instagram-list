import React, { useState } from 'react'

const AccountForm = () => {
  const [username, setUsername] = useState('');
  const [followers, setFollowers] = useState(0);
  const [followings, setFollowings] = useState(0);
  const [posts, setPosts] = useState(0);
  const [bio, setBio] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accountInfo = { username, followers, followings, posts, bio }

    const response = await fetch('/api/igaccount/', {
      method: 'POST',
      body: JSON.stringify(accountInfo),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await response.json();

    if(!response.ok) {
      setError(json.error)
    }
    if(response.ok) {
      setError(null);
      setUsername('');
      setFollowers(0);
      setFollowings(0);
      setPosts(0);
      setBio('');
      console.log("New workout added")
    }
  }


  return (
    // <>
      <div class="w-full max-w-xs">
        <form 
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit()}
        >
          <div class="mb-2">
            <label 
              class="block text-blue-500 text-sm font-bold mb-2" 
              for="username"
            >
              Username
            </label>
            <input 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              placeholder="Username"
              onChange={(e) => {setUsername(e.target.value)}}
              value={username}
            />
          </div>
          <div class="mb-2">
            <label 
              class="block text-blue-500 text-sm font-bold mb-2" 
              for="followers"
            >
              Followers
            </label>
            <input 
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="followers" 
              type="number" 
              placeholder="followers"
              onChange={(e) => {setFollowers(e.target.value)}}
              value={followers}
            />
          </div>
          <div class="mb-2">
            <label 
              class="block text-blue-500 text-sm font-bold mb-2" 
              for="followings"
            >
              Followings
            </label>
            <input 
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="followings" 
              type="number" 
              placeholder="followings"
              onChange={(e) => {setFollowings(e.target.value)}}
              value={followings}
            />
          </div>
          <div class="mb-2">
            <label 
              class="block text-blue-500 text-sm font-bold mb-2" 
              for="posts"
            >
              Posts
            </label>
            <input 
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="posts" 
              type="number" 
              placeholder="posts"
              onChange={(e) => {setPosts(e.target.value)}}
              value={posts}
            />
          </div>

          <div class="mb-2">
            <label 
              class="block text-blue-500 text-sm font-bold mb-2" 
              for="bio"
            >
              Bio
            </label>
            <input 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="bio" 
              type="text" 
              placeholder="Bio"
              onChange={(e) => {setBio(e.target.value)}}
              value={bio}
            />
          </div>

          <div class="mb-2">
            <input type="image" src="" alt="Submit" width="48" height="48"></input>
          </div>

          
          <div class="flex items-center justify-between">
            <button class="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>

  );
}

export default AccountForm