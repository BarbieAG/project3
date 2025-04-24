let sheeps = [] // The list where the sheeps are going to be contained. 
let pinkSheep // to store the specific sheep sprite 
let blackSheep // to store the specific sheep sprite
// let textColor = random()
let sheepNumber = 0

let pink = 0;
let black = 0;

function preload(){
    pinkSheep = loadImage('./assets/PinkSheep1.png')
    blackSheep = loadImage('./assets/BlackSheep1Final.png')
}

function setup(){ //Setting up the scene, called once 
createCanvas(600, 500)
    background("black")
    for(let i = 0; i< random(5, 13);i++){
        let sheep = {
            x: 50 * -i, // Sheep horizontal position starts at 0 then starts to increment
            y: 0,
            speed: 2,    //Variable added to the sheep so the can move
            colorValue: random(0,2)

        }
        
        if(sheep.colorValue < 1 ){ //Check the value of the sheep to determine the color of the sheep
            pink++
        }
        else if (sheep.colorValue >= 1){
            black++
            
        }

        sheeps.push(sheep)
        
    }

}

function draw(){ // called every frame
    background("black")
    fill("white")
    rect(0, 450, 600, 50)
    sheepDraw()
    
}



function sheepDraw(){ //Fuctiion that will add the sheep to the scene
        for (let sheep of sheeps){
            if(sheep.colorValue < 1 ){ //Check the value of the sheep to determine the color of the sheep
                image(pinkSheep, sheep.x, sheep.y, 100,100)

            }
            else if (sheep.colorValue >= 1){
                image(blackSheep, sheep.x, sheep.y, 100,100)

            }
            
           
            sheep.x = sheep.x + sheep.speed
            sheep.y = abs(sin(sheep.x * 0.09)) * -100 + 400

        }
}

function add(){
    sheepNumber++ 
    counter.textContent  = sheepNumber
    

}

function minus(){
    sheepNumber--
    if (sheepNumber < 0){
        sheepNumber = 0
    }
    counter.textContent  = sheepNumber
    console.log(sheepNumber)
}

// function drawText(){
    
// }