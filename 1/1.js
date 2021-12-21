//بخش الف:
function Lesson (name, capacity,unit){
    this.lessonName=name;
    this.capacity=capacity;
    this.unit=unit;
    this.poly=function(){
    }
    this.info=function () {
        return `{className:${this.lessonName}, classUnit:${this.unit} ,classcapacity: ${this.capacity},}`
        };
        }
        let softEngineering= new Lesson ("softEngineering" ,50,3,"p")
        let networkClass= new Lesson ("networkClass" , 30,3,"p")
        
        console.log(softEngineering.info() ) 
        console.log( networkClass.info())
    
   
    
    // بخش ب :
    
    