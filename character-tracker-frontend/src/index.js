document.addEventListener("DOMContentLoaded", function(){
    API.loadCharaters()
    loadFormListener()

})

function getInfo(){
    return{
        name: formName.value,
        klass: formKlass.value,
        race: formRace.value
    }
}
function clearForm(){
    formName.value = ""
    formKlass.value = ""
    formRace.value = ""
    characterForm.dataset.action = "create"
    delete characterForm.dataset.id
    document.querySelector(".btn").value = "Create Character"
}

function loadFormListener(){
  characterForm.addEventListener("submit", function(event){
    event.preventDefault()
    const characterInfo = getInfo()
    let options
    let url
    if (characterForm.dataset.action === "create"){
      options ={
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(characterInfo)
      }
      url = baseURL
    }else if (characterForm.dataset.action === "update"){
      options ={
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(characterInfo)
      }
      url = `${baseURL}/${characterForm.dataset.id}`
    }
    fetch(url, options)
    .then(resp => resp.json())
    .then(data => {
      if(!data.errors){
        debugger
        clearForm()
        API.loadCharaters()
      }
      else{
        throw new Error( `${data.errors}`)
      }      
    })
    .catch(alert)
  })
}

// function addItemFormEvent(){
//   characterList.querySelectorAll(".add-item").forEach(button => {
//     button.addEventListener("click", event => {
//       event.target.parentElement.innerHTML += Item.itemForm
//     })
//   })
// }

function addItemFormEvent(){
  const itemButtons = characterList.querySelectorAll(".add-item")
  
  for (const itemButton of itemButtons){
    
    itemButton.addEventListener("click", addItemForm)
  }
}

function addItemForm(e){
  
  const cardID = e.target.parentElement.id
  debugger
  e.target.parentElement.innerHTML += Item.itemForm()
  loadItemFormListener()
}

function loadItemFormListener(){
  characterList.addEventListener("submit", function(event){
    event.preventDefault()
  })
}