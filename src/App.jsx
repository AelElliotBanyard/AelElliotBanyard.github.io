import {MdDarkMode, MdLightMode} from 'react-icons/md'
import { useState } from 'react'

function App() {

  const [darkMode, setDarkMode] = useState(true)
  const toggleMode = () => {
    setDarkMode(!darkMode)
    console.log(darkMode)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='main'>
        <div className="switcher" onClick={toggleMode}>
          <div className='icon'>
            {darkMode ? <MdDarkMode/> : <MdLightMode/>}
          </div>
        </div>
        <h1 className='text-3xl font-bold pt-4'>Ael Elliot Banyard</h1>
        <a href='https://aelelliotbanyard.github.io/portfolio' className='card'>
          <div>
            <h1>Portfolio</h1>
            <p>Everything about me</p>
          </div>
        </a>
        <a href='https://aelelliotbanyard.github.io/VkApp' className='card'>
          <div >
            <h1>VkApp</h1>
            <p>App die ich gemacht habe für die VKAW</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default App
