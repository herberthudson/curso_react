import React from 'react'
import ReactDom from 'react-dom'
import Pai from './componentes/Pai'
// import PrimeiroComponente from './componentes/PrimeirtoComponente'
// import CompA, { CompB as B} from './componentes/DoisComponentes'
// import MultiComponente from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'

const elemento = document.getElementById('root')

ReactDom.render(
    <div>
        {/* <MultiComponente></MultiComponente> */}
        {/* <PrimeiroComponente valor="Bom dia!" /> */}
        {/* {/* <CompA valor="Olá eu sou A!"></CompA> */} 
        {/* {/* <B valor="B na área"></B> */} 
        {/* <Familia sobrenome="Pereira">
            <Membro nome="Andre"/>
            <Membro nome="Mariana"/>
        </Familia> */}
        {/* <FamiliaSilva /> */}
        {/* <ComponenteComFuncao /> */}
        <Pai /> 
    </div>
, elemento
)

