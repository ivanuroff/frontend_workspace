import React, {  useContext } from 'react'
import './App.css'
import 'animate.css';

import WizardContextProvider,  {WizardContext} from './context/'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';
import Step7 from './steps/Step7';
import Step8 from './steps/Step8';





const Wizard = ({ children }) => {
  const pages = React.Children.toArray(children);
  const { currentStep} = useContext(WizardContext);
  const currentPage = pages[currentStep];


  return (
   
    <div className="wizard">
      
      <div className="wizard__content">
        {currentPage}
      </div>
    </div>
  );
}; 

function App() {
  return (
    <WizardContextProvider>
      <Wizard>
                  <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
      <Step7 />
      <Step8 />



      </Wizard>
  
    </WizardContextProvider> 
  )
}

export default App
