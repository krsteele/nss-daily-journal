const contentTarget = document.querySelector(".formContainer")

const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry"){
    // console.log(clickEvent)
    const date = document.querySelector("#journalDate").value 
    const concept = document.querySelector("#journalConcepts").value
    const mood = document.querySelector("#journalMood").value
    const entry = document.querySelector("#journalSummary").value

    const newJournalObj = {
        date,
        concept,
        entry,
        mood
    }
    // console.log(newJournalObj)

    saveEntry(newJournalObj)
    JournalForm()
}
})

const renderForm = () => {
    contentTarget.innerHTML = `       
        <label class="journalDate" for="journalDate">Date of entry</label>
        <input class="journalDate" type="date" name="journalDate" id="journalDate">
        
        <label class="journalConcepts" for="journalConcepts">Concepts covered</label>
        <input class="journalConcepts" type="text" name="journalConcepts" id="journalConcepts">
                    
        <label class="journalMood" for="journalMood">Mood for the day</label>
        <select class="journalMood" name="journalMood" id="journalMood">
            <option value="happy">happy</option>
            <option value="angry">angry</option>
            <option value="sad">sad</option>
            <option value="grumpy">grumpy</option>
            <option value="excited">excited</option>
            <option value="worried">worried</option>
            <option value="content">content</option>
            <option value="amused">amused</option>
            <option value="confused">confused</option>
            <option value="deflated">lost all my fizz</option>
            <option value="frazzled">frazzled</option>
        </select>
                    
        <label class="journalSummary" for="journalSummary">Summary of Day</label>
        <textarea class="journalSummary" name="journalSummary" id="journalSummary" cols="50" rows="10" placeholder="What did you learn today? What are your plans for tomorrow?"></textarea>
        
        <button id="saveEntry">Save Entry</button>
        `

}


export const JournalForm = () => {
    renderForm()
}



                    
