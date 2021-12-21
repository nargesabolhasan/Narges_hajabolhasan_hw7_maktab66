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
    constructor(input,input2){
        super(input,input2)
    }
    bookInfo(){
        return this.info()
    }
    }
    let myBook = new Book()
    console.log(myBook.bookInfo() )
