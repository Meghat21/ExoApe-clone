import { useState } from 'react'
import Navbar from './Component/Navbar'
import Landing from './Component/Landing'
import Work from './Component/Work'
import PlayRell from './Component/PlayRell'
import ImagesSection from './Component/ImagesSection'
import Spread from './Component/Spread'


function App() {
  const [count, setCount] = useState(0)

  return (
<div className='w-full '>
  <Navbar/>
  <Landing/>
  <Work/>
  <PlayRell/>
  <ImagesSection/>
  <Spread/>
</div>
  )
}

export default App
