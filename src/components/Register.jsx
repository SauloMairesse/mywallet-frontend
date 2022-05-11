import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import usuarioINFO from '../contexts/userINFO'

export default function Register(){
    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)

    const navigate = useNavigate()
    
    const [registerINFO, setRegisterINFO] = React.useState({name: '',
                                                            email: '',
                                                            password: '',
                                                            pwConfirmation: ''})

    function register(event){
        event.preventDefault()
        if(registerINFO.password !== registerINFO.pwConfirmation){
            alert('as senhas nao sao iguais')
            setRegisterINFO({...registerINFO, password:'', pwConfirmation:''})
            return
        }
        const URL = 'https://projetomywallet.herokuapp.com/sing-up'
        const promise = axios.post(URL, {...registerINFO})
        promise.then( (res) => {setUserINFO(res.data)
                                alert('Registrado')
                                navigate('/')} )
        promise.catch( (err) => {alert('Email Já Registrado')} )
    }

    return(
        <RegisterHTML>
            <h1>MyWallet</h1>
            <form onSubmit={register}>
                <input  type='name' required
                        placeholder={'  Nome'}
                        value={registerINFO.name}
                        onChange={ (e) => setRegisterINFO({...registerINFO, name: e.target.value}) }/>
               <input  type='email' required
                        placeholder={'  Email'}
                        value={registerINFO.email}
                        onChange={ (e) => setRegisterINFO({...registerINFO, email: e.target.value}) }/>
               <input  type='password' required
                        placeholder={'  Senha'}
                        value={registerINFO.password}
                        onChange={ (e) => setRegisterINFO({...registerINFO, password: e.target.value}) }/>
                <input  type='password' required
                        placeholder={'  Confirme a senha'}
                        value={registerINFO.pwConfirmation}
                        onChange={ (e) => setRegisterINFO({...registerINFO, pwConfirmation: e.target.value}) }/>
                <button type="submit">Entrar</button>     
            </form>
            <Link to={`/`}> <span className='logar'> Já tem uma conta? Entre agora!</span> </Link>
        </RegisterHTML>
    )
}

const RegisterHTML = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  #8C11BE ;
    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0em;
        color: #fff;
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
        border: none;
        background-color: #A328D6;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        color: #fff;
        margin-bottom: 50px;
    }
    .logar{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
`