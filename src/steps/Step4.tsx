import { useContext, useState } from "react"

import userWork from '../assets/icons/Usuario_office@2x.png'
import verBook from '../assets/icons/ver-book-1-1x-png@1x.png'
import logoMallPlaza from '../assets/icons/mallplaza.png'
import Header from '../components/Header'

import grupalUser from '../assets/icons/Icono_Grupal.svg';
import onlyUser from '../assets/icons/Icono_Individual.svg';

import oficinaPrivada from '../assets/icons/Oficina Privada.svg';
import pinkBuilder from '../assets/icons/Edificios-corporativos-Pink.png'
import './step.css'
import { WizardContext } from "../context"


function Workspace( props ){
    const { goSelectedWorkplaceMallPlaza, workplaceSelected } = useContext( WizardContext )
  const {name, image} = props;
    return (
        <figure className={"workplace " + (  workplaceSelected.name === name ? 'activate' : '')}>
        <img 
            src={image}
            className="workspace" 
            onClick={()=>{
                goSelectedWorkplaceMallPlaza(name, image)
            }}
            />
        <span>{name}</span>
    </figure>
    )
}
function Step4() {
    const { goNextPage, typeWokspace, goSelectedWorkplace,workplaceSelected, add, minus, capacity } = useContext( WizardContext )

    const workplaces = [
        {
            name:'Mallplaza Los Dominicos',
            uri:'https://images.ctfassets.net/gxc4u4llwrnk/wFKH1e7Hyl7YJtcUNqcCD/6f59abf39c8972c9f3e133a9e5863a10/LOS_DOMINICOS.jpeg'
        },        {
            name:'Mallplaza Vespucio',
            uri:'https://images.ctfassets.net/gxc4u4llwrnk/2qAiJ1TQNxpFYJG3D6Wrk4/6d233e777ae1a5ba2e09fce6043874f7/VESPUCIO.jpeg'
        },        {
            name:'Mallplaza Trébol',
            uri:'https://images.ctfassets.net/gxc4u4llwrnk/5CwUUtFIkWcJHSIw1gmzGt/a14c4838863a88a7d5c067106c105770/TR__BOL.jpeg'
        }
    ]
    return (
        <>
        <Header /> 
        <div>
          
             <img src={typeWokspace.image} className="user_type individual"  />

            <div className="space_type">
                Haz elegido una {typeWokspace.name}
                <span> Escoge el espacio que se adapte a tu equipo de trabajo</span>
            </div>
        </div>

        <div className="button_group">
            {
                workplaces.map( w => {
                    return (
                        <Workspace 
                                image={w.uri}
                                name={w.name}

                                />
                    )
                })
            }
        </div>

        <div className="filters">
                <div className="number-people-container">
                    <div className="icon-filter-people">
                        <img src={onlyUser} alt="" className="iconUser" />
                    </div> 
                    Personas
                    <button className="minus"onClick={minus} >  - </button>
                     <input name="numberPeople" type="text" value={capacity} className="number-people"  /> 
                     <button className="add" onClick={add} >+</button>
                </div>

                <div className="number-people-container">
                   <span>Estacionamientos</span> 
                    <input type={"checkbox"} disabled className="park"/>
                </div>

        </div>

                <button className="botton_action" onClick={goNextPage}>  
                        Iniciamos la busqueda
                    </button>

        </>

    )
  }
  
  export default Step4