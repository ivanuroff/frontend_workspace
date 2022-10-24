import { useContext, useState } from "react"

import userWork from '../assets/icons/Usuario_office@2x.png'
import verBook from '../assets/icons/ver-book-1-1x-png@1x.png'
import logoMallPlaza from '../assets/icons/mallplaza.png'
import Header from '../components/Header'

import grupalUser from '../assets/icons/Icono_Grupal.svg';
import onlyUser from '../assets/icons/Icono_Individual.svg';


import './step.css'
import { WizardContext } from "../context"

function Step2() {
    const {    
        typeWorkspaceIndividual,
        typeWorkspaceGrupal,
    type} = useContext( WizardContext )
        
    return (
        <>
        <Header /> 
            <div className="space_type">
                ¿El espacio es individual o grupal?
                <span> Indiquenos para ofrecerle los espacios que esten listos para trabajar</span>
            </div>

        <div className="button_group">
            <figure>
                <img src={onlyUser} className="user_type" />
                <button className="botton_action" onClick={typeWorkspaceIndividual}>  
                   Individual
                </button>
            </figure>


            <figure>
                <img src={grupalUser} className="user_type groupal"  onClick={typeWorkspaceIndividual}/>
                <button className="botton_action"
                onClick={typeWorkspaceGrupal}>  
                   Grupal
                </button>
            </figure>
        </div>

        </>

    )
  }
  
  export default Step2