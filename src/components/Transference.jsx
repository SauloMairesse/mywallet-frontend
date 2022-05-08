import React from "react"
import usuarioINFO from "../contexts/userINFO"
import axios from "axios"
import styled from 'styled-components'

export default function Transference(){

    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)
    const [userTransfers, setUserTransfers] = React.useState([])
    const [sum, setSum] = React.useState(0)

    React.useEffect( () => {
        const config = {headers: { User: userINFO.name}}
        const URL = 'http://localhost:5000/transference'
        const promise = axios.get(URL, config)
        promise.then( (response) => {console.log('Deu certo get transferencias',response.data) 
                                    setUserTransfers(...userTransfers, response.data)} )
        promise.catch( (err) => console.log('Deu Erro get transferencias',err))   }   ,[])
    
    function Transfer(props){
        React.useEffect( () => {
            setSum( sum + props.value)
        } ,[])
        
        return(
            <TransferHTML>
                <aside>
                    <h2>{props.date}</h2>
                    <h3>{props.description}</h3>
                </aside> 
                <h4 className={props.type }>{props.value}</h4>
            </TransferHTML>
        )
    }
    if(userTransfers.length === 0){
        return(
            <TransferencesHTML>
                <h5>Não há registros de entrada ou saída</h5>
            </TransferencesHTML>
        )
    }else{
        return(
            <TransferencesHTML>
                {userTransfers.map( (transfer) =>  <Transfer  value={transfer.value}
                                                            date={transfer.date}
                                                            description={transfer.description}
                                                            type={transfer.type}/> )}
            </TransferencesHTML>
        )
    }
}

const TransferencesHTML = styled.section`
        display: flex;
        flex-direction: column;
        height: 446px;
        width: 326px;
        border-radius: 5px;
        background-color: #fff;
        *{
            box-sizing: border-box;
        }
        h5{
            display: flex;
            position: relative;
            height: 60px;
            width: 240px;
            left: 44px;
            top: 170px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            color: #868686;
        }
        span{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            color: #868686;
        }
`
const TransferHTML = styled.article`
        display: flex;
        width: 100%;
        padding: 10px 5px 10px 10px;
        justify-content: space-between;
        *{
           box-sizing: border-box;
        }
        h2, h3, h4{
            align-items: flex-start;
            display: flex;
            font-family: 'Raleway';
            font-style: normal;
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 0em;
            margin-right: 4px;
            text-align: left;
        }
        h2{
            padding-right: 5px;
            color:#C6C6C6;
            text-align: left;
        }
        h3{
            font-style: normal;
            color: #000000;
            text-align: left;
        }
        h4{
            text-align: right;
        }
        .output{ color: #C70000 }
        .entry{ color: #03AC00 }
        aside{
            display: flex;
        }
`