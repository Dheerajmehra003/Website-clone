import { useState } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Navbar/>
       <div className='flex'>
       <Sidebar/>
       <Feed/>
       </div>
      </div>
    </>
  )
}

export default App
