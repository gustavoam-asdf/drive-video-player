import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import env from "./config"

console.log(env)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
