import { Vector } from "./math.js";

export class Input{
    keys = {};
    mouse = {
        position:new Vector(0,0)
    }
    controller = null;

    keyPressFunc = null;

    constructor(controller, keyPressFunc){
        this.controller = controller;
        this.keyPressFunc = keyPressFunc;
        this.controller.canvas.addEventListener("pointermove", (e)=>{
            this.mouse.position = {
                x: e.clientX - this.controller.cons.offset.x,
                y: (e.clientY - this.controller.cons.offset.y) * -1
            };
            if(this.controller.cons.mouseState && !this.controller.cons.isMobile){
                this.controller.cons.offset.x += e.movementX;
                this.controller.cons.offset.y += e.movementY;
                // this.controller.ctx.translate(this.controller.cons.offset.x, this.controller.cons.offset.y);
                this.controller.ctx.translate(e.movementX, e.movementY * -1);
            }
        });
        this.controller.canvas.addEventListener("pointerdown", (e)=>{
            this.mouse.position = {
                x: e.clientX - this.controller.cons.offset.x,
                y: (e.clientY - this.controller.cons.offset.y) * -1
            };
            this.controller.cons.debugs.selectedPoint.x = this.mouse.position.x / this.controller.unit;
            this.controller.cons.debugs.selectedPoint.y = this.mouse.position.y / this.controller.unit;
            
            this.controller.cons.mouseState = true;
        })
        this.controller.canvas.addEventListener("pointerup", (e)=>{
            this.controller.cons.mouseState = false;
        })
        this.controller.canvas.addEventListener("wheel", (e)=>{
            if(e.deltaY > 0){
                this.controller.zoomScale /= 1.5;
            }else{
                this.controller.zoomScale *= 1.5;
            }
            if(this.controller.zoomScale <= 0.25){
                this.controller.zoomScale = 0.5;
            }
            
            this.controller.setZoom(this.controller.zoomScale);
        });

        window.addEventListener("keypress", (e)=>{keyPressFunc(e)})
        
        window.addEventListener("keydown",(e)=>{
            this.keys[e.code] = true;
        });
        window.addEventListener("keyup",(e)=>{
            this.keys[e.code] = false;
        });
    }

    

    getMousePosition(){
        return new Vector(this.mouse.position.x / this.controller.unit, this.mouse.position.y / this.controller.unit);
    }

}