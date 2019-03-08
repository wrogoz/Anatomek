import React from 'react';
import SystemBasicComponent from './SystemBasicComponent/systemBasicComponent'
import vascularSystem from './images/vascularSystem.svg'
const VascularSystem=()=>{
    return(
        <SystemBasicComponent 
        imgSrc={vascularSystem}
        systemName="Układ naczyniowy"
        description="
        To dzięki niemu natleniona krew dociera do wszystkich tkanek twojego organizmu.
        Składa się on z tętnic, żył oraz pompy - serca.
        Krew zawierająca dwutlenek węgla wpada do serca żyłami głównymi, a wydostaje się z niego poprzez tętnicę płucną, 
        która doprowadza ją do płuc. Tam coraz mniejszymi naczyniami krwionośnymi dociera do pęcherzyków płucnych, gdzie oddaje dwutlenek węgla,
        a pobiera tlen. Małe naczynia krwionośne to naczynia włosowate. Tworzą one sieć tętniczo-żylną i łączą się w coraz większe naczynia.
        Te tworzą coraz większe żyły, które dostarczają natlenioną krew do serca. Następnie natleniona krew wypływa z serca tym razem przez aortę 
        (tętnicę główną) która rozprowadza ją do innych mniejszych tętnic, które rozprowadzają ją po całym twoim ciele.
        " 
/>
    )
}
export default VascularSystem