const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score =0;
let gamespeed = 2;

let temp = canvas.height - 90;

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(10, temp, 50, 50);
    // bird.update();
    // bird.draw();
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('keydown' , function(key){
    console.log(key.code);
    if(key.code === "space") spacePressed = true;
    temp -= 20;
});
window.addEventListener('keyup', function(key){
    if(key.code === 'space') spacePressed = false;
});