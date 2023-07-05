
"use strict";

class Iteti {

    defaults = {
        background: [240, 240, 240, 255],
        margin: 0.08,
        size: 81
    };

    constructor(hash, options) {

        this.hash = hash;
        this.options = typeof(options) === 'object' ? options : this.defaults;

        this.background = this.options.background || this.defaults.background;
        this.margin = this.options.margin || this.defaults.margin;
        this.size = this.options.size || this.defaults.size;
    }

    render(ctx, canvas) {
        
        var width = canvas.width;
        var squareCountRow = Math.sqrt(this.size);
        var unitWidth = width / squareCountRow;
        
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "rgb(0, 0, 0)";

        for (var i = 0; i < squareCountRow * 3; i++) {

            var check = (parseInt(this.hash.charAt(i), 10) % 2) ? 0 : 1;

            if (check) {

                if (i < squareCountRow) {
                    ctx.fillRect((width - unitWidth) / 2, unitWidth * i, unitWidth + 0.5, unitWidth + 0.5);
                } else if (i < squareCountRow * 2) {
                    ctx.fillRect((width - unitWidth) / 2 + unitWidth,  unitWidth * (i - squareCountRow), unitWidth + 0.5, unitWidth + 0.5);
                    ctx.fillRect((width - unitWidth) / 2 - unitWidth,  unitWidth * (i - squareCountRow), unitWidth + 0.5, unitWidth + 0.5);
                } else if (i < squareCountRow * 3) {
                    ctx.fillRect((width - unitWidth) / 2 + 2 * unitWidth,  unitWidth * (i - 2 * squareCountRow), unitWidth + 0.5, unitWidth + 0.5);
                    ctx.fillRect((width - unitWidth) / 2 - 2 * unitWidth,  unitWidth * (i - 2 * squareCountRow), unitWidth + 0.5, unitWidth + 0.5);
                }   

            }
            
        }
    }

}
