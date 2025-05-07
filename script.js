
let sheeps = [] // The list where the sheeps are going to be contained. 
let pinkSheep // to store the specific sheep sprite 
let blackSheep // to store the specific sheep sprite
let cloudSprite //to store the specific cloud sprite
// let textColor = random()
let sheepNumber = 0
let clouds = [] // the list where the clouds will be contained 
let pink = 0;
let black = 0;
let cloudsNumber = 0
let questionNumber 
let correctAmounts = document.querySelectorAll(".Amount")
let number = 0



function preload(){
    
    pinkSheep = loadImage('./assets/PinkSheep1.png')
    blackSheep = loadImage('./assets/BlackSheep1Final.png')
    moon = loadImage("./assets/Moon.png")
    cloudSprite= loadImage("./assets/Cloud.png")
    font = loadFont("./assets/fonts/PixelifySans.ttf")
}

function setup(){ //Setting up the scene, called once 
    questionNumber = int(random(1,5))
    createCanvas(600, 500)
    background("black")
    for(let i = 0; i< random(5, 13);i++){
        let sheep = {
            x: random(40, 50) * -i, // Sheep horizontal position starts at 0 then starts to increment
            y: 0,
            speed: random(1,2),    //Variable added to the sheep so the can move
            multiplier: random(0.01, 0.04),
            colorValue: random(0,2)


        }

        sheepNumber++

        if(sheep.colorValue < 1 ){ //Check the value of the sheep to determine the color of the sheep
            pink++
        }
        else if (sheep.colorValue >= 1){
            black++
            
        }

        sheeps.push(sheep)
        
    }

    for (let i = 0; i< random(1,8); i++){
        let cloud = {
            x: random(-10,100) * -i,
            y:random(10,200)
        }
        clouds.push(cloud)
    }

  

}

function draw(){ // called every frame
    background("black")
    image(moon,300,0)
    cloudsDraw()
    fill("plum")
    rect(0, 450, 600, 50)
    sheepDraw()
    if (sheeps.length == 0){
        question()
        noLoop() // to stop the 

    }

    // console.log(clouds)
   
    
}


function cloudsDraw(){
    for(let cloud of clouds){
        if (cloud.x < width){
            cloud.x = cloud.x + random(1,8)
        }
        else{
            cloud.x = 0
        }
        image(cloudSprite, cloud.x, cloud.y, 150,150)
       }
       
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
            sheep.y = abs(sin(sheep.x * sheep.multiplier)) * -200 + 400

            if (sheep.x > width){
                sheeps.splice(sheep,1)
            }


        }
}

function add(){ // add to the sheep counter 
    number++ 
    counter.textContent  = number
    

}

function minus(){ //subtract from sheep counter 
    number--
    if (number < 0){ // to avoid negative numbers 
        number = 0
    }
    counter.textContent  = number
    console.log(sheepNumber)
}

function question1Answer(){
   
    if(number == pink){
        correct1.hidden = false
    }
    else{
        wrong1.hidden = false 

    }

    for (let correctAmount of correctAmounts){
        correctAmount.textContent = pink

    }
    
    
}

function question2Answer(){
    if(number == black){
        correct2.hidden = false
    }
    else{
        wrong2.hidden = false

    }

    for (let correctAmount of correctAmounts){
        correctAmount.textContent = black

    }
    
    
}

function question3Answer(){
    if(number == sheepNumber){
        correct3.hidden = false
    }
    else{
        wrong3.hidden = false

    }

    for (let correctAmount of correctAmounts){
        correctAmount.textContent = sheepNumber

    }
    
    
}
function question4Answer(){
    if(number == cloudsNumber){
        correct4.hidden = false
    }
    else{
        wrong4.hidden = false

    }
    
    for (let correctAmount of correctAmounts){
        correctAmount.textContent = cloudsNumber

    }
    
}

function submit(){
    // let questionNumber = int(random(1,5))
    if (questionNumber == 1){
        question1Answer()
    }
    else if (questionNumber == 2){
        question2Answer()
        
    }
    else if (questionNumber == 3){
        question3Answer()
    }
    else if (questionNumber == 4){
        question4Answer()
    }


    
}

function question(){
   if (questionNumber  == 1){
         question1.hidden = false
   }
   else if (questionNumber == 2){
        question2.hidden = false
    }
  else if (questionNumber == 3){
        question3.hidden = false
    }
  else if (questionNumber == 4){
        question4.hidden = false
    }

    console.log(questionNumber)
}





