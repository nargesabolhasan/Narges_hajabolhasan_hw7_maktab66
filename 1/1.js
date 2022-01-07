
////بخش الف
// function Lesson (name, capacity,unit){
//     this.lessonName=name;
//     this.capacity=capacity;
//     this.unit=unit;
//     this.info=function () {
//         return `{className:${this.lessonName}, classUnit:${this.unit} ,classcapacity: ${this.capacity} }`
//         };
//     }
//     let softEngineering= new Lesson ("softEngineering" ,50,3,"p")
//     let networkClass= new Lesson ("networkClass" , 30,3,"p")
    
//     console.log( softEngineering.info()) 
//     console.log( networkClass.info())

  ////بخش ب
  function Lesson (name, capacity,unit){
    this.lessonName=name;
    this.capacity=capacity;
    this.unit=unit;
    this.poly=function(prop) {
        if(this===softEngineering){
            this.book=prop
        }else{
            this.project=prop
        }
    }        
    this.info=function () {
        return `{className:${this.lessonName}, classUnit:${this.unit} ,classcapacity: ${this.capacity},${this.book?" book:true" : ""}${this.project?" project:true" : ""} }`
        };
    }
    let softEngineering= new Lesson ("softEngineering" ,50,3,"p")
    let networkClass= new Lesson ("networkClass" , 30,3,"p")
    softEngineering.poly("true")
    networkClass.poly("true")
    console.log( softEngineering.info()) 
    console.log( networkClass.info())

    
       

  
    
 
    