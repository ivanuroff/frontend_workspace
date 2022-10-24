import { useContext, useState } from "react"
 

import userWork from '../assets/icons/Usuario_office@2x.png'
import verBook from '../assets/icons/ver-book-1-1x-png@1x.png'
import logoMallPlaza from '../assets/icons/mallplaza.png'
import Header from '../components/Header'

import grupalUser from '../assets/icons/Icono_Grupal.svg';
import onlyUser from '../assets/icons/Icono_Individual.svg';


import './step.css'
import { WizardContext } from "../context"

function Step5() {
    const { capacity, workplaceSelected , typeWokspace, selectedDate} = useContext( WizardContext )

    return (
        <>
        <Header /> 
            <div className="space_type">
            Escoge el bloque de espacio disponible
                <span> Indiquenos para ofrecerle los espacios que esten listos para trabajar</span>
            </div>

            <div className="backgroundSkyBlue">
                <div className="headerName">
                    <div>   </div>
                    <div>   </div>
                    <div>  Octubre 17 - 23, 2022</div>
                    <div className="filterSearch">
                        {workplaceSelected.name},  {typeWokspace.name},   Personas {capacity}
                    </div>

                </div>


                <table>
                    <tr>
                        <td className="celda header"></td>
                        <td className="celda header">Lun 17/10</td>
                        <td className="celda header">Mar 18/10</td>
                        <td className="celda header">Mie 19/10</td>
                        <td className="celda header">Jue 20/10</td>
                        <td className="celda header">Vie 21/10</td>
                        <td className="celda header">Sáb 22/10</td>
                        <td className="celda header">Dom 23/10</td>
                    </tr>

                    <tr>
                        <td className="celda time">09:00</td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        
                    </tr>

                    <tr>
                        <td className="celda time">10:00</td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-19T10:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-20T10:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-21T10:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        
                    </tr>

                    <tr>
                        <td className="celda time">11:00</td>
                        <td className="celda"></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-18T11:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-19T11:00:00.000Z')} className="link" >Disponible</a></td>                        
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-20T11:00:00.000Z')} className="link" >Disponible</a></td>                        
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-21T11:00:00.000Z')} className="link" >Disponible</a></td>                        
                        <td className="celda"></td>                        
                        <td className="celda"></td>
                        
                    </tr>

                    <tr>
                        <td className="celda time">12:00</td>
                        <td className="celda"></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-18T12:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-19T12:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda"></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-21T12:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        
                    </tr>

                    <tr>
                        <td className="celda time">13:00</td>
                        <td className="celda"></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-18T13:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda"></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-20T13:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-21T13:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        
                    </tr>

                    <tr>
                        <td className="celda time">14:00</td>
                        <td className="celda"></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-18T14:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-21T14:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        
                    </tr>

                    <tr>
                        <td className="celda time">15:00</td>
                        <td className="celda"></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-18T15:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-19T15:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-20T15:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-21T15:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        
                    </tr>

                    <tr>
                        <td className="celda time">16:00</td>
                        <td className="celda"> </td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-18T16:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-19T16:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-20T16:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-21T16:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        
                    </tr>

                    <tr>
                        <td className="celda time">17:00</td>
                        <td className="celda"></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-18T17:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-19T17:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-20T17:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-21T17:00:00.000Z')} className="link" >Disponible</a></td>
                         <td className="celda"></td>
                        <td className="celda"></td>
                        
                    </tr>

                    <tr>
                        <td className="celda time">18:00</td>
                        <td className="celda"></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-18T18:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-18T18:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-18T18:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda avalaible"><a href="#" onClick={()=>selectedDate('2022-10-18T18:00:00.000Z')} className="link" >Disponible</a></td>
                        <td className="celda"></td>
                        <td className="celda"></td>
                        
                    </tr>
                </table>
            </div>

        </>

    )
  }
  
  export default Step5