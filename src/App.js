import './App.css'
import { Route, Routes } from 'react-router'
import { Landing } from './pages/Landing/Landing'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import Mockman from 'mockman-js'
import { Home } from './pages/Home'
import { PrivateRoutes } from './component/PrivateRoutes'
import { Explore } from './pages/Explore'
import { Bookmark } from './pages/Bookmark'
import { Profile } from './pages/Profile'


function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mockman' element={<Mockman />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/bookmark' element={<Bookmark />} />
          <Route path='/profile/:userName' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
