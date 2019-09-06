import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Home} from './GestionProductos'
import {BrowserRouter, Route} from 'react-router-dom'
import Test from './components/Test'

export const productos = [
    { nombre: 'Prod 1', precio: 23, seccion: 'A' },
    { nombre: 'Prod 2', precio: 235, seccion: 'A' },
    { nombre: 'Prod 3', precio: 56, seccion: 'B' },
    { nombre: 'Prod 4', precio: 232323, seccion: 'C' }

]
class Bienvenida extends React.Component{
    render(){
        return <div>
            Holaaaaaaa karakola
        </div>
    }
}

const rutas =(
    <BrowserRouter>
    <Route exact path="/" component={Bienvenida}/>
    <Route path="/productos" component={Home}/>
    <Route path="/test" component={Test}/>

    </BrowserRouter>
)
ReactDOM.render(rutas,document.getElementById('root'))