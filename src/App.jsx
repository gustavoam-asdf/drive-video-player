import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
      <div className="p-6 max-w-sm mx-auto bg-slate-700 rounded-xl shadow-lg flex items-center space-x-4">
        <div className="text-xl font-medium text-yellow-200">ChitChat</div>
        <p className="text-red-400">You have a new message!</p>
      </div>
    </main>
  )
}
