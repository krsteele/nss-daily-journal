import { deleteEntry, getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".entries__container")

// reference to eventHub
const eventHub = document.querySelector("#container")

// listen for state change event, then refresh entry list
eventHub.addEventListener("entryStateChanged", () => EntryListComponent())

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        // console.log("I hear you want to delete an entry?")
        const [prefix, id] = clickEvent.target.id.split("--")
        // console.log("prefix:", prefix, "id:", id)
        deleteEntry(id)
    }
})

export const EntryListComponent = () => {
    // use journal entry data from the data provider component
    getEntries()
    .then(() => {
        const entries = useJournalEntries()
        renderEntries(entries) 
    })
}
    
const renderEntries = (array) => {
    let journalHTMLRepresentations = ""

    for (const obj of array) {
        journalHTMLRepresentations += JournalEntryComponent(obj)
        // console.log(journalHTMLRepresentations)
        
        contentTarget.innerHTML = `
        <section class="entryList">
            ${journalHTMLRepresentations}
        </section>`
    }
}

eventHub.addEventListener("moodFilterChosen", event => {
    // console.log ("I heard the moodFilterChosen event", event.detail)
    const allEntries = useJournalEntries()
    const filteredEntries = allEntries.filter(entry => entry.moodId === event.detail.mood)
    // console.log("filtered journal entries: ", filteredEntries)
    if (filteredEntries.length === 0){
        contentTarget.style.display = "none"
    } else { 
        contentTarget.style.display = "block"
        renderEntries(filteredEntries)}
})
