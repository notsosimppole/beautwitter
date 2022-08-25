import React from 'react'

const TweetDisplay = (props) => {
  console.log(props.color)
  return (
    <div className=' w-1/2 bg-gradient-to-br flex items-center justify-center rounded-md p-2' style={{background: props.color}}>
        <div className='shadow-2xl w-4/5 h-4/5 m-auto flex backdrop-blur-lg flex-col p-5'>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <img src = "/static/images/logo.png" alt = "logo" className='h-12 w-12 rounded-full bg-blue-100' />
              <div className='ml-2'>
                <h2 className='mb-[-4px]'>{props.name}</h2>
                <h2 className='text-slate-600 text-sm'>@{props.handle}</h2>
              </div>
            </div>
              
            
          </div>
          <div className='flex my-5 mx-14 h-full '>
            <h2 className='text-center font-inter text-lg'>
              {props.text}
            </h2>
          </div>
        </div>
    </div>
  )
}

export default TweetDisplay