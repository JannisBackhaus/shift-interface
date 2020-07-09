var s = Snap('#svg');




var xebraState;
var options = {
    hostname: "127.0.0.1",
    port: 8086,
    supported_objects: ["slider"]
};
xebraState = new Xebra.State(options);

xebraState.on("object_added", function (object) {
    if (object.type === "slider") addHTMLSlider(object);
});

// Do something when a button is removed
xebraState.on("object_removed", function (object) {
    if (object.type === "slider") removeHTMLSlider(object);
});

xebraState.connect();


function touchHandler(event) {
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    switch (event.type) {
        case "touchstart": type = "mousedown"; break;
        case "touchmove": type = "mousemove"; break;
        case "touchend": type = "mouseup"; break;
        default: return;
    }

    // initMouseEvent(type, canBubble, cancelable, view, clickCount, 
    //                screenX, screenY, clientX, clientY, ctrlKey, 
    //                altKey, shiftKey, metaKey, button, relatedTarget);

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1,
        first.screenX, first.screenY,
        first.clientX, first.clientY, false,
        false, false, false, 0/*left*/, null);

    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}

// function touchHandler(event){
//     let target = event.target 
//     let new_x = event.touches[0].clientX;
//     let new_y = event.touches[0].clientY;
// console.log(event.touches)
// console.log(target)
// console.log(new_y)
// console.log(target.attributes[0])
// target.setAttribute("x", new_x)
// target.setAttribute("y", new_y)

// }

var centerX = 500;
var centerY = 500;

var barCounter = 0;

drawCircle();


function addHTMLSlider() {

    switch (barCounter) {
        case 0:
            var newBar = new Bar(centerX, centerY, 0);
            newBar.all.drag(newBar.move1, newBar.start, newBar.stop1);
            barCounter++;
            break;
        case 1:
            var newBar = new Bar(centerX, centerY, 45);
            newBar.all.drag(newBar.move2, newBar.start, newBar.stop2);
            barCounter++;
            break;
        case 2:
            var newBar = new Bar(centerX, centerY, 90);
            newBar.all.drag(newBar.move3, newBar.start, newBar.stop3);
            barCounter++;
            break;
        case 3:
            var newBar = new Bar(centerX, centerY, 135);
            newBar.all.drag(newBar.move4, newBar.start, newBar.stop4);
            barCounter++;
            drawCircle();
            break;
        case 4:
            console.log("There are four sliders already.")
            break;
    }

}


function drawCircle() {
    var centerCircle = s.circle(centerX, centerY, 20)
    centerCircle.attr({
        fill: "white"
    })

    var centerCircle2 = s.circle(centerX, centerY, 3)
    centerCircle2.attr({
        fill: "red"
    })

}

function addHTMLButton(object) {
    var newButton = document.createElement("button");
    newButton.id = "button-" + object.id;
    newButton.onmousedown = function () {
        object.setParamValue("value", 1);
    };
    newButton.onmouseup = function () {
        object.setParamValue("value", 0);
    };
    newButton.appendChild(document.createTextNode("Button " + object.id));
    document.getElementById("container").appendChild(newButton);
}

function removeHTMLButton(object) {
    var button = document.getElementById("button-" + object.id);
    button.parentNode.removeChild(button);
}

function animateSnap(_bar, _differ) {
    let steps = 10;
    let value = _differ / steps
    let stepSize
    let remainder = _differ % steps;

    

    if (value < 0)
        stepSize = Math.ceil(value);


    else
        stepSize = Math.floor(value);


    console.log(_differ, stepSize, remainder)
    for (let i = 0; i <= steps; i++) {

        if (i == steps) {
            window.setTimeout(function () {
                moveStep(_bar, remainder, true)
            }, i * 15);
        }
        else {
            window.setTimeout(function () {
                moveStep(_bar, stepSize, false)
            }, i * 15);
        }
    }
}

function moveStep(_bar, _step, _debug) {
    _bar.data('origTransform', _bar.transform().local);

    _bar.attr({

        transform: _bar.data('origTransform') + (_bar.data('origTransform') ? "T" : "t") + [0, - _step]
    });
    if (_debug)
        console.log("Position after Snapping: " + _bar.transform().local)
}



//var bar1 = new Bar(centerX, centerY, 0);
//bar1


/*
var bar2 = new Bar(centerX, centerY, 45);
bar2.all.drag(bar2.move2, bar2.start, bar2.stop);

var bar3 = new Bar(centerX, centerY, 90);
bar3.all.drag(bar3.move3, bar3.start, bar3.stop);

var bar4 = new Bar(centerX, centerY, 135);
bar4.all.drag(bar4.move4, bar4.start, bar4.stop);
*/



