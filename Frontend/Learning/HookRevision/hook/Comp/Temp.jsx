import React, { useState } from 'react'

function Temp() {

    const [color, setColor] = useState("pink")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        hi
        <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
                checking
        </div>
    </div>
  )
}

export default Temp