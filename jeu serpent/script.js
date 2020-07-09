window.onload = function () {
var canvasWidth=900;
var canvasHeight=600;
var blockSize=30;
var canvas;
var ctx;
var delay= 100;
var snakee;
var applee;
var widthInBlocks = canvasWidth/blockSize;
var heightInBlocks = canvasHeight/blockSize;
var score;
var timeout;

init();

function init() {
    canvas = document.createElement('canvas');
    canvas.width= canvasWidth;
    canvas.height=canvasHeight;
    canvas.style.border= "30px solid gray";
    canvas.style.margin="50px auto";
    canvas.style.display= "block";
    canvas.style.backgroundColor = "#ddd";
    ctx= canvas.getContext('2d');
    snakee = new Snake([[6,4],[5,4],[4,4],[3,4],[2,4]],"right");//instancier le serpent
    applee = new Apple([10,10]);//instance de la pomme
    score= 0;
    document.body.appendChild(canvas);
    
    refreschCanvas();
    
}

function refreschCanvas() {
    snakee.advance();//deplacemant vers l'avant
    if (snakee.checkCollison()) {
        //GAME OVER
        gameOver();
    }else{
        if (snakee.isEatingApple(applee)) {
            //LE SERPENTG IL A MANGER LA POMME
            score++;
            snakee.ateApple = true;
            do{
                applee.setNewPosition();
            }
            while(applee.isOnSnake(snakee))
        }
        ctx.clearRect(0,0,canvasWidth,canvasHeight)
        drawScore();
        snakee.draw();//appraition du snake
        applee.draw();
        setTimeout(refreschCanvas,delay);   

    }

}
function gameOver() {
    ctx.save();
    ctx.font = "bold 70px sans-serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle= "white";
    ctx.lineWidth= 5;
    var centerX = canvasWidth/2;
    var centerY = canvasHeight/2;
    ctx.strokeText("Game Over",centerX,centerY-180);
    ctx.fillText("Game Over",centerX,centerY-180);
    ctx.font = "bold 30px sans-serif";
    ctx.strokeText("Appuyer sur la touche Espace pour rejouer", centerX, centerY - 120)
    ctx.fillText("Appuyer sur la touche Espace pour rejouer", centerX, centerY - 120);
    ctx.restore();
}
function restart() {
    snakee = new Snake([[6,4],[5,4],[4,4],[3,4],[2,4]],"right");//instancier le serpent
    applee = new Apple([10,10]);//instance de la pomme
    score=0;
    clearTimeout(timeout);
    refreschCanvas();

}
function drawScore() {
    ctx.save();
    ctx.font = "bold 200px sans-serif";
    ctx.fillStyle = "gray";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    var centerX = canvasWidth/2;
    var centerY = canvasHeight/2;
    ctx.fillText(score.toString(),centerX,centerY);

    ctx.restore();

}
function drawBlock(ctx,position) {
    var x = position[0] * blockSize;
    var y = position[1]* blockSize;
    ctx.fillRect(x,y,blockSize,blockSize);
}

//Le serpent
function Snake(body,direction) {
    this.body = body;
    this.direction = direction;
    this.ateApple = false;
    this.draw=function(){
        ctx.save();
        ctx.fillStyle = "#ff0000";
        for(var i =0; i< this.body.length;i++){
            drawBlock(ctx,this.body[i]);
        }
        ctx.restore();
        
    };
    //Déplacement
    this.advance= function(){
        var nextPosition = this.body[0].slice();
        switch(this.direction){
            case "left":
                nextPosition[0]--;
                break;
            case "right":
                nextPosition[0]++;
                break;
            case "down":
                nextPosition[1]++;
                break;
            case "up":
                nextPosition[1]--;
                break;
            default:
                throw("Invalid Direction");    
        }
        this.body.unshift(nextPosition);
        if(!this.ateApple)
            this.body.pop();
        else
            this.ateApple=false;
            //this.body.post();
    };
    //Précision sur les directions disponible
    this.setDirection = function(newDirection){
        var allowedDiretion;
        switch(this.direction){
            case "left":
            case "right":
                allowedDiretion = ["up","down"];
                break;
            case "down":
            case "up":
                allowedDiretion = ["left","right"];
                break;
            default:
                throw("Invalid Direction"); 
    
        }
        if (allowedDiretion.indexOf(newDirection)>-1) {
            this.direction = newDirection;
        }
    }//Collision
    this.checkCollison = function(){
        var wallCollision = false;
        var snakeCollisiom = false;
        var head = this.body[0];
        var rest = this.body.slice(1);
        var snakex = head[0];
        var snakey = head[1];
        var minX = 0;
        var minY = 0;
        var maxX = widthInBlocks-1;
        var maxY = heightInBlocks-1;
        var isNotBetweenHonrizontalWalls = snakex < minX || snakex > maxX;
        var isNotBetweenVerticalWalls = snakey< minY || snakey > maxY;
        if (isNotBetweenHonrizontalWalls||isNotBetweenVerticalWalls) {
            wallCollision = true;
        }
        for(var i = 0;i <rest.length;i++){
            if (snakex === rest[i][0] && snakey === rest[i][1]) {
                snakeCollisiom=true;
            }
            
        }
        return wallCollision||snakeCollisiom;
    };
    this.isEatingApple = function(appleToEat){
        var head = this.body[0];
        if(head[0] === appleToEat.position[0]&& head[1] === appleToEat.position[1])
            return true;
        else
            return false
        
    }
}
//La pomme que le serpent doit manger
function Apple(position) {
    this.position = position;
    this.draw = function(){
        ctx.save();
        ctx.fillStyle = "#33cc33";
        ctx.beginPath();
        var radius = blockSize/2;
        var x = this.position[0]*blockSize +radius;
        var y = this.position[1]*blockSize + radius;
        ctx.arc(x,y,radius,0,Math.PI*2,true);
        ctx.fill();
        ctx.restore();
    };
    this.setNewPosition = function(){
        var newX = Math.round(Math.random()* (widthInBlocks -1));
        var newY = Math.round(Math.random()* (heightInBlocks -1));
        this.position = [newX,newY];
    };
    //Vérification si la pomme apparait sur le serpent
    this.isOnSnake = function(snakeToCheck){
        var isOnSnake = false;
        for (let i = 0; i < snakeToCheck.body.length; i++) {
            if (this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck.body[i][1]) {
                isOnSnake= true;
            }            
        }
        return isOnSnake;
    };
}
//Controleur **les directions avec les flèches du clavier (37,38,39,40)
document.onkeydown =function handleKeyDown(e) {
    var key = e.keyCode;
    var newDirection;
    switch(key){
        case 37:
            newDirection = "left";
            break;
        case 38:
            newDirection = "up";
            break;
        case 39:
            newDirection = "right";
            break;
        case 40:
            newDirection = "down";
            break;
        case 32:
            restart();
            return;
        default:
            return;    

    }
    snakee.setDirection(newDirection);
}



}