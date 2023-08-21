'use client'
import PromptCard from './PromptCard'
import { useState,useEffect } from 'react'
const PromptCardList = ({data,handleTagClick}) => {
    return (
      <div className='mt-16 prompt_layout'>
        {data.map((prompt) => (
          <PromptCard key={prompt._id} post={prompt} handleChange={handleTagClick}/>
        ))}
      </div>
    )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('')
  const [prompts, setPrompts] = useState([])

  const handleSearchText = (e) => {

  }

  useEffect(() => {
    const fetchPrompts = async () => {
      const responce = await fetch('/api/prompt')
      const data = await responce.json()
      setPrompts(data)
    }
    fetchPrompts()
  }
  ,[])

  return (
    <section className='feed'>
      <form className="relative w-full flex-center">
        <input 
          type='text'
          placeholder='Search'
          value={searchText}
          onChange={handleSearchText}
          className='search_input peer'         
        />
      </form>

      <PromptCardList
       data = {prompts}
       handleTagClick={()=>{}}
      />
    </section>
  )
}

export default Feed
 