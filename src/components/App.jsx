import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'

export default function App(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' elemente={<Login/>}/>
        </Routes>
    </BrowserRouter>
    )
}