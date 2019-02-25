import React from 'react';
import SystemBasicComponent from './SystemBasicComponent/systemBasicComponent'
import respiratorySystem from './images/respiratorySystem.svg'
const RespiratorySystem=()=>{
    return(
        <SystemBasicComponent 
        imgSrc={respiratorySystem}
        systemName="Układ oddechowy"
        description="
        służy do pobierania tlenu i przekazywania go do układu krwionośnego.
         Krew roznosi tlen do każdej żywej komórki.
        Układ ten zbudowany jest m.in. z krtani, gardła, jamy nosowej, oskrzeli i płuc.
        kład oddechowy to jeden z bardzo ważnych układów ludzkiego organizmu.
        Dzięki wymianie gazowej tak naprawdę możliwe jest zachowanie procesów życiowych
         takich jak wyczuwanie zapachów czy tworzenie mowy." 
/>
    )
}
export default RespiratorySystem