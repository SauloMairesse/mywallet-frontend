import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import usuarioINFO from '../contexts/userINFO'
import Home from './Home'
import Entry from './Entry'
import Output from './Output'

export default function App(){

    const [userINFO, setUserINFO] = React.useState({})

    return(
        <usuarioINFO.Provider value={{userINFO, setUserINFO}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/cadastro' element={<Register/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/entry' element={<Entry/>}/>
                    <Route path='/output' element={<Output/>}/>
                </Routes>
            </BrowserRouter>
        </usuarioINFO.Provider>
    )
}