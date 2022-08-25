import React, { useState } from 'react'
import InputBar from '../components/InputBar'
import TweetDisplay from '../components/TweetDisplay'
import Image from 'next/dist/client/image'
import Settings from '../components/Settings'

const MainPage = () => {

  const [text, setText] = useState("")
  const [color, setColor] = useState('linear-gradient(106.8deg, rgb(117, 255, 220) 6%, rgb(163, 216, 255) 47.6%, rgb(248, 215, 251) 87.8%)')

  const [name, setName] = useState("Gitansh Mehta")
  const [handle, setHandle] = useState("notsosimppole")

  const handleChange = (event) => {
      setText(event.target.value)
  }

  const handleNameChange = (event) =>{
    setName(event.target.value)
  }
  const handleHandleChange = (event) => {
    setHandle(event.target.value)
  }

  return (
    <div className='h-screen overflow-x-hidden'>
        {/* Add A Text Bar */}
        <InputBar handleChange = {handleChange} text = {text}/>
        <div className="flex h-1/2 w-screen my-10">
        {/* main tweet area */}
          <TweetDisplay  text = {text} color = {color} name = {name} handle = {handle}/>
        {/* tweet settings area */}
        <Settings handleNameChange={handleNameChange} handleHandleChange={handleHandleChange} setColor = {setColor} color = {color}/>
        </div>
    </div>
  )
}

export default MainPage