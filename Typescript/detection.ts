function detectType(val:number|string){
    if(typeof val==="string"){
        return val.toUpperCase()
    }
    return val+12
}

function provideId(id:string|null){
    if(!id){
        console.log("Please provide Id")
        return
    }
    id.toLocaleLowerCase()
}
console.log(typeof provideId) //function type

function printAll(str:string|string[]|null){
    if(str){
        if(typeof str==="object"){
            for(const stars of str){
                console.log(stars)
            }
        }
        else if(typeof str==="string"){
            console.log(str)
        }
    }
}



//instance of - checks for object intiated from classes
function logValue(x:Date|string){
    if(x instanceof Date){
        console.log(x.toLocaleDateString())
    }
    else{
        console.log(x.toUpperCase())
    }
}



//Typr prediction
type Fish={swim:()=>void};
type Bird={fly:()=>void};

function isFish(pet:Fish | Bird):pet is Fish{
     return (pet as Fish).swim !==undefined 
}

function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet //"pet is Fish" in above function return type, solves confusion here
        return "fish food"
    }else{
        pet
        return "bird food"
    }
}


//Discriminated Union
interface Circle{
    kind:"circle"
    radius:number
}
interface Square{
    kind:"square"
    side:number
}
interface rectangle{
    kind:"rectangle"
    length:number
    width:number
}

type Shape=Circle|Square|rectangle
function getTrueShape(shape:Shape){
    if(shape.kind==="circle"){
        return Math.PI*shape.radius*shape.radius
    }
        //return shape.side*shape.side
}
        
function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radius*shape.radius
        case "square":
            return shape.side*shape.side
        case "rectangle":
            return shape.length*shape.width
        default:
            const defaualtForShape:never=shape
            return defaualtForShape
    }
}



export{}