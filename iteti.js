
"use strict";

class Iteti {

    defaults = {
        background: [240, 240, 240, 255],
        margin: 0.08,
        size: 64,
    };

    // assume a 15-digit hash to start with 
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

        ctx.fillStyle = "rgb(120, 120, 40)";

        for (var i = 0; i < 15; i++) {

            if (i < 5) {
                ctx.fillRect((width - unitWidth) / 2, unitWidth * i, unitWidth, unitWidth);
            } else if (i < 10) {

            } else if (i < 15) {

            }   
            
        }
    }

}
