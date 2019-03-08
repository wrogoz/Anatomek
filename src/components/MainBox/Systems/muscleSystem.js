import React from 'react';
import SystemBasicComponent from './SystemBasicComponent/systemBasicComponent'
import muscleSystem from './images/muscleSystem.svg'
const MuscleSystem=()=>{
    return(
        <SystemBasicComponent 
        imgSrc={muscleSystem}
        systemName="Układ mięśniowy"
        description="
         Chodzisz, biegasz, skaczesz, oddychasz, mrużysz oczy, mówisz - to wszystko dzieje się za sprawą mięśni.
         Jest ich około 400(niektóre bardzo małe, inne duże i silne), stanowią prawie połowę masy twojego ciała.
         Potrzebujesz ich aż tylu, by wykonywać zróżnicowane i skoordynowane ruchy. Mięśnie łączą się z innymi częściami ciała: z kośćmi 
          (są bezpośrednio powiązane za pomocą ścięgien), ze skórą ( np.mięśnie twarzy) czy z błoną śluzową (np. mięśnie języka)" 
/>
    )
}
export default MuscleSystem