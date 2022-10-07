/*
todo: define and export a fn that interpolates teh html sections for ServiceForm() and partyRequests()
todo: import serviceForm() 
todo: import PartyRequests()
*/

import { partyReservations } from "./PartyRequests.js";
import { ServiceForm } from "./ServiceForm.js";

export const userSide = () => {
    return `
    <h1>Buttons & Lolipop's Clownery!✨🤡✨</h1>
    <section class="serviceForm">
        <h2>Service Form:</h2>
        ${ServiceForm()}
    </section>
    
    <section class="partyRequests">
    <h2>Party Requests:</h2>
    ${partyReservations()}
    </section>
`
}


//! keep thgis incase you need it to refaCT
// <section class="serviceRequests">
// <h2>Service Requests:</h2>
// ${Requests()}
// </section>