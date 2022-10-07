/* 
*todo: define main cointainer with a query selector to point to appBody
*todo: create render FN() that shows page
todo: update render fn() w/ your fetch requests from the database, then() interpolate them
*todo: invoke that rendering function
todo: build fetch fns() inside render()
*/

import { userSide } from "./ButtonsTheClown.js"
import { fetchPartyRequests, fetchClowns, fetchCompletions } from "./DataAccess.js"

const mainContainer = document.querySelector("#applicationBody")

const renderWebApp = () => {
    fetchPartyRequests()
    .then(() => fetchClowns())
    .then(() => fetchCompletions())
    .then(
        () => {
            mainContainer.innerHTML = userSide()
        }
    )
}

renderWebApp()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderWebApp()
    }
)