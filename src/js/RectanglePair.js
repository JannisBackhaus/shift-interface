class Bar {
    colorFill = "white";
    colorStroke = "#afafaf";
    widthStroke = 2;
    shadowBlur = 10;
    shadowColor = "#b3b3b3"

    rectSize = 50;
    dotRadius = this.rectSize / 12
    spacing = 30;
    all
    rectGroup
    dotGroup
    cx
    cy

    constructor(_x, _y, _rot) {
        this.dotGroup = s.g();
        this.rectGroup = s.g();
        this.all = s.g();
        this.cx = _x
        this.cy = _y
        _x = _x - this.rectSize / 2;
        _y = _y - this.rectSize * 3.5 - this.spacing * 3;
        this.draw(_x, _y, _rot);
    }

    draw(_x, _y, _rot) {
        var rectTop = s.rect(_x, _y, this.rectSize, this.rectSize)
        rectTop.attr({
            fill: this.colorFill,
            stroke: this.colorStroke,
            strokeWidth: this.strokeWidth
        });

        var dot1 = s.circle(_x + this.rectSize / 2, _y + 1 * this.rectSize + this.rectSize / 2 + 1 * this.spacing, this.dotRadius)
        dot1.attr({
            fill: this.colorFill,
            stroke: this.colorStroke
        })

        var dot2 = s.circle(_x + this.rectSize / 2, _y + 2 * this.rectSize + this.rectSize / 2 + 2 * this.spacing, this.dotRadius)
        dot2.attr({
            fill: this.colorFill,
            stroke: this.colorStroke
        })

        var dot3 = s.circle(_x + this.rectSize / 2, _y + 3 * this.rectSize + this.rectSize / 2 + 3 * this.spacing, this.dotRadius)
        dot3.attr({
            fill: this.colorFill,
            stroke: this.colorStroke
        })

        var dot4 = s.circle(_x + this.rectSize / 2, _y + 4 * this.rectSize + this.rectSize / 2 + 4 * this.spacing, this.dotRadius)
        dot4.attr({
            fill: this.colorFill,
            stroke: this.colorStroke
        })

        var dot5 = s.circle(_x + this.rectSize / 2, _y + 5 * this.rectSize + this.rectSize / 2 + 5 * this.spacing, this.dotRadius)
        dot5.attr({
            fill: this.colorFill,
            stroke: this.colorStroke
        })

        var rectBottom = s.rect(_x, _y + 6 * this.rectSize + 6 * this.spacing, this.rectSize, this.rectSize)
        rectBottom.attr({
            fill: this.colorFill,
            stroke: this.colorStroke,
            strokeWidth: this.strokeWidth,
        });

        this.dotGroup.add(dot5, dot4, dot3, dot2, dot1);
        this.rectGroup.add(rectBottom, rectTop);
        this.all.add(rectBottom, this.dotGroup, rectTop)
        this.all.attr({
            transform: "r" + _rot
        })
    }


    move1 = function (dx, dy) {

        dx = 0;


        let snapArray = [150, 75, 0, -75, -150];

        let highEnd = snapArray[0];
        let lowEnd = snapArray[4];



        let position = this.transform().local;
        let posArray = position.split(',')


        posArray[0] = posArray[0].slice(1)
        posArray[0] = parseInt(posArray[0], 10)
        posArray[1] = parseInt(posArray[1], 10)

        console.log(this)


        if (posArray[1] > highEnd + 1) {
            if (dy < 0) {
                this.attr({
                    transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
                });


                if (posArray[1] > highEnd + 1) {
                    this.attr({
                        transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
                    });
                }
            }

        }

        else if (posArray[1] < lowEnd - 1) {
            if (dy > 0) {
                this.attr({
                    transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
                });
            }


        }
        else {
            this.attr({
                transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
            });
        }
    }

    move2 = function (dx, dy) {
        if (dx >= dy)
            dy = -dx
        else
            dx = -dy

        this.attr({
            transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
        });
    }

    move3 = function (dx, dy) {
        dy = 0

        this.attr({
            transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
        });
    }

    move4 = function (dx, dy) {
        if (dx >= dy)
            dy = dx
        else
            dx = dy
        this.attr({
            transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
        });
    }

    start = function () {
        this.data('origTransform', this.transform().local);
        //if(this.transform().local == )

    }
    stop = function (x, y) {
        console.log('finished dragging');
        let snapArray = [150, 75, 0, -75, -150];
        let snapRange = 15;

        let highEnd = snapArray[0];
        let lowEnd = snapArray[4];

        let position = this.transform().local;
        let posArray = position.split(',')


        posArray[0] = posArray[0].slice(1)
        posArray[0] = parseInt(posArray[0], 10)
        posArray[1] = parseInt(posArray[1], 10)

    }


}