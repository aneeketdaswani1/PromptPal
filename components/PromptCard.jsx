'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname,useRouter } from 'next/navigation'

const PromptCard = ({post,handleChange,handleDelete,handleEdit}) => {
  const [copied, setCopied] = useState('')
  const pathName = usePathname()
  const router = useRouter()
  const {data:session} = useSession()
  const handleCopy = () => {  
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => {
      setCopied('')
    },3000)
  }
  return (
    <div className='prompt_card'>

      <div className='flex justify-between items-start gap-5'>

        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
            <Image
              src={post.creater.image}
              alt="Picture of the author"
              width={40}
              height={40}
              className='rounded-full object-contain '
            />
            <div className='flex flex-col'>
              <h3 className=' font-mono font-semibold text-gray-900'>{post.creater.username}</h3>
              <p className='text-sm text-gray-600'>{post.creater.email}</p>
            </div> 
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={copied === post.prompt ? './assets/icons/tick.svg' : ' ./assets/icons/copy.svg' }
            alt="Picture of the author"
            width={12}
            height={12}
            className='rounded-full object-contain '
          />
        </div>
      </div>

      <p className=' my-4 font-serif text-sm text-gray-700'
      >
        {post.prompt}
        <p className=' font-inter blue_gradient text-sm cursor-pointer'
        onClick={()=> handleChange && handleChange(post.tag)}
        >
        {post.tag}
        </p>
      </p>

        {
          // session.user?.id === post.creater._id && pathName==='/profile'
          // && (
          //   <div className=' mt-5 flex-center gap-4 border-t pt-3 border-gray-300'>
          //   <p className=' font-inter green_gradient text-sm cursor-pointer'
          //   onClick={()=> handleEdit && handleEdit(post)}
          //   >
          //     Edit
          //   </p>
            
          //   <p className=' font-inter orange_gradient text-sm cursor-pointer'
          //   onClick={()=>handleDelete && handleDelete(post)}
            
          //   >
          //     Delete
          //   </p>
            
          //   </div>
          // )
        }

      
    </div>
  )
}

export default PromptCard
