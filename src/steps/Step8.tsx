import { useContext, useEffect, useState } from "react"
import {WizardContext} from '../context/index'
import userWork from '../assets/icons/Usuario_office@2x.png'
import verBook from '../assets/icons/ver-book-1-1x-png@1x.png'
import ok from '../assets/icons/Reserva confirmada.png'
import Header from '../components/Header'

import axios from "axios";


import './step.css'


function Step8() {
    const { goNextPage, goPrevPage, goSelectedWorkplace,workplaceSelected,
        currentStep,
        type,
        typeWokspace,
        capacity,
        startDate,
        endDate,
        startHour,
        endHour,
        point,
        name1, lastname1, email1,
        name2, lastname2, email2,
        name3, lastname3, email3,
        name4, lastname4, email4,
        goInitialProcess


} = useContext( WizardContext )

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);

useEffect(() => {
    axios.post("http://localhost:5001/api/guests/reserveWorkplace/320/2479", {
        "userName": "Iván",
        "userLastName": "Peters",
        "userEmail": "ivan@uroff.net",
        "userPhone": "+56 9 3540 5520",
        "dates": [],
        "startDate": startDate,
        "endDate": endDate,
        "typeRate": 0,
        "codeCoupon": "",
        "startHour": startHour,
        "endHour": endHour,
        "repeat_week": 0,
        "description": "Te invito a nuestra proxima reunion con el equipo de Uroff",
        "guests": [
            {
                "name": name1,
                "lastname":lastname1,
                "email": email1,
                "phone": "+56936298055"
            },
            {
                "name": name2,
                "lastname": lastname2,
                "email": email2,
                "phone": "+56936298055"
            },
            {
                "name": name3,
                "lastname": lastname3,
                "email": email3,
                "phone": "+56936298055"
            },
            {
                "name": name4,
                "lastname": lastname4,
                "email": email4,
                "phone": "+56936298055"
            }
        ]
    })
      .then(res => res)
      .then(
        (result) => {
          setIsLoaded(true); 
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
 
   
  if (error) {
    return <div>Error: {error}</div>;
  }else {
    return (        <>
        <Header /> 
            <div className="title">Felicidades</div>
            <div className="company finish">
                <div className="name">Espacio Reservado</div>
            </div>
            <img src={ok} />
            <div className="disclamer_initial"> 
                <span> Hemos enviado correo a tus invitados</span>
            </div>
            { !isLoaded && (<div>......</div>)}
            <button className="botton_action" onClick={goInitialProcess}>  
                    Solicitar nueva reserva 
            </button>
        </>
    );
  }
  }
  
  export default Step8