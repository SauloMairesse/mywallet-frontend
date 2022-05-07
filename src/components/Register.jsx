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
        const URL = 'http://localhost:5000/sing-up'
        const promise = axios.post(URL, {...registerINFO})
        promise.then( (res) => {setUserINFO(res.data)
                                alert('Registrado')
                                navigate('/')} )
        promise.catch( (err) => {console.log('Erro register:\n', err)} )
    }

    return(
        <RegisterHTML>
            <h1>MyWallet</h1>
            <form onSubmit={register}>
                <input  type='name' 
                        placeholder={'Nome'}
                        value={registerINFO.name}
                        onChange={ (e) => setRegisterINFO({...registerINFO, name: e.target.value}) }/>
               <input  type='email' 
                        placeholder={'Email'}
                        value={registerINFO.email}
                        onChange={ (e) => setRegisterINFO({...registerINFO, email: e.target.value}) }/>
               <input  type='password' 
                        placeholder={'Senha'}
                        value={registerINFO.password}
                        onChange={ (e) => setRegisterINFO({...registerINFO, password: e.target.value}) }/>
                <input  type='password' 
                        placeholder={'Confirme a senha'}
                        value={registerINFO.pwConfirmation}
                        onChange={ (e) => setRegisterINFO({...registerINFO, pwConfirmation: e.target.value}) }/>
                <button type="submit">Entrar</button>     
            </form>
            <Link to={`/`}> <span> Já possui Conta ? Login</span> </Link>
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
        font-size: 32px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0em;
        color: #fff;
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