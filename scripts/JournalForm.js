import { saveEntry } from "./JournalDataProvider.js"
import { getMoods, useMoods } from "./MoodProvider.js"

const contentTarget = document.querySelector(".formContainer")

const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry"){
    // console.log(clickEvent)
    const date = document.querySelector("#journalDate").value 
    const concept = document.querySelector("#journalConcepts").value
    const moodId = parseInt(document.querySelector("#journalMood").value)
    const entry = document.querySelector("#journalSummary").value

    const newJournalObj = {
        date,
        concept,
        entry,
        moodId
    }
    console.log(newJournalObj)

    saveEntry(newJournalObj)
    JournalForm()
}
})

const renderForm = (arrayOfMoods) => {
    contentTarget.innerHTML = `       
        <h2>Daily Journal</h2>
        <div class="form__set">
        <label class="journalDate" for="journalDate">Date of entry</label>
        <input class="journalDate" type="date" name="journalDate" id="journalDate">
        </div>
        <div class="form__set">
        <label class="journalConcepts" for="journalConcepts">Concepts covered</label>
        <input class="journalConcepts" type="text" name="journalConcepts" id="journalConcepts">
        </div>
        <div class="form__set">
        <label class="journalMood" for="journalMood">Mood for the day</label>
        <select class="journalMood" name="journalMood" id="journalMood">
        ${
            arrayOfMoods.map(
                (mood) => {
                    return `<option value="${ mood.id }">${ mood.label }</option>`
                }
            ).join("")
        }
        </select>
        </div>
        <div class="form__set">
        <label class="journalSummary" for="journalSummary">Summary of Day</label>
        <textarea class="journalSummary" name="journalSummary" id="journalSummary" cols="50" rows="10" placeholder="What did you learn today? What are your plans for tomorrow?"></textarea>
        </div>
        <div class="button">
        <button id="saveEntry">Save Entry</button>
        </div>
    `

}


export const JournalForm = () => {
    getMoods()
        .then(() => {
            const moodArray = useMoods()
            renderForm(moodArray)
})
}