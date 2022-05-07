import React from "react"
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'
import usuarioINFO from "../contexts/userINFO"

export default function Home(){
    const navigate = useNavigate()
    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)
    
    function transference(transferType){
        navigate(`/${transferType}`)
    }
    return (
        <HomeHTML>
            <header>
            <h1>Olá, {userINFO.name}</h1>
            <ion-icon name="log-out-outline"></ion-icon>
            </header>
           <section>
                Não há registros de
                entrada ou saída
           </section>
            <div>
                <button  onClick={() => transference('entry')}>
                    <ion-icon   name="add-circle-outline"/>
                    <span>Nova entrada</span>
                </button>
                <button onClick={() => transference('output')}> 
                    <ion-icon   name="remove-circle-outline"/>
                    <span>Nova saída</span>
                </button>
            </div>
        </HomeHTML>
        )
}

const HomeHTML = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:  #8C11BE ;
    *{
        box-sizing: border-box;
    }
    header{
        display: flex;
        width: 326px;
        justify-content: space-between;
        align-items: center;
        justify-items: left;
        padding: 10px 0 10px 0 ;
    }
    h1{
        font-size: 26px;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0em;
        color: #fff;
    }
    section{
        height: 446px;
        width: 326px;
        border-radius: 5px;
        background-color: #fff;
    }
    div{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        width: 326px;
        padding-top: 12px;
    }
    button{
        display: flex;
        height: 114px;
        width: 155px;
        border-radius: 5px;
        background-color: #A328D6;
        border: none;
    }
    ion-icon{
        position: relative;
        color: #fff;
        font-size: 25px;
        left: 10px;
        top: 10px;
    }
    span{
        position: relative;
        text-align: left;
        font-family: Raleway;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        color: #FFFFFF;
        width: 64px;
        height: 40px;
        left: -10px;
        top: 60px;
    }
`