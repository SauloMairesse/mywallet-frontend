import React from "react"
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'
import usuarioINFO from "../contexts/userINFO"
import axios from "axios"

export default function Output(){

    const {userINFO} = React.useContext(usuarioINFO)

    const [outputINFO, setOutputINFO] = React.useState({value: '',
                                                    description: ''})
    const navigate = useNavigate()

    function registerOutput(event){
        event.preventDefault();
        const URL = 'http://localhost:5000/output'
        const headers = {headers:{User: userINFO.name}}
        const promise = axios.post(URL, {...outputINFO}, headers)
        promise.then( (res) => {alert('Deu Certo Output, olhe console')
                                console.log(res.data)
                                navigate('/home')})
        promise.catch( (err) => {console.log('Erro Output:\n', err)} )
    }

    return (
        <OutputHTML>
            <h1>Nova saída</h1>
            <form onSubmit={registerOutput}>
                    <input  type='number' required
                            placeholder={'Valor'}
                            value={outputINFO.value}
                            onChange={ (e) => setOutputINFO({...outputINFO, value: e.target.value}) }/>
                    <input  type="text" maxLength={30} required
                            placeholder={'Descrição'}
                            value={outputINFO.description}
                            onChange={ (e) => setOutputINFO({...outputINFO, description: e.target.value}) }/>
                    <button type="submit">Salver saída</button>     
            </form>
        </OutputHTML>
        )
}

const OutputHTML = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:  #8C11BE ;
    *{
        box-sizing: border-box;
    }
    h1{
        width: 326px;
        font-size: 26px;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0em;
        color: #fff;
        text-align: left;
        padding: 18px 0 30px 0;
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
        border: none;
    }
    input[type='number'] {
    -moz-appearance:textfield;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`