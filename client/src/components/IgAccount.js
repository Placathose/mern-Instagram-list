import React from 'react'

const IgAccount = ({accountInfo}) => {
  const { 
    username, 
    followers, 
    followings, 
    posts, 
    image, 
    bio, 
    createdAt } = accountInfo;
  return (
    <div className='md:flex '>
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" src="../public/default.png" alt="for our use"/>
      </div>
      <div className='p-8'>
        <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
          {username}
        </div>

        <div className='md:flex items-center'>
          <p className='mt-2 mr-4 text-gray-500 md:flex items-end text-sm'>
            followers:
            <span className='block mt-1 text-lg leading-tight font-medium text-black text-sm'>
              {followers}
            </span>
          </p>
          <p className='mt-2 mr-4 text-gray-500 md:flex items-end text-sm'>
            followings:
            <span className='block mt-1 text-lg leading-tight font-medium text-black text-sm'>
              {followings}
            </span>
          </p>
          <p className='mt-2 mr-4 text-gray-500 md:flex items-end text-sm'>
            posts: 
            <span className='block mt-1 text-lg leading-tight font-medium text-black text-sm'>
              {posts}
            </span>
          </p>
        </div>

        <p className='mt-2 text-gray-500'>{bio}</p>
      </div>
    </div>
  )
}

export default IgAccount