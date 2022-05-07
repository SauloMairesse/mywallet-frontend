import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import usuarioINFO from '../contexts/userINFO'

export default function App(){

    const [userINFO, setUserINFO] = React.useState({})

    return(
        <usuarioINFO.Provider value={{userINFO, setUserINFO}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/cadastro' element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </usuarioINFO.Provider>
    )
}