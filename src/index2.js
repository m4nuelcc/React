import React from 'react'
import ReactDOM from 'react-dom'

function Parrafo() {
return <p> y aquí letras </p>
}
function Título(props){

return <h1> {props.textos} </h1>
}

function Boton1(props){
    let mensaje = props.textoBoton === 'guardar' ? 'hola' : 'adios'
    return (<button
    onClick={ () => alert(mensaje)
    }>{props.textoBoton}</button>)
    }
    
function Todo(){
let nombre = 'Manuel'
return (
<div>
<Parrafo />
<Título  textos={nombre} />
<hr/> 

<Boton1 textoBoton="guardar" />
<Boton1 textoBoton="borrar" />
<Boton1 textoBoton="borrar" />
</div>
)
}
ReactDOM.render(<Todo/>,document.getElementById('root'))
