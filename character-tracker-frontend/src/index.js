document.addEventListener("DOMContentLoaded", function(){
    API.loadCharaters()
    API.loadFormListener()
    //API.loadItemFormListener()
    updateEventListener()

})

function getInfo(){
    if (formItem.value === ""){
      return {
        'name': formName.value,
        'klass': formKlass.value,
        'race': formRace.value
      }
    }
    else {
      return{
        'name': formName.value,
        'klass': formKlass.value,
        'race': formRace.value,
        'items_attributes': [{'name': formItem.value}]
      }
    }
}

function itemInfo(){
  
  return{
    name: formItemName.value
  }
}
function clearForm(){
    formName.value = ""
    formKlass.value = ""
    formRace.value = ""
    formItem.value = ""
    characterForm.dataset.action = "create"
    delete characterForm.dataset.id
    document.querySelector(".btn").value = "Create Character"
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
    itemButton.addEventListener("click", e => {
      const cardID = e.target.parentElement.id
      e.target.parentElement.innerHTML += Item.itemForm()
      API.addItemFormListener()
    })
  }
  
}

function updateEventListener(){
  
  const updateButtons = characterList.querySelectorAll(".update")
  for (const updateButton of updateButtons){
    updateButton.addEventListener("click", event =>{
      const [name, klass, race] = event.target.parentElement.querySelectorAll("span")
      // insert the data on the form
      formName.value = name.innerText
      formKlass.value = klass.innerText
      formRace.value = race.innerText
      characterForm.dataset.id = event.target.parentElement.id
      characterForm.dataset.action = "update"
      document.querySelector(".btn").value = "Update Character"
    })
  }
}

function deleteEventListener(){
  
  const deleteButtons = characterList.querySelectorAll(".delete")
  for (const deleteButton of deleteButtons){
    deleteButton.addEventListener("click", event =>{
      API.deleteCharater(event.target)
    })
  }
}