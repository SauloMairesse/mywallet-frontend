import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import usuarioINFO from "../contexts/userINFO"
import axios from "axios"

export default function Login(){

    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)

    const [loginINFO, setLoginINFO] = React.useState({email: '',
                                                    password: ''})
    const navigate = useNavigate()

    function login(event){
        console.log('tentando logar...')
        event.preventDefault();
        const URL = 'https://projetomywallet.herokuapp.com/sing-in'
        const promise = axios.post(URL, {...loginINFO})
        promise.then( (res) => {console.log('to aqui ?')
                                setUserINFO(res.data)
                                console.log(res.data)
                                navigate('/home')})
        promise.catch( () => {alert('Usuario inexistente ou Senha errada')} )
    }

    return (
        <LoginHTML>
            <h1>MyWallet</h1>
            <form onSubmit={login}>
                    <input  type='email' required
                            placeholder={'  Email'}
                            value={loginINFO.email}
                            onChange={ (e) => setLoginINFO({...loginINFO, email: e.target.value}) }/>
                    <input  type="password" required
                            placeholder={'  Senha'}
                            value={loginINFO.password}
                            onChange={ (e) => setLoginINFO({...loginINFO, password: e.target.value}) }/>
                    <button type="submit">Entrar</button>     
            </form>
            <Link to={`/cadastro`}> <span className="register"> Primeira vez? Cadastre-se! </span> </Link>
        </LoginHTML>
        )
}

const LoginHTML = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  #8C11BE ;
    h1{
        font-family: 'Saira Stencil One', cursive;
        color: #fff;
        font-size: 32px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0em;
        margin-bottom: 30px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    input{
        height: 58px;
        width: 326px;
        left: 25px;
        top: 233px;
        border-radius: 5px;
        border: none;
        margin-bottom: 15px;
    }
    button{
        height: 46px;
        width: 326px;
        left: 23px;
        top: 375px;
        border-radius: 5px;
        background-color: #A328D6;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        color: #fff;
        border: none;
        margin-bottom: 50px;
    }
    .register{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
`