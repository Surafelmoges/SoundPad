import React from 'react'
import './App.css'
import paadD from "./pad"

export default function App() {
  
  const[pads , setPads] = React.useState(paadD)
  const disPad = pads.map(padd=>(
     <button key={padd.id}></button>

  ))

  return (
    <div>
      <main>
        <div className="padCon">
          {disPad}
        </div>
      </main>
    </div>
  )
}
