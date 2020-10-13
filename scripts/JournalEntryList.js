import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    // use journal entry data from the data provider component
    const entries = useJournalEntries()

    let journalHTMLRepresentations = ""

    for (const entry of entries) {
        
        journalHTMLRepresentations = JournalEntryComponent(entry)
        console.log(journalHTMLRepresentations)
        
        entryLog.innerHTML += `
        <section class="entryList">
            ${journalHTMLRepresentations}
        </section>`
    }
}