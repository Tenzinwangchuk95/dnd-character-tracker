const baseCharacterURL = "http://localhost:3000/characters"

fetch call to create Character

fetch call to update Character

fetch call to destroy Character



fetch call to add Item

fetch call to delete Item

function loadCharaters(){
    fetch(baseCharacterURL)
    .then(resp => resp.json())
    .then(data => addCharacterToPage(data))
  }

