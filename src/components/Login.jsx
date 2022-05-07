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

    function actionOnSubmit(event){
        event.preventDefault();
        const URL = 'http://localhost:5000/sing-in'
        const promise = axios.post(URL, {...loginINFO})
        promise.then( (res) => {setUserINFO(res.data)
                                console.log(res.data)
                                navigate('/FaltaProximaTela')} )
        promise.catch( (err) => {console.log('Erro actionOnSubmit:\n', err)} )
    }
    return (
        <LoginHTML>
            <h1>MyWallet</h1>
            <form onSubmit={actionOnSubmit}>
                    <input  type='email' 
                            placeholder={'Email'}
                            value={loginINFO.email}
                            onChange={ (e) => setLoginINFO({...loginINFO, email: e.target.value}) }/>
                    <input  type="password"
                            placeholder={'Senha'}
                            value={loginINFO.senha}
                            onChange={ (e) => setLoginINFO({...loginINFO, senha: e.target.value}) }/>
                    <button type="submit">Entrar</button>     
            </form>
            <Link to={`/cadastro`}> <span> Ainda não possui Cadastro ? Cadastre-se </span> </Link>
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
        font-family: Saira Stencil One;
        color: #fff;
        font-size: 32px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0em;
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
        margin-bottom: 15px;
    }
    button{
        height: 46px;
        width: 326px;
        left: 23px;
        top: 375px;
        border-radius: 5px;
        background-color: #A328D6;
        font-family: Raleway;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        color: #fff;
    }
`