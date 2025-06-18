import React from 'react'
import './App.css'
import paadD from "./pad"
import Padc from './Padc'

export default function App({darkMode}) {
  
  const[pads , setPads] = React.useState(paadD)
  const styles = {
    backgroundColor : darkMode ? "red" : "Orange"
  }
  const disPad = pads.map(padd=>(
    <Padc key={padd.id} color={Padc.color}/>

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
