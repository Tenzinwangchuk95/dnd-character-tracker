const baseURL = "http://localhost:3000/characters"
const formName = document.getElementById("name")
const formKlass = document.getElementById("klass")
const formRace = document.getElementById("race")
const formItem = document.getElementById("item")
const characterForm = document.getElementById("character-form")
const characterList = document.querySelector(".character-list")


class API{
    // fetch to load characters
    static loadCharaters(){
        fetch(baseURL)
        .then(resp => resp.json())
        .then(data => Character.addCharacterToPage(data))
    }

    // fetch call to delete Character
    static async deleteCharater(button){
        debugger
        let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            }
        }
        await fetch(`${baseURL}/${button.parentElement.id}`, options)
        API.loadCharaters()
    }
    // fetch call to create Character
    // fetch call to update Character
    static loadFormListener(){

        characterForm.addEventListener("submit", function(event){
        event.preventDefault()
        
    
        const characterInfo = getInfo()
        let options
        let url
        if (characterForm.dataset.action === "create"){
            options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(characterInfo)
            }
            url = baseURL
        }
        else if (characterForm.dataset.action === "update"){
            options ={
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(characterInfo)
            }
            url = `${baseURL}/${characterForm.dataset.id}`
        }
        debugger
        fetch(url, options)
        .then(resp => resp.json())
        .then(data => {
            if(!data.errors){
            API.loadCharaters()
            clearForm()
            }
            else{
            throw new Error( `${data.errors}`)
            }      
        })
        .catch(alert)
        })
    }

    //fetch call to add Item
        
    static addItemFormListener(){
        debugger
        const itemForm = document.getElementById("item-form")
        
        
        const itemFormID = itemForm.parentElement.id
        itemForm.addEventListener("submit", function(event){
            event.preventDefault()
            const itemFormInfo = {items_attributes: [{name: document.getElementById("new-item").value, character_id: itemFormID}]}
            let options
            let url
            debugger
            options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemFormInfo)
            }
            url = `${baseURL}/${itemFormID}`
            fetch(url, options)
            .then(resp => resp.json())
            .then(data => {
            if(!data.errors){
                API.loadCharaters()
                
                }
                else{
                throw new Error( `${data.errors}`)
                }
            })
            .catch(alert)
            })
        
        
    }





        
    

   

    

    
}

