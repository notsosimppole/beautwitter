import React from 'react'

const Settings = (props) => {
    const gradients = [
        'linear-gradient(to right, #eecda3, #ef629f)',
        'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
        'linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214))',
        'linear-gradient(to right, rgb(253, 200, 48), rgb(243, 115, 53))', ,
        'linear-gradient(to right, rgb(116, 235, 213), rgb(172, 182, 229))',
        'linear-gradient(to right, rgb(255, 153, 102), rgb(255, 94, 98))',
        'linear-gradient(109.6deg, rgb(245, 95, 152) 11.2%, rgb(254, 148, 136) 100.2%)',
        'linear-gradient(to right, rgb(74, 194, 154), rgb(189, 255, 243))',
        'linear-gradient(to right, rgb(255, 175, 189), rgb(255, 195, 160))',
        'linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
        'linear-gradient(90deg, hsla(145, 84%, 73%, 1) 0%, hsla(150, 61%, 48%, 1) 100%)',
        'linear-gradient(to right, rgb(255, 75, 31), rgb(255, 144, 104))',
        'linear-gradient(to right, rgb(36, 198, 220), rgb(81, 74, 157))',
        'linear-gradient(to right, rgb(29, 151, 108), rgb(147, 249, 185))',
        'linear-gradient(0.2deg, rgb(51, 204, 255) 4.8%, rgb(51, 102, 255) 85.5%)',
        'linear-gradient(106.8deg, rgb(117, 255, 220) 6%, rgb(163, 216, 255) 47.6%, rgb(248, 215, 251) 87.8%)',
        'linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%)',
        'linear-gradient(2.1deg, rgb(116, 253, 210) 5%, rgb(0, 191, 247) 95.8%)',
        'linear-gradient(110.7deg, rgb(9, 154, 151) 6.3%, rgb(21, 205, 168) 90.6%)'
    ]
    
    const displayElems = gradients.map((gradient) => {
        return (
        <div key={gradient} style={{background: gradient, border: props.color === gradient ? "2px solid yellow " : ""}} className='h-8 w-8 rounded-full' onClick={() => props.setColor(gradient)}>
        </div>
         )
    })


    return (
    <div className='flex flex-col justify-center items-center mx-10'>
        <p className='text-xl mb-10 '>Select color for background</p>
        <div className='grid grid-cols-10 gap-5 h-1/5'>
          {displayElems}
        </div>
        <div className='flex flex-col m-10 p-3 justify-around items-start'>
            <div className='flex justify-around items-center m-2 gap-2 w-full'>
                <label className=''> 
                Enter Name : 
                </label>
                <input type='text' placeholder='name' className='p-1 border-2 rounded-lg' onChange={props.handleNameChange}/>
            </div>
            <div className='flex justify-around items-center gap-2 m-2 w-full'>
                <label>
                    Enter user handle : 
                </label>
                <input placeholder='handle' className='p-1 border-2 rounded-lg' onChange={props.handleHandleChange} />
            </div>
        </div>
    </div>
  )
}

export default Settings
