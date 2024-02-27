
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 500;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score =0;
let gamespeed = 2;



function draw(){
    ctx.fillStyle = "99DBF5";
    ctx.fillRect(0, 0, canvas.width, canvas,height);
}
function animate(){
  
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillRect(10, temp, 50, 50);
    handleObstacles();
    handleParticles();   
    bird.update();
  
    bird.draw();
    ctx.fillStyle ="red";
    ctx.font ="bold 50px serif";
    ctx.strokeText(score,700,70);
    ctx.fillText(score,700,70); 
    handleCollisions();
    if(handleCollisions()) return;         
    

    requestAnimationFrame(animate);
    angle+=0.12;
    frame++;
}
animate();

window.addEventListener('keydown' , function(key){
    console.log(key.code);
    if(key.code === "Space") spacePressed = true;
});
window.addEventListener('keyup', function(key){
    if(key.code === 'Space') spacePressed = false;
});

window.addEventListener('keyup', function(key){
    if(key.code === 'Space') spacePressed = false;
});

document.getElementById('mybutton').addEventListener('click',function(){
    window.location.reload();
});

const bang = new Image();
bang.src = "bang.png";
function handleCollisions(){
    for(let i = 0; i<obstaclesArray.length; i++){

        if(bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            bird.x + bird.width > obstaclesArray[i].x && 
            ((bird.y <0 + obstaclesArray[i].top && bird.y + bird.height > 0)
            || (bird.y > canvas.height - obstaclesArray[i].bottom &&
                bird.y +bird.height < canvas.height))){
                ctx.drawImage(bang,bird.x,bird.y,50,50);
                ctx.font ="25px georgia";
                ctx.fillStyle ="black";
               
                ctx.fillText("Game Over, your score is " + score ,260, canvas.height/2 -10);
                
               

                return true;
                }
    }
}