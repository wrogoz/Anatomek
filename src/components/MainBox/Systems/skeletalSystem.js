import React from 'react';
import SystemBasicComponent from './SystemBasicComponent/systemBasicComponent'
import skeletalImg from './images/skeletalImg.svg'
const SkeletalSystem=()=>{
    return(
        <SystemBasicComponent 
        imgSrc={skeletalImg}
        systemName="Układ szkieletowy"
        description="
         Szkielet stanowi podporę twojego ciała. Tworzy go ponad 200 kości! Kości są wprawiane w ruch przez ponad 400 mięśni.
         Z kolei by kości mogły zmieniać położenie względem siebie, funkcjonują między innymi specjalne ruchome połączenia - stawy." 
/>
    )
}
export default SkeletalSystem
