class RectanglePair {
    colorFill = "white";
    colorStroke = "#afafaf";
    size = 60;
    spacing = 3;

    originX;
    originY;

    rotationAngle;
    step = 0;
    posX = null;
    posY = null;

    constructor(_rotationAngle) {
        this.rotationAngle = _rotationAngle;
        this.originX = 0
        this.originY = 3.5 * this.size + 3 * this.spacing;
        this.draw();

        this.posX = -this.posX;
        this.posY = -this.posY;
        this.draw();
    }

    draw() {
        if (this.posX == null && this.posY == null) {
            this.posX = this.originX;
            this.posY = this.originY;
        }
        ctx.fillStyle = this.colorFill;
        ctx.fillRect(this.posX - this.size / 2, this.posY - this.size / 2, this.size, this.size);
        ctx.strokeStyle = this.colorStroke;
        ctx.lineWidth = 2;
        ctx.strokeRect(this.posX - this.size / 2, this.posY - this.size / 2, this.size, this.size);
    }


}