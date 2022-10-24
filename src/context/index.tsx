import React, { useState, createContext } from "react";

export const WizardContext = createContext({});

const WizardContextProvider: React.FC = ({ children }) => {
  const [type, setType] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');




  const [capacity, setCapacity] = useState(1);

  const [point, setPoint]=useState(0);


  const [currentStep, setCurrentStep] = useState(0);
  const [typeWokspace, setTypeWorkspace] =useState({
    name:"Oficina Privada",
    image:'../assets/icons/Oficina Privada.svg',

  })

  const [workplaceSelected, setWorkplaceSelected] = useState({
    name:'Mallplaza Los Dominicos',
    url:'https://images.ctfassets.net/gxc4u4llwrnk/wFKH1e7Hyl7YJtcUNqcCD/6f59abf39c8972c9f3e133a9e5863a10/LOS_DOMINICOS.jpeg'
  })


  const [name1, setName1] = useState('');
  const [lastname1, setLastname1] = useState('');
  const [email1, setEmail1] = useState('');


  const [name2, setName2] = useState('');
  const [lastname2, setLastname2] = useState('');
  const [email2, setEmail2] = useState('');


  const [name3, setName3] = useState('');
  const [lastname3, setLastname3] = useState('');
  const [email3, setEmail3] = useState('');


  const [name4, setName4] = useState('');
  const [lastname4, setLastname4] = useState('');
  const [email4, setEmail4] = useState('');

  const selectedDate = (date: string) =>{
    setStartDate( date );
    setEndDate( date );
    setStartHour( date )
    setEndHour( date )

    goNextPage();

  }
  const goSelectedWorkplaceMallPlaza = (name: string, url: string) =>{
    setWorkplaceSelected({
        name, url
    })
  }

  const goSelectedPoint = ( subworkspace : number) =>{
    setPoint(
        subworkspace
    )
  }

  const goSelectedWorkplace = (name: string, url: string) =>{
    setTypeWorkspace({
        name, url
    })
  }

  const goSelectedWorkspace = ( name: string, image: any) => {
    setTypeWorkspace({
        name,
        image
    });
  };
  const goNextPage = () => {
    setCurrentStep((index) => index + 1);
  };
  const goFinishProcess = () => {
    setCurrentStep((index) => index + 2);
  };

  const goInitialProcess = () => {
    setCurrentStep((index) => 0);
  };
  const goPrevPage = () => {
    setCurrentStep((index) => index - 1);
  };

  const add = () => {
    setCapacity((index) => index + 1);
  };

  const minus = () => {
    setCapacity((index) => index - 1);
  };

  const typeWorkspaceIndividual = ()=>{
    setType( 0 )
    goNextPage()
  }
  const typeWorkspaceGrupal = ()=>{
    setType( 1 )
    goNextPage()

  }
  return (
    <WizardContext.Provider
      value={{
        goNextPage,
        goPrevPage,
        typeWorkspaceIndividual,
        typeWorkspaceGrupal,
        goSelectedWorkspace,
        goSelectedWorkplace,
        goSelectedWorkplaceMallPlaza,
        add,
        minus, 
        selectedDate,
        goSelectedPoint,
        goFinishProcess,
        goInitialProcess,
        
        currentStep,
        type,
        typeWokspace,
        workplaceSelected,
        capacity,
        startDate,
        endDate,
        startHour,
        endHour,
        point,
        name1, lastname1, email1,
        setName1, setLastname1, setEmail1,
        name2, lastname2, email2,
        setName2, setLastname2, setEmail2,
    
        name3, lastname3, email3,
        setName3, setLastname3, setEmail3,
    
        name4, lastname4, email4,
        setName4, setLastname4, setEmail4,

      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export default WizardContextProvider;
