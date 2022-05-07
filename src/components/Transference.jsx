import React from "react"
import usuarioINFO from "../contexts/userINFO"
import axios from "axios"

export default function Transference(){

    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)

    const [transfers, setTransfers] = React.useState([])

    React.useEffect( () => {
        const URL = 'http://localhost:5000/sing-in'
        const promise = axios.get(URL, config)
        promise.then( (response) => { setListHabits(response.data)} )
        promise.catch( (err) => console.log(err))   }   ,[])
    
    return(
        <TransferenceHTML>
            Não há registros de
            entrada ou saída
        </TransferenceHTML>
    )
}

const HomeHTML = styled.main`
        display: flex;
        flex-direction: column;
        height: 446px;
        width: 326px;
        border-radius: 5px;
        background-color: #fff;
`