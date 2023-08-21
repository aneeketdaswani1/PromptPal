'use client'

import { useState,useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"
const MyProfile = () => {

  const router = useRouter()
  const {data:session} = useSession()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPrompts = async () => {
      const responce = await fetch(`/api/users/${session.user.id}/posts`)
      const data = await responce.json()
      setPosts(data)
    }
    if(session.user?.id){
      fetchPrompts()
    } 
  }
  ,[])

    const handleEdit = async (post) => { 

        // router.push(`/update-prompt?id=${post._id}`)


    } 

    const handleDelete = async (post) => {


    }
  return (
    <div>
        <Profile
            name='My'
            desc='writing prompts'
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    </div>
  )
}
export default MyProfile
