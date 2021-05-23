var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

var car1_width= 50;
var car1_height= 40;
var car1_x= 10;
var car1_y= 70;
var car1_image= "car1.png";

var car2_width= 50;
var car2_height= 40;
var car2_x= 10;
var car2_y= 170;
var car2_image="car2.png";

var backdrop="race_track.jpeg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= backdrop;

    car1_imgTag = new Image();
    car1_imgTag.onload= uploadCar1;
    car1_imgTag.src= car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload= uploadCar2;
    car2_imgTag.src= car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log("keyPressed");
    if(keyPressed =='38'){
        car1_up();
        console.log("Up Arrow key will move the Car1 up.")
    }
    if(keyPressed== '40'){
        car1_down();
        console.log("Down Arrow key will move the Car1 down.")
    }
    if(keyPressed== '37'){
        car1_left();
        console.log("Left Arrow key will move the Car1 towards the left.")
    }
    if(keyPressed== '39'){
        car1_right();
        console.log("Right Arrow key will move the Car1 towards the right.")
    }
    if(keyPressed== '87'){
        car2_up();
        console.log("The W key will move the Car2 up.")
    }
    if(keyPressed== '90'){
        car2_down();
        console.log("The Z key will move the Car2 down.")
    }
    if(keyPressed== '83'){
        car2_right();
        console.log("The S key will move the Car2 towards the right.")
    }
    if(keyPressed== '65'){
        car1_up();
        console.log("The A key will move the Car2 towards the left.")
    }
}
function car1_up(){

}
function car1_down(){
    
}
function car1_right(){
    
}
function car1_left(){
    
}
function car2_up(){

}
function car2_down(){
    
}
function car2_right(){
    
}
function car2_left(){
    
}