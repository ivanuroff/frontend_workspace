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


 

function Step7() {
    const { goNextPage, goPrevPage, typeWokspace, goSelectedWorkplace,workplaceSelected, add, minus, 
        capacity, startDate,
    point, goSelectedPoint,
    name1, lastname1, email1,
    setName1, setLastname1, setEmail1,
    name2, lastname2, email2,
    setName2, setLastname2, setEmail2,

    name3, lastname3, email3,
    setName3, setLastname3, setEmail3,

    name4, lastname4, email4,
    setName4, setLastname4, setEmail4,


} = useContext( WizardContext )
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
        <div className="opacity">
        <div className="modal">
            <div className="title_modal">Listado de Invitados</div>
            <div className="detalle">
                {typeWokspace.name} para {dia} de Octubre
            </div>
            <div className="recuadro">
                <div className="header_guest"> Ingrese detalle de la reunión o el evento</div>
                <input type={"text"} className="asunto" />
                <table>
                    <tr><td>Nombre</td><td>Apellidos</td><td>Email</td></tr>
                    <tr>
                        <td>
                            <input type={"text"} 
                                        className="input_guest" 
                                        value={name1} 
                                        onChange={(e)=>setName1( e.target.value)} /></td>
                        <td> <input type={"text"} 
                                        className="input_guest" 
                                        value={lastname1} 
                                        onChange={(e)=>setLastname1( e.target.value)} /></td>
                        <td> <input type={"text"} 
                                        className="input_guest" 
                                        value={email1} 
                                        onChange={(e)=>setEmail1( e.target.value)} /></td>
                    </tr>
                
                    <tr>
                        <td>
                            <input type={"text"} 
                                        className="input_guest" 
                                        value={name2} 
                                        onChange={(e)=>setName2( e.target.value)} /></td>
                        <td> <input type={"text"} 
                                        className="input_guest" 
                                        value={lastname2} 
                                        onChange={(e)=>setLastname2( e.target.value)} /></td>
                        <td> <input type={"text"} 
                                        className="input_guest" 
                                        value={email2} 
                                        onChange={(e)=>setEmail2( e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>
                            <input type={"text"} 
                                        className="input_guest" 
                                        value={name3} 
                                        onChange={(e)=>setName3( e.target.value)} /></td>
                        <td> <input type={"text"} 
                                        className="input_guest" 
                                        value={lastname3} 
                                        onChange={(e)=>setLastname3( e.target.value)} /></td>
                        <td> <input type={"text"} 
                                        className="input_guest" 
                                        value={email3} 
                                        onChange={(e)=>setEmail3( e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td>
                            <input type={"text"} 
                                        className="input_guest" 
                                        value={name4} 
                                        onChange={(e)=>setName4( e.target.value)} /></td>
                        <td> <input type={"text"} 
                                        className="input_guest" 
                                        value={lastname4} 
                                        onChange={(e)=>setLastname4( e.target.value)} /></td>
                        <td> <input type={"text"} 
                                        className="input_guest" 
                                        value={email4} 
                                        onChange={(e)=>setEmail4( e.target.value)} /></td>
                    </tr>

                </table>
                <button className="botton_action confirm" onClick={goPrevPage}>  
                            Confirmar Equipo
                        </button>
            </div>

        </div>
        </div>
        <div>
          
            <div className="space_type">
            Haz click en la zona seleccionada
                <span> {workplaceSelected.name},  {typeWokspace.name},   Personas {capacity}</span>
            </div>
        </div>
        
            <div className="container-blueprint">
                <div className="blueprint">
                    <img className="imagen-blueprint"
                        src="https://i.pinimg.com/originals/29/f1/d7/29f1d7daa015203fff57cecc34588ba5.jpg"
                        alt=" blueprint" />
                {typeWokspace.name}
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
                {
                    point !== 0 && (
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
                        <button className="botton_action" onClick={goNextPage}>  
                            Reservar e Invitar
                        </button>
    
                    </div>
                    )
                }
    </div>

        </>

    )
  }
  
  export default Step7