function setup(){
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,550);
canvas.position(560,150);

poseNet = ml5.poseNet(video, gotPoses);
}
function draw(){
background('grey');
}
function modelLoaded(){
console.log("PoseNet is initialized");
}
function gotPoses(results){
if(results > 0){
console.log(results);
}
}