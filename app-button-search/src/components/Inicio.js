import React, { useRef, useState } from 'react'
import { InputWraper } from './InputWraper'
import search from '../img/search.svg'
import imgpassword from '../img/eye.svg'


export const Inicio = () => {
    const [value, setValue] = useState('')
    const [password, setPassword] = useState('')

    const clickSearch = (e) => {
        console.log (value)
    }

    const clickPassword = (e) => {
        const campo = e.target.previousSibling
        if ( campo.type === 'password') {
            campo.type = 'text'
        } else {
            campo.type = 'password'
        }
    }
    console.log (passwordRef)

    return (
        <>
            <div className = 'container'>
                <h1>Ejemplo de Formulario con React</h1>
                <InputWraper 
                    type ="search"
                    clase = "input"
                    placeholder = 'Ingrese un texto'
                    id = "input-search"
                    img = {search}
                    onclick = {clickSearch}
                    name = 'name'
                    valor = {value}
                    onchange = { (e) => setValue (e.target.value) }
                />
                <InputWraper 
                    type ='password'
                    clase = "input"
                    placeholder = 'Contraseña'
                    id = "input-pass"
                    img = {imgpassword}
                    onclick = {clickPassword}
                    name = 'password'
                    valor = {password}
                    onchange = { (e) => setPassword (e.target.value) }
                />
            </div>
        </>
    )
}
