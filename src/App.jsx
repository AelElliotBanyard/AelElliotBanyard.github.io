import {MdDarkMode, MdLightMode} from 'react-icons/md'
import { useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

export default function App() {

  const [darkMode, setDarkMode] = useState(true)
  const toggleMode = () => {
    setDarkMode(!darkMode)
  }

  const Home = () => {
    return (
      <div className={darkMode ? 'dark' : ''}>
      <div className='main h-screen'>
        <div className="switcher" onClick={toggleMode}>
          <div className='icon'>
            {darkMode ? <MdDarkMode/> : <MdLightMode/>}
          </div>
        </div>
        <h1 className='text-3xl font-bold pt-4'>Ael Elliot Banyard</h1>
        <Link to='/portfolio' className='card'>
          <div>
            <h1>Portfolio</h1>
            <p>Everything about me</p>
          </div>
        </Link>
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

  const Portfolio = () => {
    return (
      <div className={darkMode ? 'dark' : ''}>
      <div className='main'>
        <div className="switcher" onClick={toggleMode}>
          <div className='icon'>
            {darkMode ? <MdDarkMode/> : <MdLightMode/>}
          </div>
        </div>
        <div className='absolute left-2 top-2 text-gray-500 font-bold'>
            <Link to="/">{'< Back'}</Link>
        </div>
        <h1 className='text-3xl font-bold pt-4'>Ael Elliot Banyard</h1>
        <div className='card'>
          <h1>Hi! Welcome! &#128075;</h1>
          <p>Hello! My name is Ael Elliot Banyard.</p>
        </div>
        <div className='card'>
          <h1>About me</h1>
          <h2>My life</h2>
          <p>I was born on the 19th of December in 2004 in France.</p>
          <p>I lived in France until August of 2007 and then moved to Neuhausen, Switzerland.</p>
          <p>Later, in 2011, I moved into a house in a little village called Rheinau.</p>
          <h2>Passion for Programming / Developement</h2>
          <p>I discovered my Passion for webdevelopement as I was about 10 years old.</p>
          <p>That year I had been to London to visit my Uncle.</p>
          <p>In the time I was there my Uncle and I took some Photos of the local tourist attractions and my Uncle wanted to do something with my Photos, so he sugested we should make a simple HTML and CSS website displaing my work.</p>
          <p>So we did and I was amazed by the result.</p>
          <p>After that I started to learn HTML and CSS on my own and I was hooked.</p>
          <p>Since then I have been fascinated by Webdevelopement!</p>
        </div>
        <div className='card'>
          <h1>Nationality</h1>
          <p>I am half French &#127467;&#127479; and half English &#127468;&#127463;.</p>
          <p>My family and I have just applied for Swiss &#127464;&#127469; citizenship.</p>
        </div>
        <div className='card'>
          <h1>Languages</h1>
          <h2>Spoken</h2>
          <p>French &#127467;&#127479;</p>
          <p>English &#127468;&#127463;</p>
          <p>German &#127465;&#127466;</p>
          <h2>Programming</h2>
          <p>HTML &#60;html&#62;</p>
          <p>CSS &#60;style&#62;</p>
          <p>JavaScript &#60;script&#62;</p>
          <p>Python &#60;python&#62;</p>
          <p>Java &#60;java&#62;</p>
          <p>PHP &#60;php&#62;</p>
          <p>SQL &#60;sql&#62;</p>
          <p>React &#60;React&#62;</p>
        </div>
        <p className='mb-4'></p>
      </div>
    </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/*' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}
