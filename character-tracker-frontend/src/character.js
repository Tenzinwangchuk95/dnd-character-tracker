class Character {
    static all = []

    constructor(id, name, klass, race, item){
        this.id = id
        this.name = name
        this.klass = klass
        this.race = race
        this.item = item
        Character.all.push(this)
    }

    static createCharacters(data){
        data.forEach(function(character){
            
            let id = character.id
            let name = character.name
            let klass = character.klass
            let race = character.race
            let item = []
            
            character.items.forEach(function(e){
                item.push(e.name)
            })
            
            new Character(id, name, klass, race, item)
        })
    }

    static attachCharacter(html){
        document.querySelector(".character-list").innerHTML += html
    }

    static addCharacterToPage(characters){
        document.querySelector(".character-list").innerHTML = ""
        Character.createCharacters(characters)
        Character.all.forEach(function(character){
        Character.attachCharacter(character.characterHTML())
        
        })
        Character.all = []
        addItemFormEvent()
        updateEventListener()
        deleteEventListener()
    }

    characterHTML(){
        
        return `
        <div class="card">
          <div class="card-content" id=${this.id}>
            <lable>Name:</lable><span class="card-name"> ${this.name}</span><br>
            <lable>Class:</lable><span class="card-klass"> ${this.klass}</span><br>
            <lable>Race:</lable><span class="card-race"> ${this.race}</span><br>
            <lable>Items:</lable><span class="card-items"> ${Item.itemHTML(this.item)} </span>
            <button class="add-item">Add Item</button><br>
            <button class="update">Update</button>
            <button class="delete">Delete</button>
          </div>
        </div>
        
        `
      }


}