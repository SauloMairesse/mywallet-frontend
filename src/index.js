import ReactDOM from "react-dom"
import React from "react"
import App from "./components/App"
import Reset from "./styles/elements/Reset"

ReactDOM.render(<React.StrictMode>
                    <Reset/>
                    <App />
                </React.StrictMode>, document.querySelector('.root'))