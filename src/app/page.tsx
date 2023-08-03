"use client"
import { useEffect, useState } from 'react';
import BaseLayout from '@/app/components/layout/baseLayout'
import Profile from '@/app/components/layout/profile'

const Home = () => {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/pageData.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>L O A D I N G . . .</p>

  if (!data) return <p>No profile data</p>

  const { user, userSocialPlatform, content } = data

  return (
    <BaseLayout>
      <Profile
        user={user}
        social={userSocialPlatform}
        content={content}
      />
    </BaseLayout>
  )
}

export default Home