difference = 0; 
rightWristX = 0; 
leftWristX = 0; 
function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500); 

    canvas = createCanvas(550, 500); 
    canvas.position(560, 150); 
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses); 
} 
function draw()
{
    background('#2CE863'); 
    fill('#07F3D1'); 
    text('PRINCE') 
    textSize(difference)
} 
function modelLoaded()
{
    console.log("PoseNet is initialized!");
} 
function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results)

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x; 
    difference = floor(leftWristX - rightWristX);  


}
}