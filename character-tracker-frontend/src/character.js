class Character {
    static all = []

    constructor(id, name, klass, race){
        this.id = id
        this.name = name
        this.klass = klass
        this.race = race
        Character.all.push(this)
    }

    static createCharacters(data){
        data.forEach(function(character){
            let id = character.id
            let name = character.name
            let klass = character.klass
            let race = character.race
            new Character(id, name, klass, race)
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
        Character.all = []
        addItemFormEvent()
        })
    }

    characterHTML(){
        return `
        <div class="card">
          <div class="card-content" id=${this.id}>
            <span class="card-name"><p>Name: ${this.name}</p></span>
            <span class="card-klass"><p>Class: ${this.klass}</p></span>
            <span class="card-race"><p>Race: ${this.race}</p></span>
            <button class="add-item">Add Item</button>
            <button class="update">Update</button>
            <button class="delete">Delete</button>
          </div>
        </div>
        
        `
      }


}