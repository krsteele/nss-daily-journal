import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"
import { NoteForm } from "./JournalForm.js"

console.log("Welcome to the main module")

// useJournalEntries()

EntryListComponent()
getEntries()

NoteForm()  