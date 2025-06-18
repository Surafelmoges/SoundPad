import React from 'react'
import './App.css'
import paadD from "./pad"

export default function App({darkMode}) {
  
  const[pads , setPads] = React.useState(paadD)
  const styles = {
   backgroundColor : darkMode ? "#222222" : "blue"
  }
  const disPad = pads.map(padd=>(
     <button style={styles} key={padd.id}></button>

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
