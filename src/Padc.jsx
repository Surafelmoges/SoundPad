import React from 'react'

export default function Padc(props) {
 const [onn, setOnn] = React.useState(props.on)

 function toggle()
 {
   setOnn(prevOn => !prevOn)
 }

 
  return (
     <button style={
        {backgroundColor: props.color}}
        className={onn ? "on" : undefined}
        onClick={toggle}

            ></button>
  )

}