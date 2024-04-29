import { controller, nearestPoint, headTick } from "./triangle.js";

export function keysHandler(e){
    switch(e.code.toLowerCase()){
        case "keyc":{
            controller.cons.debugs.drawCollider = !controller.cons.debugs.drawCollider;
            break;
        }
        case "keyq":{
            controller.cons.debugs.drawPoints = !controller.cons.debugs.drawPoints;
            break;
        }
        case "keye":{
            bend.bendStarted = !bend.bendStarted;
            break;
        }
        case "keyd":{
            controller.drawCombinations = !controller.drawCombinations;
            break;
        }
        case "keyw":{
            bend.bendStarted = true;
            headTick();
            bend.bendStarted = false;
            break;
        }
        case "keyr":{
            nearestPoint(true);
            break;
        }
        case "keya":{
            break;
        }
        case "keyt":{
            break;
        }
    }
}