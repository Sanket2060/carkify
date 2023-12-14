import { Outlet } from 'react-router-dom'
import './App.css'
import LeftNavBar from './components/LeftNavBar'
import MainNavBar from './components/MainNavBar'
import Play from './components/Play'
import Song from './components/Song'
import Home from './pages/Home'
import Search from './pages/Search'
import { ToastContainer } from 'react-toastify'
import AddSongs from './components/AddSongs'


function App() {

  return (
    <>
    <div className="fullpage h-fit w-screen flex bg-black ">
      {/* <AddSongs/> */}
      /* <LeftNavBar/>
      <Outlet/>
      <Play/>
    </div>
    <ToastContainer/> 
    </>
  )
}

export default App
