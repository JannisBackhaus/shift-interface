var s = Snap('#svg');

var xebraState;
var options = {
    hostname: "127.0.0.1",
    port: 8086,
    supported_objects: ["slider"]
};
xebraState = new Xebra.State(options);

xebraState.on("object_added", function(object) {
    if (object.type === "slider") addHTMLSlider(object);
});

// Do something when a button is removed
xebraState.on("object_removed", function(object) {
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

var bar1 = new Bar(centerX, centerY, 0);
bar1.all.drag(bar1.move1, bar1.start, bar1.stop);

var bar2 = new Bar(centerX, centerY, 45);
bar2.all.drag(bar2.move2, bar2.start, bar2.stop);

var bar3 = new Bar(centerX, centerY, 90);
bar3.all.drag(bar3.move3, bar3.start, bar3.stop);

var bar4 = new Bar(centerX, centerY, 135);
bar4.all.drag(bar4.move4, bar4.start, bar4.stop);

var centerCircle = s.circle(centerX, centerY, 20)
centerCircle.attr({
    fill: "white"
})



init();
