img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload()
{
    img = loadImage("mario05.png");
}
function setup()
{
    canvas = createCanvas(1240, 336);
    canvas.parent('canvas');

    instializeInSetup(mario);

    video = createCapture(VIDEO);
    video.size(800, 400);
    video.parent('game_console');

    posenet = ml5.posenet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        noseX = results[0].pose.noseX;
        noseY = results[0].pose.noseY;
    
        console.log("noseX =" + noseX +"noseY =" + noseY);
    }
}
function draw()
{
    background("yellow");
    image(img, marioX, marioY, 40 ,70);
    if(noseX < 300)
    {
        marioX = marioX - 1
    }
    if(noseX > 300)
    {
        marioX = marioX + 1
    }
    if(noseY > 150)
    {
        marioY = marioY - 1
    }
   
    game()
}




