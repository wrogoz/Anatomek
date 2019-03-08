import React from 'react';
import SystemBasicComponent from './SystemBasicComponent/systemBasicComponent'
import digestiveSystem from './images/digestiveSystem.svg'
const DigestiveSystem=()=>{
    return(
        <SystemBasicComponent 
        imgSrc={digestiveSystem}
        systemName="Układ pokarmowy"
        description="
        Składa się z organów, które współgrając ze sobą, 
        umożliwiają trawienie pokarmu i wchłanianie substancji odżywczych. Składa się z jamy ustnej,
         gardła, przełyku, żołądka, jelita cienkiego i grubego, a także gruczołów trawiennych: wątroby i trzustki, 
         które wydzielają substancje konieczne do przetwarzania składników pokarmowych.
         Zbędne produkty przemiany materii są natomiast usuwane przez układ wydalniczy." 
/>
    )
}
export default DigestiveSystem