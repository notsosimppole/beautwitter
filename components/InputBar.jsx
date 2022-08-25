import React from 'react'

const InputBar = (props) => {
  return (
    <div className=' bg-[#ecebeb] h-fit px-5 flex flex-col justify-center items-center py-2 rounded-lg'>
        <input type="text" name="yourmom" placeholder='Enter Text' value={props.text} onChange={event=>props.handleChange(event)} className='w-full mx-5 my-2 border-2 h-10 font-extrabold font-inter rounded-md px-2'/>
    </div>
  )
}

export default InputBar