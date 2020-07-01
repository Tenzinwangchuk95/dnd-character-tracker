class Character {
    static all = []

    constructor(name, klass, race){
        this.name = name
        this.klass = klass
        this.race = race
        Character.all.push(this)
    }


    function addCharacterToPage(posts){
        document.querySelector(".character-lists").innerHTML = ""
        posts.forEach(function(post){
          // need to create the post in here
          attachPost(postHTML(post))
        })
      }

    function postHTML(post){
        return `
        <div class="card">
          <div class="card-content" id=${post.id}>
            <span class="card-title">${post.title}</span>
            <span class="card-author"><p>${post.author}</p></span>
            <span class="card-content"><p>${post.content}</p></span>
            <span class="card-likes"><p class="likes">${post.likes}</p></span>
            <button class="like-button">Like Me!</button>
            <button class="update">Update Me!</button>
            <button class="delete">Delete me? :-(</button>
          </div>
        </div>
        
        `
      }








}