// Componente Input

import { useState } from "react"


export const InputWraper = ( 
    {
        type, 
        clase, 
        placeholder, 
        id, 
        img,
        onclick,
        name,
        valor,
        onchange
    }) => {
    
  return (
    <>
        <div className="input-wraper" >
            <input 
                type={type} 
                className={clase} 
                placeholder={placeholder} 
                value = {valor}
                onChange = {onchange}
                name = { name }
                autoComplete= "off"
            />
            <img 
                src = {img}
                className = "input-icon"
                id={id}
                onClick = {onclick && onclick}
            />
        </div>
    </>
  )
}
