import React from 'react'
import DescriptionBasicComponent from './descriptionBasicComponent/descriptionBasicComponent'
const StomachComponent = () => {
    return (
        <DescriptionBasicComponent
            header="Żołądek"
            text="Jest swego rodzaju workiem, Jego pojemność wynosi ok 1.2 litra. Pokarmy docierają do żołądka przez otwór 
            zwany wpustem. Tam gruczoły trawienne zaczynają wydzielać sok żołądkowy. 
            Zawiera on enzymy żołądkowe i kwas solny. Enzymy to: lipaza, która rozkłada tłuszcze  na kwasy tłuszczowe i glicerol, 
            oraz pepsyna rozkładająca białka. Kwas solny uaktywnia pepsynę i chroni przed atakami bakterii.
            Dzięki działaniu soku żołądkowego pokarmy zostają przekształcone w gęstą papkę zwaną miazgą pokarmową.
            W wyniku ruchów robaczkowych (czyli kurczenia się) ścian żołądka stopniowo przechodzi on do dwunastnicy.
            Cały ten proces przebiega dość powoli. Trawienie w żołądku obfitego posiłu może trwać nawet trzy godziny.
           "
        />
    )
}
export default StomachComponent