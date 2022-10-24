import { useContext, useState } from "react"
import {WizardContext} from '../context/index'
import userWork from '../assets/icons/Usuario_office@2x.png'
import verBook from '../assets/icons/ver-book-1-1x-png@1x.png'
import logoMallPlaza from '../assets/icons/mallplaza.png'
import Header from '../components/Header'

import './step.css'


function Step1() {
 const {    
    goNextPage,
    goPrevPage, 
    currentStep } = useContext( WizardContext )
    return (
        <>
        <Header /> 
            <div className="title">Bienvenidos a tus espacios</div>
            <div className="company">
                <div className="name">Mall Plaza</div>
                <figure className="logo_company">
                    <img src={logoMallPlaza} />
                </figure>
            </div>
            <div className="disclamer_initial">
                Reserva el espacio que necesitas
                <span> Comencemos con un click la búsqueda de tu espacio de trabajo</span>
            </div>

            <button className="botton_action" onClick={goNextPage}>  
                    Solicitar nueva reserva 
            </button>
        </>

    )
  }
  
  export default Step1