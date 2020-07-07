class Item {
    
    constructor(name){
        this.name = name
    }



    static itemForm(){
        return `
        <form id="item-form" data-action="create">
          <div class="input-field">
            <input type="text" name="item" id="item">
            <label for="name">item:</label>
          </div>
          <input type="submit" value="Add item" class="btn">
        </form>

        `
    }

    static itemHTML(){
        
    }

}