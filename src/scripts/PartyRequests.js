/*
*todo: import getter from dataacess.js
*todo: define imports to a variable
*todo: define and export a partyReservations() 
todo: refactor to .map()... maybe?
todo: import sendRequest()
todo: add DENY! button
*/

import { getPartyRequests, deletePartyRequest, getClowns, saveCompletion } from "./DataAccess.js";

// points to the html/Body
const mainContainer = document.querySelector("#applicationBody")

//lisrt generator fn
export const partyReservations = () => {
    const requests = getPartyRequests();
    const clowns = getClowns();

    let html = '<ul>';
    for (const request of requests) {
        html += `<li class="requests" value="${request.id}"> 
        details: 
        Parent Name: ${request.parentName} 
        Child Name: ${request.ChildName}  
        # of Kids: ${request.childrenAttending}
        Party Length: ${request.partyLength}
        Date: ${request.partyDate}
        Address: ${request.partyAddress}

        <button class="request__DENIED"
        id="request--${request.id}"> Deny! </button>
        </li>

        <select class="clowns" id="clowns">
        <option value="0">Choose a Clown!</option>
        ${
            clowns.map(
                clown => {
                    return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
                }
            ).join("")
        }
        </select>`
    }
    html += '</ul>';
    return html;
}

// click event for DENY button to delete a request 

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,partyRequestId] = click.target.id.split("--")
        deletePartyRequest(parseInt(partyRequestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")
    
            const completion = { 
                requestId: `${requestId}`, 
                clownId: `${clownId}`,
                dateCompleted: Date.now()
            }

            saveCompletion(completion)
    
        }
    }
)
