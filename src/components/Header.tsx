import { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react';

import './header.css';

import logoUroff from '../assets/icons/logoWorkspaces.png'

import 'animate.css'
import 'font-awesome/css/font-awesome.min.css';
import WizardContextProvider, { WizardContext } from "../context";

function Header() {

    const {
        goPrevPage,
        currentStep
    } = useContext(WizardContext)
    return (
            <div className="logo">
                <img
                    className="logo_horizontal animate__animated animate__bounce"
                    src={logoUroff}
                    alt="Logo_uroff_orizontal"
                />
                {currentStep !== 0 && (
                <div className="arrowBack">
                        <Icon icon="fa:arrow-left" onClick={goPrevPage} />
                    </div> 
                )}
</div>

    )
  }
  
  export default Header