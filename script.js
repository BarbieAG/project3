let sheeps = [] // The list where the sheeps are going to be contained. 
let pinkSheep // to store the specific sheep sprite 
let blackSheep // to store the specific sheep sprite
// let textColor = random()
let sheepNumber = 0
let cloudX = 0
let cloudX2 = 0

let pink = 0;
let black = 0;
let correctAmount = document.querySelector("Amount")

function preload(){
    pinkSheep = loadImage('./assets/PinkSheep1.png')
    blackSheep = loadImage('./assets/BlackSheep1Final.png')
    moon = loadImage("./assets/Moon.png")
    cloud= loadImage("./assets/Cloud.png")
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
    image(moon,300,0)
    drawClouds()
    fill("plum")
    rect(0, 450, 600, 50)
    sheepDraw()
    console.log(correctAmount)
    
}

function drawClouds(){
    if (cloudX < 500){
        cloudX ++
        cloudX2 = cloudX2 + 3
    }
    else{
        cloudX = 0
        cloudX2 = 0
    }
    image(cloud, cloudX, 20)
    image(cloud, cloudX2, 10)
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

function add(){ // add to the sheep counter 
    sheepNumber++ 
    counter.textContent  = sheepNumber
    

}

function minus(){ //subtract from sheep counter 
    sheepNumber--
    if (sheepNumber < 0){ // to avoid negative numbers 
        sheepNumber = 0
    }
    counter.textContent  = sheepNumber
    console.log(sheepNumber)
}

function submit(){
    if (sheepNumber == pink){
        correct.hidden = false
        correctAmount.textContent = pink
        // restart.hidden = false
    }
    else{
        wrong.hidden = false
        correctAmount.textContent = pink
    }

}

