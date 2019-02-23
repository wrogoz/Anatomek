import React from 'react';
import SystemBasicComponent from './SystemBasicComponent/systemBasicComponent'
import nervousSystem from './images/nervousSystem.svg'
const NervousSystem=(props)=>{
    return(
        <SystemBasicComponent 
        imgSrc={nervousSystem}
        description="
        Układ nerwowy – kontroluje zarówno czynności świadome organizmu (ruchy mięśni),
         jak i nieświadome (w tym oddychanie), odbiera bodźce ze świata zewnętrznego i przetwarza 
         zawarte w nich informacje. Układ nerwowy ośrodkowy (centralny) składa się
          z mózgowia i rdzenia kręgowego, układ nerwowy obwodowy to nerwy czaszkowe i rdzeniowe.
         Czynnościami narządów wewnętrznych steruje autonomiczny układ nerwowy." 
        />
    )
}
export default NervousSystem