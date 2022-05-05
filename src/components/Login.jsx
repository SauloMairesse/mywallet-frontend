import React from "react"
 
export default function Login(){

    const [loginINFO, setLoginINFO] = React.useState({  email: '',
                                                        senha: ''})
    function actionOnSubmit(){
        alert('deu Certo aqui')
    }
    return (
        <>
            <h1>Iniciando projeto</h1>
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
            <h2>E o footer?</h2>
        </>
        )
}