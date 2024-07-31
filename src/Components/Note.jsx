import React from 'react'

const Note = (props) => {
  return (
    <div className='flex h-[10rem] w-[24rem] bg-white shadow-2xl rounded-sm py-3 px-3 '>
        <div>
        <h3 className='font-bold'>{props.title}</h3>
        <p>{props.description}</p>
        </div>
        <div>
            <p>{props.date}</p>
        </div>
    </div>
  )
}

export default Note