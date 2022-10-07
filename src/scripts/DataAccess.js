/*
*todo: point t his module to the appbody
*todo: create an API website and serve using the terminal command in Ch4 
*todo: create an apicationState variable to hold temp application state
todo: make ghetter fns for each table in database
todo: make fetcher fns()
todo: database delete request
todo: makle a saveCompletion() 
*/

const mainContainer = document.querySelector("#applicationBody")

const API = "http://localhost:8090"

const applicationState = {
    completions: [],
    clowns: [],
    partyRequests: []
}

//getters
export const getPartyRequests = () => {
    return applicationState.partyRequests.map(partyRequests => ({...partyRequests}))
}

export const getCompletions = () => {
    return applicationState.completions.map(completions => ({...completions}))
}

export const getClowns = () => {
    return applicationState.clowns.map(clowns => ({...clowns}))
}

//setters


//fetchers
export const fetchPartyRequests = () => {
    return fetch(`${API}/partyRequests`)
        .then(response => response.json())
        .then(
            (partyRequest) => {
                // Store the external state in application state
                applicationState.partyRequests = partyRequest
            }
        )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (completed) => {
                // Store the external state in application state
                applicationState.completions = completed
            }
        )
}

// senders

//^fn() to POST requests to database's permanent state
export const sendPartyRequest = (partyRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(partyRequest)
    }


    return fetch(`${API}/partyRequests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged")) // aadded this line to display new state
        })
}

// database DELETE request

export const deletePartyRequest = (id) => {
    return fetch(`${API}/partyRequests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


// save completion fn()
export const saveCompletion = (completedRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completedRequest)
    }


    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged")) // aadded this line to display new state
        })
}

