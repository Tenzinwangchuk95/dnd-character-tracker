const baseURL = "http://localhost:3000/characters"
const formName = document.getElementById("name")
const formKlass = document.getElementById("klass")
const formRace = document.getElementById("race")
const characterForm = document.getElementById("character-form")

class API{

    static loadCharaters(){
        fetch(baseURL)
        .then(resp => resp.json())
        .then(data => Character.addCharacterToPage(data))
    }
    static deleteCharater(){
        options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            }
        }
        url = baseURL
    }
    // fetch call to create Character
    // fetch call to update Character
    static loadFormListener(){

        characterForm.addEventListener("submit", function(event){
        event.preventDefault()
    
        const formInfo = getInfo()
        let options
        let url
        if (characterForm.dataset.action === "create"){
            options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formInfo)
            }
            url = baseURL
        }
        else if (characterForm.dataset.action === "update"){
            options ={
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formInfo)
            }
            url = `${baseURL}/${formInfo.dataset.id}`
        }
        fetch(url, options)
        .then(resp => resp.json())
        .then(data => {
            if(!data.errors){
            API.loadCharaters()
            //clearForm()
            }
            else{
            throw new Error( `${data.errors}`)
            }      
        })
        .catch(alert)
        })
    }

    //fetch call to add Item

    //fetch call to delete Item

    

    
}

