import React from 'react'

let isLegal = true

export default (props) => 
    <div>
        <h1>{props.valor}</h1>
        <h2>{1 + 1}</h2>
        <p>{1 + 1}</p>
        <p>Legal? {isLegal ? 'Sim' : 'Não'} </p>
        <p>{Math.random()}</p>
    </div>

