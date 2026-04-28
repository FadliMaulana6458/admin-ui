import React from 'react'
import UserCard from './UserCard'
import PostCard from './PostCard'
import posts from './data/posts'

function Exercise() {
  return (
    <>
      {/* ===== USER CARDS ===== */}
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
            name="Fadli"
            email="fadlisentiyaki@gmail.com"
            street="Jl. Sentiyaki"
            city="Semarang"
          />
          <UserCard 
            name="Bagas"
            email="bagas45@gmail.com"
            street="Jl. Imam Bonjol"
            city="Salatiga"
          />
          <UserCard 
            name="Abid"
            email="abid45@gmail.com"
            street="Jl. Pahlawan"
            city="Semarang"
          />
        </div>

        {/* ===== USER POSTS ===== */}
        <h1 className="text-3xl font-bold text-center mt-10 mb-6 text-blue-700">
          User Posts
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;