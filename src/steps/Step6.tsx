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


 

function Step6() {
    const { goNextPage, goFinishProcess, typeWokspace, goSelectedWorkplace,workplaceSelected, add, minus, 
        capacity, startDate,
    point, goSelectedPoint, name1 } = useContext( WizardContext )
    const dia = startDate.substring(8,10);
    const hora = startDate.substring(11,13);
    const termino =parseInt( startDate.substring(11,13)) + 1;


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
          
            <div className="space_type">
            Selecciona la zona que necesitas
                <span> {workplaceSelected.name},  {typeWokspace.name},   Personas {capacity}</span>
            </div>
        </div>
        
            <div className="container-blueprint">
                <div className="blueprint">
                    <img className="imagen-blueprint"
                        src="https://i.pinimg.com/originals/29/f1/d7/29f1d7daa015203fff57cecc34588ba5.jpg"
                        alt=" blueprint" />
                {typeWokspace.name === 'Hot Desk' ? (
                    <>
                        <span className="circulo hotdesk1" onClick={goSelectedPoint}> </span>
                        <span className="circulo hotdesk2" onClick={goSelectedPoint}> </span>
                        <span className="circulo hotdesk3" onClick={goSelectedPoint}> </span>
                        <span className="circulo hotdesk4" onClick={goSelectedPoint}> </span>

                    </>
                ):
                (
                    <>
                    <span className="circulo salareunion1" onClick={goSelectedPoint}> </span>
                    <span className="circulo salareunion2" onClick={goSelectedPoint}> </span>
                </>
                )
                }

                </div>
                        <div className="backgroundBluePrint  animate__animated animate__bounce">
                        <h3 className="title">Información de la reserva</h3>
                        <span className="address">Vicuña Mackenna 7110,La Florida, Santiago</span>
                        <div className="date">{dia} de Octubre del 2022</div>
                        <div className="hour">de {hora}:00 a {termino}:00 </div>
                        <div className="repit">
                            <span>Repetir</span>
                            <select>
                                <option value={0}>No se repite</option>
                                <option value={1}>Repetir semanalmente</option>
                                <option value={2}>Repetir una vez al mes</option>
                            </select>
                        </div>
                            <button type={"button"} className='buttonAgregateGuests' onClick={goNextPage}>
                                    <span>Agregar Invitados</span>
                                    <img src={onlyUser} />
                            </button>
    
                            <h3 className="service-title"> Agregar servicios</h3>
                        <div className="services">
    
                            <label  > Almuerzo <input id="Almuerzo" type={"checkbox"} value={"Almuerzo"} /></label>
                            <label   > Proyector <input   id="Proyector" type={"checkbox"} value={"Proyector"} /></label>
                            <label   > Café <input  id="Café"  type={"checkbox"} value={"Café"} /></label>
                            <label > Wifi <input   id="Wifi" type={"checkbox"} value={"Wifi"} /></label>
                            <label > Snack <input   id="Snack" type={"checkbox"} value={"Snack"} /></label>
                            <label > Impresora <input  id="Impresora"  type={"checkbox"} value={"Impresora"} /></label>
                            <label   > Televisor <input   id="Televisor" type={"checkbox"} value={"Televisor"} /></label>
                            <label > Puntero <input   id="Puntero" type={"checkbox"} value={"Puntero"} /></label>
    
    
                        </div>        
                        <button className="botton_action" onClick={goFinishProcess} disabled={name1===''}>  
                            Reservar e Invitar
                        </button>
    
                    </div>
    </div>

        </>

    )
  }
  
  export default Step6