'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@components/Form'
const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({ prompt: '', tag: '' })
    const { data: session } = useSession()
    const router = useRouter()

    const createprompt = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            const res = await fetch('/api/prompt/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt:post.prompt,
                    UserID:session.user.id,
                    tag:post.tag
                })
            })

            if(res.ok){
                router.push('/')
            }
        }
        catch (err) {
                console.log(err)

        }
        finally {
            setSubmitting(false)
        }
    }
  return (
    <div>
        <Form 
            type='Create'
            post={post}
            setPost={setPost}
            submitting={submitting}
           handlesubmit={createprompt}
        />
    </div>
  )
}

export default CreatePrompt
