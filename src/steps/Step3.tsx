import { useContext, useState } from "react"

import userWork from '../assets/icons/Usuario_office@2x.png'
import verBook from '../assets/icons/ver-book-1-1x-png@1x.png'
import logoMallPlaza from '../assets/icons/mallplaza.png'
import Header from '../components/Header'
import grupalUser from '../assets/icons/Icono_Grupal.svg';
import individualUser from '../assets/icons/Icono_Individual.svg';


import oficinaPrivada from '../assets/icons/Oficina Privada.svg';
import salaCapacitaciones from '../assets/icons/Sala de Capacitaciones.svg';
import salaReuniones from '../assets/icons/Sala de Reuniones.svg';
import hotDesk from '../assets/icons/HotDeks.svg';
import azotea from '../assets/icons/Azotea.svg';

import onlyUser from '../assets/icons/Icono_Individual.svg';


import './step.css'
import { WizardContext } from "../context"


function Subworkspace( props ){
    const { goNextPage, goSelectedWorkspace } = useContext( WizardContext )

return (
    <figure>
                <button className="subworkspace_type" onClick={()=>{
                    goSelectedWorkspace(props.name, props.image)
                    goNextPage()
                }
                }>  
                    <img src={props.image} className="user_type" />
                    <span>{props.name}</span>
                </button>
            </figure>
);
}
function Step3() {
    const { type } = useContext( WizardContext )
        
    return (
        <>
        <Header /> 
        <div>
            {type === 1 ? (
             <img src={grupalUser} className="user_type groupal"  />
            ) :
            (
                <img src={individualUser} className="user_type individual"  />
            )}

            <div className="space_type">
                Elige el tipo de sub espacio para tu equipo
                <span> Escoge el espacio que se adapte a tu equipo de trabajo</span>
            </div>
        </div>


        {type === 0 ? (
        <div className="subworkspaces">
            <Subworkspace name="Oficina Privada"  image={oficinaPrivada}/>
                <Subworkspace name="Sala Reuniones"  image={salaReuniones}/>
                <Subworkspace name="Hot Desk"  image={hotDesk}/>
            </div>

        ):
        (
            <div className="subworkspaces">
            <Subworkspace name="Oficina Privada"  image={oficinaPrivada}/>
            <Subworkspace name="Sala Reuniones"  image={salaReuniones}/>
            <Subworkspace name="Hot Desk"  image={hotDesk}/>
            <Subworkspace name="Sala de Capacitaciones"  image={salaCapacitaciones}/>
            <Subworkspace name="Azotea"  image={azotea}/>
            </div>

        )}
        </>

    )
  }


  
  export default Step3