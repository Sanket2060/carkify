import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider, createRoutesFromElements, Route
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx'
import AddSongs from './components/AddSongs.jsx';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route path='' element={<Home/>} />
    <Route path='search' element={<Search/>} />
    <Route path='addsongs' element={<AddSongs/>}/>
  </Route>

))

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
)
