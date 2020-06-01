



var rectSize = 80;
var dotRadius = rectSize/12
var spacing = 10;
var fullBar

function createBar() {

    var rectTop = s.rect(0, 0, rectSize, rectSize)
    rectTop.attr({
        fill: "white",
        stroke: '#000',
        strokeWidth: 1,
    });
    fullBar.add(rectTop)


    for (var i = 1; i < 6; i++) {
        /* var rectBottom = s.rect(0, i * rectSize + i * spacing, rectSize, rectSize)
         rectBottom.attr({
             fill: "transparent",
             stroke: 'red',
             strokeWidth: 1,
         });
 */
        var dot = s.circle(rectSize / 2, i * rectSize + rectSize / 2 + i * spacing, dotRadius)
        dot.attr({
            fill: "white",
            stroke: "#000"
        })

        fullBar.add(dot)
    }

    var rectBottom = s.rect(0, 6 * rectSize + 6 * spacing, rectSize, rectSize)
    rectBottom.attr({
        fill: "white",
        stroke: '#000',
        strokeWidth: 1,
    });
    fullBar.add(rectBottom)

    return fullBar
}
