import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo } from './assets'
import {Home, CreatePost} from './pages'



const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-Aaccent'>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-28 object-contain' />
        </Link>
        <Link to='/create-post' className='font-inter font-medium bg-Asecondary text-white px-4 py-2 rounded-md hover:bg-Aaccent transition duration-300 ease-in-out'>Create</Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-gradient-to-r from-Abackground to bg-Aaccent min-h-[calc 100vh -73px]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
