import React, { Component } from 'react';
import { View, WebView, StatusBar } from 'react-native';

export default class App extends Component {
    render() {

        var webViewCode = `
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="https://static.codehs.com/gulp/90383397a2266c189a7fe6dc323191532ef1542a/chs-js-lib/chs.js"></script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
    canvas {
        margin: 0px;
        padding: 0px;
        display: inline-block;
        vertical-align: top;
    }
    #btn-container {
        text-align: center;
        padding-top: 10px;
    }
    #btn-play {
        background-color: #8cc63e;
    }
    #btn-stop {
        background-color: #de5844;
    }
    .glyphicon {
        margin-top: -3px;
        color: #FFFFFF;
    }
</style>
</head>

<body>
    <div id="canvas-container" style="margin: 0 auto; ">
        <canvas
        id="game"
        width="400"
        height="480"
        class="codehs-editor-canvas"
        style="width: 100%; height: 100%; margin: 0 auto;"
        ></canvas>
    </div>
    <div id="console"></div>
    <div id="btn-container">
        <button class="btn btn-main btn-lg" id="btn-play" onclick='stopProgram(); runProgram();'><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
        <button class="btn btn-main btn-lg" id="btn-stop" onclick='stopProgram();'><span class="glyphicon glyphicon-stop" aria-hidden="true"></span></button>
    </div>

<script>
    var console = {};
    console.log = function(msg){
        $("#console").html($("#console").html() + "     " + msg);
    };

    var runProgram = function() {
        function start(){
//GRAPHICS
var widthh = getWidth();
println(widthh);
var heightt = getHeight();
println(heightt);
var label = true;
//var label = readBoolean("Label Version?  (Difficulty: Hard)    [ True | False ]: ");
println("The score is out of 100% ");

var jar = new Rectangle(230,300);
jar.setPosition(85,130);
add(jar);
var jar2 = new Rectangle(225,295);
jar2.setPosition(87,132);
jar2.setColor(Color.white);
add(jar2);
var lid = new Oval(230,23);
lid.setPosition(200,130);
add(lid);
var lid2 = new Oval(225,18);
lid2.setPosition(200,130);
lid2.setColor(Color.white);
add(lid2);
var lid3 = new Oval(230,23);
lid3.setPosition(200,430);
add(lid3);
var lid3 = new Oval(225,18);
lid3.setPosition(200,430);
lid3.setColor(Color.white);
add(lid3);
var txt2 = new Text("Jelly Bean Jar! (0-4000)");
txt2.setPosition(60,65);
txt2.setColor(Randomizer.nextColor());
add(txt2);

var printJB= false;


for(var i = Randomizer.nextInt(0,4000); i < 4000; i++){
    makeBean();
    if(printJB == false){
        var x = i;
        var actual = Math. abs(4000 - x);
    }
    printJB = true;
}
//println(actual);

if(label == true){
    var labelSign2 = new Rectangle(204,240);
    labelSign2.setPosition(98,240-84)
    add(labelSign2);
    
    var labelSign = new Rectangle(200,240);
    labelSign.setPosition(200-100,240-82);
    labelSign.setColor(Color.white);
    add(labelSign);
    
    var labelTop = new Oval(204,14);
    labelTop.setPosition(200,400);
    add(labelTop);
    
    var labelTop2 = new Oval(200,14);
    labelTop2.setPosition(200,398);
    labelTop2.setColor(Color.white);
    add(labelTop2);
    
    var annoying = new Text("ANNOYING");
    annoying.setPosition(130,240-30);
    annoying.setColor(Randomizer.nextColor());
    add(annoying);
    var annoying2 = new Text("LABEL");
    annoying2.setPosition(154,240+118);
    annoying2.setColor(Randomizer.nextColor());
    add(annoying2);
}

    function makeBean(){
        var jb = new Oval(3,5);
        var xPos = Randomizer.nextInt(400-308,400-92);
        var yPos = Randomizer.nextInt(128,480-50);
        jb.setPosition(xPos,yPos);
        jb.setColor(Randomizer.nextColor());
        add(jb);
    }
    setTimer(makeGuess,6000);
    function makeGuess(){
        stopTimer(makeGuess);
        var guess = readInt("How many jellybeans do you think that there are? ");
    if(guess > actual){
        var losertxt = new Text("You went over! You lose!");
        losertxt.setPosition(200-147,30);
        add(losertxt);
        println(actual);
    }
    if(guess < actual){
        var score = Math.abs((((actual - guess)/actual) * 100)-100)
        var winnertxt = new Text("Score: " + score + "%");
        winnertxt.setPosition(10,30);
        add(winnertxt);
        println(actual);
    }
    if(actual == guess){
        var legend = new Text("You are an absolute Legend");
        legend.setPosition(200-163,30);
        add(legend);
        println(actual);
    }
    }
}


        if (typeof start === 'function') {
            start();
        }

        // Overrides setSize() if called from the user's code. Needed because
        // we have to change the canvas size and attributes to reflect the
        // user's desired program size. Calling setSize() from user code only
        // has an effect if Fit to Full Screen is Off. If Fit to Full Screen is
        // On, then setSize() does nothing.
        function setSize(width, height) {
            if (!true) {
                // Call original graphics setSize()
                window.__graphics__.setSize(width, height);

                // Scale to screen width but keep aspect ratio of program
                // Subtract 2 to allow for border
                var canvasWidth = window.innerWidth - 2;
                var canvasHeight = canvasWidth * getHeight() / getWidth();

                // Make canvas reflect desired size set
                adjustMarginTop(canvasHeight);
                setCanvasContainerSize(canvasWidth, canvasHeight);
                setCanvasAttributes(canvasWidth, canvasHeight);
            }
        }
    };

    var stopProgram = function() {
        removeAll();
        window.__graphics__.fullReset();
    }

    window.onload = function() {
        if (!false) {
            $('#btn-container').remove();
        }

        var canvasWidth;
        var canvasHeight;
        if (true) {
            // Get device window width and set program size to those dimensions
            setSize(window.innerWidth, window.innerHeight);
            canvasWidth = getWidth();
            canvasHeight = getHeight();

            if (false) {
                // Make room for buttons if being shown
                $('#btn-container').css('padding', '5px 0');
                canvasHeight -= $('#btn-container').outerHeight();
            }

            setCanvasAttributes(canvasWidth, canvasHeight);
        } else {
            // Scale to screen width but keep aspect ratio of program
            // Subtract 2 to allow for border
            canvasWidth = window.innerWidth - 2;
            canvasHeight = canvasWidth * getHeight() / getWidth();

            // Light border around canvas if not full screen
            $('#canvas-container').css('border', '1px solid #beccd4');

            adjustMarginTop(canvasHeight);
        }

        setCanvasContainerSize(canvasWidth, canvasHeight);

        if (true) {
            runProgram();
        }
    };

    // Set the canvas container width and height.
    function setCanvasContainerSize(width, height) {
        $('#canvas-container').width(width);
        $('#canvas-container').height(height);
    }

    // Set the width and height attributes of the canvas. Allows
    // getTouchCoordinates to sense x and y correctly.
    function setCanvasAttributes(canvasWidth, canvasHeight) {
        $('#game').attr('width', canvasWidth);
        $('#game').attr('height', canvasHeight);
    }

    // Assumes the Fit to Full Screen setting is Off. Adjusts the top margin
    // depending on the Show Play/Stop Buttons setting.
    function adjustMarginTop(canvasHeight) {
        var marginTop = (window.innerHeight - canvasHeight)/2;
        if (false) {
            marginTop -= $('#btn-container').height()/3;
        }
        $('#canvas-container').css('margin-top', marginTop);
    }
</script>
</body>
</html>
`;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <WebView
                    source={{html: webViewCode, baseUrl: "/"}}
                    javaScriptEnabled={true}
                    style={{ flex: 1 }}
                    scrollEnabled={false}
                    bounces={false}
                    scalesPageToFit={false}
                ></WebView>
            </View>
        );
    }
}
