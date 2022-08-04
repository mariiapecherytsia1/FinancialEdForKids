const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
    x: 0,
    y: 200,
    width: 180,
    height: 247.5,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
}

const playerSprite = new Image();
playerSprite.src = "../images/character.png";
const background = new Image();
background.src = "../images/background.jpg";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, 
                player.height * player.frameY, player.width, player.height, 
                player.x, player.y, player.width, player.height);
    movePlayer();
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
window.addEventListener("keyup", function(e) {
    delete keys[e.keyCode];
});

function movePlayer() {
    if(keys[39] && player.x < (canvas.width - player.width)) {
        player.x += player.speed;
    }
    if(keys[37] && player.x > -35) {
        player.x -= player.speed;
    }
    if(keys[40] && player.y < (canvas.height - player.height + 35)) {
        player.y += player.speed;
    }
    if(keys[38] && player.y > -30) {
        player.y -= player.speed;
    }
}
