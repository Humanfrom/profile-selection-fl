import { Vector } from "./math.js";

export class Controller{
    canvas = null;
    ctx = null;
    _dateTime = 0;
    alive = 0;
    deltaTime = 1;

    
    unit = 10;
    defaultUnit = 10;
    zoomScale = 1;

    drawCombinations = false;
    finalBend = false;

    stopWhenCollide = false;

    selectedPress = 0;

    cons = {
        ratio: 1,
        width: 1200,
        height: 1000,
        offset: {
            x: 0,
            y: 0,
        },
        mousePos: {
            x: 0,
            y: 0,
        },
        cellsDraw: true,
        headState:  false,
    
        formPoint:  0,
        formStage:  0,
    
        debugs: {
            selectedPoint: {x: 0,y: 0},
            drawCollider:  false,
            drawPoints:  false,
            drawPlanePoints:  false,
        },
        isMobile: false,
    
        lastDist: 0,
        scaling:  false,
        prevTouch: {
            x: 0,
            y: 0,
        }
    };

    constructor(){
        this.cons.isMobile = window.mobileCheck();
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");

        this._dateTime = new Date();

        this.cons.ratio = this.canvas.clientWidth / this.canvas.clientHeight;
        this.cons.width = this.canvas.clientWidth;
        this.cons.height = this.cons.width / this.cons.ratio;

        this.canvas.width = this.cons.width;
        this.canvas.height = this.cons.height;

        this.unit = this.cons.width / 50;
        if(this.cons.ratio < 1){
            this.unit = this.cons.height / (window.mobileCheck() ? 25 : 50);
        }
        this.defaultUnit = this.cons.width / 50;

        this.cons.offset = {
            x:this.canvas.width * 0.5,
            y:this.canvas.height * 0.5,
        };
        this.ctx.save();
        this.ctx.transform(1, 0, 0, -1, 0, this.canvas.height);
        this.ctx.translate(this.cons.offset.x, this.cons.offset.y);
    }
    setZoom(zoom){
        this.zoomScale = zoom;
        this.unit = this.defaultUnit * this.zoomScale;
    }
}