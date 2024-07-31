import { useState } from 'react'
// https://dev.to/kartikbudhraja/building-a-simple-note-taking-app-with-react-2g2k
import './App.css'
import Note from './Components/Note'
import data from '../Notes.js'

function App() {
  const today = new Date 
  const [count, setCount] = useState(4)
  // const [title, setTitle] = useState("")
  // const [des, setDes] = useState("")
  const [newNote, setNewNote] = useState({
  title: "",
  description:"",
  date: today.toDateString()
  })
  const [display, setDisplay] = useState(true)
  const [myNotes, setMyNotes] = useState(data)

  function newNoteAdd(event){
    const {name, value} = event.target
    setNewNote(prevNote => ({
      ...prevNote,
      [name] : value
    }))
  }

  const handleChange = (e) => {
        setMyNotes(prevNotes=>{
          return [newNote, ...prevNotes]
            
        })
  }
  const handleClick = ()=>{
       setDisplay(prevDisplay=> !prevDisplay)
  }

  const noteItems = myNotes.map(note => <Note key={note.key} title={note.title}  description={note.des} date={note.date}/>)

  return (
    <>
    <div className='flex items-center justify-center py-12 relative h-full '>
    <div className='flex flex-col items-center gap-10 border-2  w-[45%] max-h-screen border-orange-300'>
    <h1 className='font-bold text-3xl'> Notes</h1>
    <div className={`${display?'flex flex-col': 'hidden'} gap-1 `}   >
      <input type="text" name='title' value={newNote.title} placeholder='Title' onChange={newNoteAdd} className='w-[20rem]'/>
      <hr />
      <textarea name="description" value={newNote.description} placeholder='Description' onChange={newNoteAdd}/>
      <button className='bg-orange-400 text-white w-[4rem] self-end rounded-md font-medium' onClick={handleChange}>Add</button>
    </div>
      <div className='flex flex-col gap-3'>
        {noteItems}
      </div>
    </div>
    <div className='rounded-full h-14 w-14 flex items-center justify-center text-5xl font-bold text-orange-100 absolute bottom-40 right-[32rem] bg-orange-500 shadow-2xl ' onClick={handleClick}>
        <p>+</p>
    </div>
    </div>
    
      
    </>
  )
}

export default App
