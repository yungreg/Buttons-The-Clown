/* 
*todo: create service form fn() that creates teh service form HTML
^create 6 fields for this: parent, chiled, part yustart time, length of part in hours, reservatiion date, address
todo: refactor all input field data to be correct
*todo: point that to the main container in index.html
*todo: create click event listener that will send user input to database for use
todo: import the sendPartyRequest() for use in this  module
*/

import { sendPartyRequest } from "./DataAccess.js"
const mainContainer = document.querySelector("#applicationBody")

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">
            <h4>What's your name?</h4></label>
            <input type="text" name="parentName" class="input" />
        </div>
        
        <div class="field">
            <label class="label" for="childName">
            <h4>What's The Child's name?</h4></label>
            <input type="text" name="childName" class="input" />
        </div>

        <div class="field">
            <label class="label" for="childrenAttending">
            <h4>How many Children are atending?</h4></label>
            <input type="text" name="childrenAttending" class="input" />
        </div>

        <div class="field">
            <label class="label" for="partylength">
            <h4>How long will you need us?<small> (ex: "4 hours")</smalll></h4></label>
            <input type="text" name="partyLength" class="input" />
        </div>

        <div class="field">
            <label class="label" for="partyDate">
            <h4>Date of Party?</h4></label>
            <input type="date" name="partyDate" class="input" />
        </div>

        <div class="field">
            <label class="label" for="partyAddress">
            <h4>Party Address?</h4></label>
            <input type="text" name="partyAddress" class="input" />
        </div>


        <button class="button" id="submitPartyRequest">Submit Party Request!</button>
    `

    return html
}

//! refactor me for the new click listener
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitPartyRequest") {
        // Get what the user typed into the form fields
        const parentName = document.querySelector("input[name='parentName']").value
        const partyAddress = document.querySelector("input[name='partyAddress']").value
        const partyDate = document.querySelector("input[name='partyDate']").value
        const partyLength = document.querySelector("input[name='partyLength']").value
        const childName = document.querySelector("input[name='childName']").value
        const childrenAttending = document.querySelector("input[name='childrenAttending']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: parentName,
            childName:childName,
            childrenAttending: childrenAttending,
            partyLength: partyLength,
            partyDate: partyDate,
            partyAddress: partyAddress 
        }

        // Send the data to the API for permanent storage
        sendPartyRequest(dataToSendToAPI)
    }
})