import React from 'react';
import SystemBasicComponent from './SystemBasicComponent/systemBasicComponent'
import muscleSystem from './images/muscleSystem.svg'
const MuscleSystem=()=>{
    return(
        <SystemBasicComponent 
        imgSrc={muscleSystem}
        
        description="
         Pellentesque mollis lectus a turpis mollis fringilla. 
         Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Aenean eget mi fringilla, egestas odio quis, facilisis lorem. Nunc ut tortor et turpis congue
          rdiet. Aenean sed diam quis nisl consequat porta. Duis arcu nibh, consequat non massa sit amet,
           sagittis aliquet magna. 
Morbi non eros velit. Mauris porttitor libero ac mi mattis ornare." 
/>
    )
}
export default MuscleSystem