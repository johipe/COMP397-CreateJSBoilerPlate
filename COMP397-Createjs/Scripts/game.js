
//create js Bollerplate for COMP397

//var init = function () { }

//VARIABLES
var canvas;
var stage = createjs.Stage;
var hellotext = createjs.Text;
var buttonBitmap = createjs.Bitmap;

//FUNCTIONS
function init()
{
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);

    createjs.Ticker.setFPS(60); //set the frame rate to 60fps
    createjs.Ticker.addEventListener("tick", gameloop);

    main();
}


//GAMELOOP
function gameloop()
{
    stage.update();
}

function buttonClicked() {
    hellotext.text = "Goodbye!";

}

function buttonOut() {
    buttonBitmap.alpha = 1;

}

function buttonOver(){
    buttonBitmap.alpha = 0;

}

function main()
{
    hellotext = new createjs.Text("Hello World!", "40px Consolas", "#00000000");

    stage.addChild(hellotext);// fisrt child object

    buttonBitmap =new createjs.Bitmap("assets/images/images2.jpg");

    buttonBitmap.x = 100;
    buttonBitmap.y = 100;

    //buttonBitmap.scaleX = 0.25;  // avoid scaling
    //buttonBitmap.scaleY = 0.25;

    buttonBitmap.addEventListener("click", buttonClicked);
    buttonBitmap.addEventListener("mouseout", buttonOut);

    stage.addChild(buttonBitmap);

}






