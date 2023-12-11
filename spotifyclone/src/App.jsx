import './App.css'
import LeftNavBar from './components/LeftNavBar'
import MainNavBar from './components/MainNavBar'

import Play from './components/Play'
import Song from './components/Song'
import Home from './pages/home'

function App() {

  return (
    <>
    <div className="fullpage h-screen w-screen">
     <MainNavBar/>
     <Play/>
    </div>
    </>
  )
}

export default App
