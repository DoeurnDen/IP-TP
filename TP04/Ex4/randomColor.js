let generate = document.getElementById('generate');

class Color{
    colorType = ''
    records = []//aray
    
    constructor(type){
        this.colorType = type;
    }
    generate(){
        const randomColor = 
        Math.floor(Math.random()*16777215).toString(16);
    }
    getRandomNumber(){
        
    }
    getRecords(){
        
    }
    reset(){
        
    }
}
let col = new Color();

generate.addEventListener("click", col.generate());
