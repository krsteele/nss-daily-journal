// import { useMoods } from "./MoodProvider.js"

export const MoodFilter = (moods) => {
    // console.log("moods in MoodFilter:", moods)
    return `
    <fieldset class="filter__fieldset">
    <legend>Filter Journal Entries by Mood</legend>
    ${moods.map((mood) => {
        return `
        <input type="radio" name="moodFilter" value="${mood.id}">
        <label for="moodFilter">${mood.label}</label>`}).join("")}
    </fieldset>`
}
    

    
