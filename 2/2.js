class Media{
name
type
constructor(input,input2){
    this.name=input
    this.type=input2
}
 info() {
    return `name: ${this.name} ,type: ${this.type}`
}
}
class Book extends Media {
    author
    constructor(input,input2,temp1){
        super(input,input2)
        this.author=temp1
    }
    bookInfo(){
        return this.info()+ ", " + `author: ${this.author}`
    }
    }
    class Film extends Media {
        director
        constructor(input,input2,temp2){
            super(input,input2)
            this.director=temp2

        }
        filmInfo(){
            return this.info() + ", " + ` director: ${this. director}`
        } 
    
    }
    let myBook = new Book("Great Expectations","book","Charles Dickens")
    let myFilm= new Film("Spider-Man" , "book","Jon Watts")
    console.log(myBook.bookInfo() )
    console.log(myFilm.filmInfo () )