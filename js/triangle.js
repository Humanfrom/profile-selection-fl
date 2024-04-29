import { Solid, Plane, Vector, Point } from "./lib/math.js";
import { Prefabs } from "./lib/prefab.js";
import {Controller} from "./lib/controller.js";
import {Input} from "./lib/input.js";
import {keysHandler} from "./keyController.js";

window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

var bodies = [];

var order = [];

var _realDeltaTime = 0;

export const controller = new Controller();
const input = new Input(controller, keysHandler);

var lineWidth = 1;

var STEP_DRAW = false;

const HEAD_SPEED = 0.1;
const  DISTANSE_TO_SPAWN_POINT = 0.01;
const ALONE_RADIUS = 1;

var drawHandler = -1;

var cross1 = [];


var drawSpeedMultiplier = 3;

var _simEndEventHandler = null;

var debug = {

};

function rotate(dir){
    if(bodies.length < 3 || controller.bendStarted){
        return;
    }
    bodies[4].rotateAroundPoint(new Vector(), 90 * dir);
}


window.addEventListener("load",()=>{

    controller.setZoom(16);

    spawn();

    document.getElementById("rotate-left").addEventListener("click",()=>{rotate(1)});
    document.getElementById("rotate-right").addEventListener("click",()=>{rotate(-1)});

    // tick();
    // setInterval(tick, 1);
    tick();
    drawHandler = setInterval(()=>{
        draw(false);
    }, 1000 / 120);
    setInterval(()=>{
        debug["TPS"] = `${_realDeltaTime}`;
    }, 250);
    setInterval(()=>{
        var s = "";

        var inside = [];
        for(let i = 0;i < bodies.length;i++){
            if(Solid.prototype.isPrototypeOf(bodies[i])){ 
                if(bodies[i].isInside(input.getMousePosition())){
                    inside.push(i);
                }
            }
        }
    
    
    
    
    
        debug["inside"] = inside.join(",");

        debug["mouse"] = input.getMousePosition();
        if(bodies[1] != null)
            debug["inside1"] = bodies[1].isInside(input.getMousePosition());
        debug["angle"] = 0;
        debug["draw comb"] = controller.drawCombinations;

        if(bodies[4].points.length > 2){
            debug["angle"] = nearestAngle(bodies[4].points.length - 2);
        }

        Object.keys(debug).forEach(k=>{
            s += `
                ${k}: ${debug[k]}
                <br>
            `;
        });
        
        document.getElementById("debug").innerHTML = s;
        // document.getElementById("debug").innerText = `x: ${controller.cons.mousePos.x}, y:${controller.cons.mousePos.y}`;
    }, 1);

    bend._spawn = spawn;
    bend.test = (()=>{
        console.log(bodies[4].isColliding(bodies[0]));
        console.log(bodies[4].isColliding(bodies[1]));
    });
    bend._calcBendPoint = calcBendPoint;
    bend.controller = controller;
    bend.updateCanvas();
    uiLoaded();
    // bend.bend();
});


function start(){

    nextStage();
}

var _f = -1;


function spawn(anvilId, headId){

    bodies = [];

    let n = controller.selectedPress;
    
    if(anvilId === undefined || headId === undefined) {
        switch(n){
            case 1:{
                bodies.push(Prefabs.spawnHead_01());
                bodies.push(Prefabs.spawnAnvil_01());
                break;
            }
            case 0:{
                bodies.push(Prefabs.spawnHead_02());
                bodies.push(Prefabs.spawnAnvil_02());
                break;
            }
            case 2:{
                bodies.push(Prefabs.spawnHead_03());
                bodies.push(Prefabs.spawnAnvil_03());
                break;
            }
            case 3:{
                bodies.push(Prefabs.spawnHead_04());
                bodies.push(Prefabs.spawnAnvil_04());
                break;
            }
            case 4:{
                bodies.push(Prefabs.spawnHead_05());
                bodies.push(Prefabs.spawnAnvil_05());
                break;
            }
            case 5:{
                bodies.push(Prefabs.spawnHead_06());
                bodies.push(Prefabs.spawnAnvil_06());
                break;
            }
            case 6:{
                bodies.push(Prefabs.spawnHead_06());
                bodies.push(Prefabs.spawnAnvil_07());
                break;
            }
            case 7:{
                bodies.push(Prefabs.spawnHead_06());
                bodies.push(Prefabs.spawnAnvil_08());
                break;
            }
            case 8:{
                bodies.push(Prefabs.spawnHead_06());
                bodies.push(Prefabs.spawnAnvil_11());
                break;
            }
            case 9:{
                bodies.push(Prefabs.spawnHead_06());
                bodies.push(Prefabs.spawnAnvil_09());
                break;
            }
            case 10:{
                bodies.push(Prefabs.spawnHead_06());
                bodies.push(Prefabs.spawnAnvil_10());
                break;
            }
            default:{
                bodies.push(Prefabs.spawnHead_02());
                bodies.push(Prefabs.spawnAnvil_02());
                break;
            }
        }
    }
    

    if(anvilId !== undefined && headId !== undefined) {
        switch(headId) {
            case 0:{
                bodies.push(Prefabs.spawnHead_01());
                break;
            }
            case 1:{
                bodies.push(Prefabs.spawnHead_02());
                break;
            }
            case 2:{
                bodies.push(Prefabs.spawnHead_03());
                break;
            }
            case 3:{
                bodies.push(Prefabs.spawnHead_04());
                break;
            }
            case 4:{
                bodies.push(Prefabs.spawnHead_05());
                break;
            }
            case 5:{
                bodies.push(Prefabs.spawnHead_06());
                break;
            }
            default:{
                bodies.push(Prefabs.spawnHead_01());
                break;
            } 
        }
        
        switch(anvilId) {
            case 0:{
                bodies.push(Prefabs.spawnAnvil_01());
                break;
            }
            case 1:{
                bodies.push(Prefabs.spawnAnvil_02());
                break;
            }
            case 2:{
                bodies.push(Prefabs.spawnAnvil_03());
                break;
            }
            case 3:{
                bodies.push(Prefabs.spawnAnvil_04());
                break;
            }
            case 4:{
                bodies.push(Prefabs.spawnAnvil_05());
                break;
            }
            case 5:{
                bodies.push(Prefabs.spawnAnvil_06());
                break;
            }
            case 6:{
                bodies.push(Prefabs.spawnAnvil_07());
                break;
            }
            case 7:{
                bodies.push(Prefabs.spawnAnvil_08());
                break;
            }
            case 8:{
                bodies.push(Prefabs.spawnAnvil_11());
                break;
            }
            case 9:{
                bodies.push(Prefabs.spawnAnvil_09());
                break;
            }
            case 10:{
                bodies.push(Prefabs.spawnAnvil_10());
                break;
            }
            default:{
                bodies.push(Prefabs.spawnAnvil_02());
                break;
            }
        }
    }

    
    bodies.push(Prefabs.headRoot());
    bodies.push(Prefabs.anvilRoot());

    bodies.push(new Plane(
        new Vector(0,0.025),
        bend.length,2,0,
        ColorTheme[settings.theme].color.planePoint,ColorTheme[settings.theme].color.plane,
        0.025,0.1
    ));

    draw(true);
}

function calcBendPoint(simEndHandle = null){
    if(simEndHandle != null){
        _simEndEventHandler = simEndHandle;
    }
    debug["permutations count: "] = bend.bendOrd.length;
    debug["current permutation: "] = `${bend.currentBendOrd + 1} of ${bend.bendOrd.length}`;
    debug["current bend: "] = `${bend.currentBend + 1} of ${bend.initialPoints.length}`;
    bend.points = [];


    // debug = [];
    {
        const instrument = pressVariants[uiController.pressList.selectedPress]

        const row = strengthTable.rows.indexOf(+settings.preview.lineWidth)
        const col = strengthTable.columns.indexOf(instrument.gap)

        var f = document.querySelector("#unactive-popup > h2").innerText = `${bend.currentBendOrd + 1} из ${bend.bendOrd.length}`;
        document.querySelector("#unactive-popup > h2:nth-of-type(2)").innerHTML = pressVariants[uiController.pressList.selectedPress].description;
        document.querySelector("#unactive-popup > h2:last-child").innerHTML = `Усилие: ${strengthTable.values[row][col]}т`
        if(controller.drawCombinations){
            _calc();
        }else{
            bend.bendStarted = false;
            setTimeout(_calc,1);
        }
        // _calc();
    }

    function _calc(){
        
        //next permut arrray
        bend.bendStarted = true;

        if(bend.currentBendOrd < bend.bendOrd.length){
            for(let i = 0;i < bend.initialPoints.length;i++){
                bend.points.push(bend.initialPoints[bend.bendOrd[bend.currentBendOrd][i]]);
                // if(bend.points[i].angle > 180){
                //     // bend.points[i].angle = 360 - Math.abs(180 - bend.points[i].angle);
                // }
            }
        }

            //no combination
        if(bend.currentBendOrd >= bend.bendOrd.length){

            ///Пока пусть будет так, но нужно разобрать говно
            controller.drawCombinations = false;
            uiController.calcPogressPopup(false);
            // inputPopup('input');
            // alert("There is no valid bending combination");
            
            spawn();
            bend.currentBend = 0;
            bend.bendStarted = false;
            _simEndEventHandler();
            return;
            ////
            
            if(controller.drawCombinations == false){
                //если выключен показ комбинация - включает и показывает удачную
                new pblPopup({
                    startPosition: "top",
                    timeout: 5000,
                    title: "Ошибка. Комбинации не найдено.",
                    description: "Будет проигран последний вариант симуляции.<br>Если вы уверены что произошла ошибка симуляции попробуйте поставить точность симуляции выше.",
                }).Show();
                bend.currentBendOrd--;
                bend.currentBend = 0;
                bend.bendStarted = true;
                controller.stopWhenCollide = true;
                spawn();
                controller.drawCombinations = true;
                
                uiController.calcPogressPopup(false);

                calcBendPoint();
                return;
            }else{
                controller.drawCombinations = false;
                uiController.calcPogressPopup(false);
                // inputPopup('input');
                // alert("There is no valid bending combination");
                
                spawn();
                bend.currentBend = 0;
                bend.bendStarted = false;
                return;
            }
        }

        if(bend.currentBend >= bend.initialPoints.length || bend.currentBend == -1){

            if(bend.points[bend.points.length - 1].angle > 180){
                bodies[4].reverse();
                draw(true);
                bodies[4].rotateAroundPoint(bodies[4].position, 180);
                draw(true);
            }

            draw(true);
            bend.bendStarted = false;
            bend.currentBend = 0;
            // bodies[0] = null;
            // bodies[0].position.x = -100;
            // bodies[1].position.x = -100;

            bodies[1] = null;
            bodies[0] = null;

            var p = Math.floor((bodies[4].points.length - 1) / 2);

            var dir = Vector.VectorTo(bodies[4].points[0].position, bodies[4].points[0 + 1].position);
            var angle = Vector.angle(dir, new Vector(-1, 0));
            dir = new Vector(0,0);
            for(let i = 0; i < bodies[4].points.length;i++){
                dir = dir.plus(bodies[4].points[i].position);
            }

            dir = dir.multiply(1 / bodies[4].points.length);

            bodies[4].offset(-dir.x, -dir.y);
            
            if(bend.points[bend.points.length - 1].angle > 180){
                bodies[4].rotateAroundPoint(new Vector(0,0), -angle);
            }else{
                bodies[4].rotateAroundPoint(new Vector(0,0), angle);
            }
            bodies[4].position = new Vector(0,0);

            //true для дебага, false для прода
            if(controller.drawCombinations == false){
                //если выключен показ комбинация - включает и показывает удачную
                bend.currentBend = 0;
                bend.bendStarted = true;
                spawn();
                controller.drawCombinations = true;
                
                uiController.calcPogressPopup(false);

                calcBendPoint();
                return;
            }else{
                controller.drawCombinations = false;
                uiController.calcPogressPopup(false);

                var b = [];
                bend.bendOrd[bend.currentBendOrd].forEach(e=>{
                    b.push(e + 1);
                })
                
                new pblPopup({
                    startPosition: "top",
                    timeout: 5000,
                    title: "Найдена успешная комбинация!",
                    description: `Номер комбинации: #${bend.currentBendOrd + 1}<br>
                    Порядок сгиба: ${b.join(", ")}<br>
                    ${pressVariants[uiController.pressList.selectedPress].description}
                    `,
                }).Show();

                // alert(`Comb# ${bend.currentBendOrd}\nCombination: ${bend.bendOrd[bend.currentBendOrd].join(', ')}`);
            }




            return;
        }
        var d = bend.points[bend.currentBend].distance;
        var ds = 0;
        var p = 0;

        //calc prev point;

        
        if(bend.currentBend > 0){
            if(bend.points[bend.currentBend - 1].angle > 180){
                bodies[4].reverse();
                draw(true);
                bodies[4].rotateAroundPoint(bodies[4].position, 180);
                draw(true);
            }
        }

        while(ds < d){
            ds += (bodies[4].points[p + 1].position.minus(bodies[4].points[p].position)).length();
            p++;
        }
        p--;
        if(true){
            
            bodies[4].position = new Vector(0,0);
            bodies[0].position = new Vector(0,0.07068946809815344);
    
            draw(true);

            ds -= (bodies[4].points[p].position.minus(bodies[4].points[p + 1].position)).length();
    
            var pointDistance = bend.points[bend.currentBend].distance;
            // if(bend.currentBend > 0 && bend.points[bend.currentBend].distance > bend.points[bend.currentBend - 1].distance){
            //     pointDistance -= bend.points[bend.currentBend - 1].distance;
            // }else if(bend.currentBend > 0){
            //     pointDistance -= ds;
            // }

            pointDistance -= ds;

            // if(bend.points[bend.currentBend].angle > 180){

            //     pointDistance *= -1;
            // }

            

            var angle = 0;

            var pOffset = 0;


            bodies[4].addPointAfter(p + pOffset, pointDistance);
            draw(true);


            bodies[4].updateCollision();

            function offset(offset = 0){
                var _d = bend.points[bend.currentBend].distance;
                var _ds = 0;
                var _p = 0;
                while(_ds - _d <= -0.0001){
                    _ds += Vector.length(bodies[4].points[_p].position, bodies[4].points[_p + 1].position)
                    // _ds += (bodies[4].points[_p + 1].position.minus(bodies[4].points[_p].position)).length();
                    _p++;
                }
                _p--;
                _p += offset;
                bodies[4].offset(
                        bodies[4].points[_p + 1].position.x * -1,
                        bodies[4].points[_p + 1].position.y * -1,
                );
            }


        
            {
                var p1 = bodies[4].points[p].position.plus(bodies[4].position);
                var p2 = bodies[4].points[p + 1].position.plus(bodies[4].position);

                var dir = Vector.VectorTo(p1, p2);
                angle = Vector.angle(dir, new Vector(-1, 0), true);
                
                if(p1.y < p2.y){
                    angle *= -1;
                }
            }
    
            
            // angle *= -1;
            

            // if(bend.currentBend != 0){
            //     if(bend.points[bend.currentBend].distance < bend.points[bend.currentBend - 1].distance){
            //         angle *= -1;
            //         // angle += 180;
            //     }
            // }

    
            bodies[4].rotateAroundPoint(bodies[4].position, angle);
            draw(true);
            
            
            offset();
            draw(true);

            
            if(bend.points[bend.currentBend].angle > 180){
                bodies[4].reverse();
                draw(true);
                bodies[4].rotateAroundPoint(bodies[4].position, 180);
                draw(true);
            }

            bodies[4].updateCollision();
            bodies[4].position.y = 0.05;
            draw(true);
            // {
            //     var v1 = bodies[4].isColliding(bodies[1]);
            //     var v0 = bodies[4].isColliding(bodies[0]);
            //     if(v1 >= 0 || v0 >= 0){
            //         bend.currentBend = 0;
            //         bend.currentBendOrd++;
            //         spawn();
            //         calcBendPoint();
            //     }
            // }
            var cross = false;
            for(let i = 0;i < bodies[4].points.length - 1;i++){
                var p2 = bodies[4].points[i].position.plus(bodies[4].position);
                var p1 = bodies[4].points[i + 1].position.plus(bodies[4].position);
    
                var b = true;
    
    
                {
                    var crossPos = bodies[1].lineCross(p2, p1);
                    if(crossPos != null){
                        controller.ctx.fillStyle = ("red");
                        controller.ctx.fillRect(crossPos.x * controller.unit - 3,crossPos.y * controller.unit - 3, 5, 5);
                        
                        controller.ctx.fillStyle = ("green");
                        controller.ctx.fillRect(p1.x * controller.unit - 3,p1.y * controller.unit - 3, 50, 50);
                        controller.ctx.fillRect(p2.x * controller.unit - 3,p2.y * controller.unit - 3, 50, 50);
                        var points = bodies[1].collisionPoints[bodies[1].findNearestPoints(crossPos)[0]].position.plus(bodies[1].position).minus(crossPos).length();
                        if(points > 0.001){
                            cross1.push(crossPos);
                            cross = true;
                            debug["cross"] = 2;
                            break;
                        }
                    }
                }
            }

                
            if(cross){
                bend.currentBend = 0;
                bend.currentBendOrd++;
                spawn();
                calcBendPoint();
            }


            draw(true);

            

            draw(true);
            
    
            // bend.bendStarted = false;
        }else{
            ds -= (bodies[4].points[p].position.minus(bodies[4].points[p + 1].position)).length();

            
            bodies[4].offset(
                bodies[4].points[p].position.x,
                bodies[4].points[p].position.y,
            )

            var dir = Vector.VectorTo(bodies[4].points[p].position, bodies[4].points[p + 1].position);
            var angle = Vector.angle(dir, new Vector(-1, 0));
            dir = dir.multiply(d - ds);
            dir = dir.minus(bodies[4].points[p].position);
            bodies[4].offset(dir.x, dir.y * -1);
            // bend.bendStarted = false;

            angle *= -1;

            if(bend.currentBend != 0){
                if(bend.points[bend.currentBend].distance < bend.points[bend.currentBend - 1].distance){
                    angle *= -1;
                }
            }

            bodies[4].rotateAroundPoint(new Vector(0,0), angle);
            bodies[4].position = new Vector(0,0);

            bodies[0].position = new Vector(0,0.07068946809815344);

        }
    }
}

async function tick(){
    while(true){
        var dt = new Date();
        controller.deltaTime = (dt.getTime() -controller._dateTime.getTime()) / 1000;
        controller._dateTime = dt;
        controller.alive += controller.deltaTime;
        _realDeltaTime = controller.deltaTime;

        debug["plane pos"] = bodies[4].position;

        if(bend.bendStarted){
            if(!controller.drawCombinations){
                controller.deltaTime = settings.simTickDelta;
                // controller.deltaTime = 0.0025;
            }else{
                controller.deltaTime = 0.0025;
            }

        
            if(controller.drawCombinations){
                // await headTick();
                for(let i = 0;i < drawSpeedMultiplier;i++){
                    if(!bend.bendStarted) break;
                    await headTick();
                }
                await new Promise(r => setTimeout(r, 1));
            }else{
                await headTick();
                // draw(true);
                // await new Promise(r => setTimeout(r, 1));
            }
        }else{
            await new Promise(r => setTimeout(r, 1));
        }

    }

    // setTimeout(()=>{
    //     tick();
    // },1);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function headTick(){

    if(bodies[0] == null || bodies[1] == null || bodies[4] == null){
        return;
    }
    // if(nearestAngle() <= bend.points[bend.currentBend].angle){
    //     return;
    // }
    // if(bend.bendStarted == false){
    //     return;
    // }

    var bottomPointReached = false;

    if(bend.bendStarted || input.keys["KeyS"]){
    // if(input.keys["KeyS"]){
        if(Solid.isColliding(bodies[0],bodies[1]) == false){
            for(let i = 1;i < 10;i++){
                bodies[0].position.y -= HEAD_SPEED / i * controller.deltaTime;
                bodies[2].position.y -= HEAD_SPEED / i * controller.deltaTime;
                if(Solid.isColliding(bodies[0],bodies[1]) == true){
                    bottomPointReached = true;
                    bodies[0].position.y += HEAD_SPEED / i * controller.deltaTime;
                    bodies[2].position.y += HEAD_SPEED / i * controller.deltaTime;
                }else{
                    break;
                }
            }
        }
    }

    var inside = [];
    for(let i = 0;i < bodies.length;i++){
        if(Solid.prototype.isPrototypeOf(bodies[i])){ 
            if(bodies[i].isInside(new Vector(controller.cons.mousePos.x / controller.unit, controller.cons.mousePos.y / controller.unit))){
                inside.push(i);
            }
        }
    }

    



    debug["colliding"] = false;

    while(bodies[4].isColliding(bodies[0]) >= 0){
        debug["colliding"] = true;
        var pos = bodies[0].collisionPoints[bodies[0].needleIndex].position.plus(bodies[0].position);
        var force = HEAD_SPEED;
        // if(bend.points[bend.currentBend].angle > 180){
        //     force *= -1;
        // }
        bodies[4].position.y = pos.y - (force * controller.deltaTime);
        break;

        // bodies[4].position.y -= 0.1 * controller.deltaTime;
    }

    var centerPoint = nearestPoint();

    

    var angle = nearestAngle();

    var cross = false;
    crossPos = [];

    
    var desiredAngle = bend.points[bend.currentBend].angle;
    if(bend.points[bend.currentBend].angle > 180){
        var desiredAngle = 180 - (bend.points[bend.currentBend].angle % 180)
        // angle = 180 - angle;
    }

    debug["desired angle"] = desiredAngle;


    if(centerPoint != 0 && centerPoint < bodies[4].points.length - 1 && centerPoint != -1 && angle > desiredAngle){
        debug["needle to bend-p"] = bodies[0].collisionPoints[bodies[0].needleIndex].position.plus(bodies[0].position).minus(bodies[4].points[centerPoint].position.plus(bodies[4].position)).length();
        col(0, centerPoint, 1);
        col(bodies[4].points.length - 1, centerPoint, -1);
    }
    // col(
    //     bodies[4].points.length - 1,
    //     bodies[4].points.length - 2,
    //     -1);

    function col(n1, n2, dir = 1){

        var pos = bodies[4].findNearestSurfaceFromArray(bodies[1].collisionPoints, bodies[1].position);
        pos = pos[0];
        pos.surface = null;

        pos.surface = bodies[1].lineCross(
            bodies[4].points[n2 - dir].position.plus(bodies[4].position),
            bodies[4].points[n2].position.plus(bodies[4].position)
        )

        if(pos.surface != null){
            var p = bodies[1].findNearestPoints(pos.surface);

            var solPoint = bodies[1].collisionPoints[p].position.plus(bodies[1].position);
            var np = bodies[4].findNearestSurface(solPoint).surface;

            var distance = solPoint.minus(np).length();

    
            var angle = Vector.angle(
                Vector.VectorTo(
                    bodies[1].collisionPoints[p].position.plus(bodies[1].position),
                    bodies[4].points[n2].position.plus(bodies[4].position)
                ),
                Vector.VectorTo(
                    pos.surface,
                    bodies[4].points[n2].position.plus(bodies[4].position),
                )
            );

            //rotate by rot-points/surface
            if(angle != 0 && !isNaN(angle) && distance <= DISTANSE_TO_SPAWN_POINT){
                for(let i = n1; i != n2;i += dir){
                    bodies[4].points[i].position.rotateAroundPoint(bodies[4].points[n2].position, angle * dir * 2);
                }
            }else{
                if(angle != 0 && !isNaN(angle) && (distance > ALONE_RADIUS || true) && bodies[1].isInside(bodies[4].points[n1].position.plus(bodies[4].position))){
                    while(bodies[1].isInside(bodies[4].points[n1].position.plus(bodies[4].position))){
                        bodies[4].points[n1].position.rotateAroundPoint(bodies[4].points[n2].position, 45 * dir < 0 ? 0.1 : -0.1);
                    }
                    bodies[4].points[n1].position.rotateAroundPoint(bodies[4].points[n2].position, 45 * dir < 0 ? 1 : -1);
                }
                // bend.bendStarted = false;
            }
        }
    }

    
    angle = nearestAngle();
    

    if(angle <= desiredAngle || angle <= pressVariants[controller.selectedPress].minAngle)
    {
        debug["cross"] = -1;
        debug["crossP"] = "";
        // debug["%angle"] = 

        bodies[0].position.y += HEAD_SPEED / 1 * controller.deltaTime;
        
        
        if(bend.points[bend.currentBend].angle > 180){
            bodies[4].position.y += HEAD_SPEED / -2 * controller.deltaTime;
        }else{
            bodies[4].position.y += HEAD_SPEED / 2 * controller.deltaTime;
        }

        for(let i = 0;i < bodies[4].points.length - 1;i++){
            var p1 = bodies[4].points[i].position.plus(bodies[4].position);
            var p2 = bodies[4].points[i + 1].position.plus(bodies[4].position);

            // i != centerPoint && i - 1 != centerPoint
            var b1 = i != centerPoint;
            var b2 = i - 1 != centerPoint;
            var b3 = i + 1 != centerPoint;
            var b = true;


            if(b){
                var crossPos = bodies[0].lineCross(p2, p1);

                if(crossPos != null){
                    controller.ctx.fillStyle = "blue";
                    // -0.03806400548458925
                    // 0.33095452294404576 

                    controller.ctx.fillRect(crossPos.x * controller.unit - 2, crossPos.y * controller.unit -2, 4, 4);
                    controller.ctx.fillStyle = "red";

                    // var nearestToCross = crossPos;

                    controller.ctx.fillStyle = "green";
                    controller.ctx.fillRect(crossPos.x * controller.unit - 2, crossPos.y * controller.unit -2, 4, 4);

                    var needlePos = bodies[0].collisionPoints[bodies[0].needleIndex].position.plus(bodies[0].position);
                    var needleToCrossDistance = crossPos.minus(needlePos).lengthSqr();
                    // 0.0000000000000001
                    if(needleToCrossDistance >= 0.00001 * 0.00001){
                        cross = true;
                        debug["cross"] = 1;
                        debug["crossP"] += `${i}, `;
                    }
    
                }
            }
            {
                var crossPos = bodies[1].lineCross(p2, p1);
                if(crossPos != null){
                    var points = bodies[1].collisionPoints[bodies[1].findNearestPoints(crossPos)[0]].position.plus(bodies[1].position).minus(crossPos).length();
                    if(points > 0.001){
                        cross1.push(crossPos);
                        cross = true;
                        debug["cross"] = 2;
                    }
                }else{
                    var crossPos = bodies[0].lineCross(p2, p1);
                    if(crossPos != null){
                        var points = bodies[1].collisionPoints[bodies[1].findNearestPoints(crossPos)[0]].position.plus(bodies[1].position).minus(crossPos).length();
                        if(points > 0.001){
                            cross1.push(crossPos);
                            cross = true;
                            debug["cross"] = 2;
                        }
                    }
                }
            }
        }
    }

    // if(cross){
    //     bend.bendStarted = false;
    //     return;
    // }


    debug["debug1"] = (bend.points.length > 0 && bend.bendStarted);
    debug["debug2"] = `${angle <= bend.points[bend.currentBend].angle} && ${Solid.isColliding(bodies[1],bodies[4]) == false}`;


    if(bend.points.length > 0 && bend.bendStarted){

        if(angle <= desiredAngle){
            if(cross == false){
                draw(true);
                bend.bendStarted = false;
                bend.currentBend++;
                calcBendPoint();
                return;
            }
        }
    }

    // debug["bottomReached"] = bottomPointReached;

    // (bottomPointReached && cross)
    if((Solid.isColliding(bodies[1],bodies[4]) && bottomPointReached) || (angle <= desiredAngle && cross)){
        // console.clear();
        
        bend.currentBend = 0;
        bend.currentBendOrd++;

        // bend.bendStarted = false;

        if(controller.stopWhenCollide){
            bend.bendStarted = false;
        }else{
            spawn();
            calcBendPoint();
        }
        return;
    }
    

    nearestPoint();
}

export function nearestPoint(debug = false){
    if(bodies[4].points.length == 2){
        return -1;
    }

    var bPoint = bodies[0].collisionPoints[bodies[0].needleIndex].position.plus(bodies[0].position);
    bPoint = bodies[4].position;

    var nPointInd = bodies[4].findNearestPoints(bPoint);

    return nPointInd[0];
}

function nearestAngle(centerPoint){

    if(bodies[0] == null || bodies[1] == null || bodies[4] == null){
        return;
    }
    

    if(bodies[4].points.length == 2){
        return 180.0;
    }

    var bPoint = bodies[0].collisionPoints[bodies[0].needleIndex].position.plus(bodies[0].position);

    // var nPointInd = bodies[4].findNearestPoints(bPoint)[0];
    var nPointInd = centerPoint;
    if(nPointInd == undefined){
        nPointInd = bodies[4].findNearestPoints(bPoint)[0];
        // nPointInd = bodies[0].needleIndex;
    }
    
    var distance = bPoint.minus(bodies[4].points[nPointInd].position).minus(bodies[0].position).length();
    // if(distance > 0.1){
    //     return 180.0;
    // }

    if(nPointInd == 0 || nPointInd == bodies[4].points.length - 1){
        return 180.0;
    }


    var v1 = Vector.VectorTo(
        bodies[4].points[nPointInd].position,
        bodies[4].points[nPointInd - 1].position
    );

    var v2 = Vector.VectorTo(
        bodies[4].points[nPointInd].position,
        bodies[4].points[nPointInd + 1].position
    );

    var a = Math.abs(Vector.angle(v1, v2));

    return a;
}

function draw(stepDraw = false){
    if(stepDraw == false && STEP_DRAW == true){
        return;
    }
    // if(stepDraw){
    //     return;
    // }
    controller.ctx.clearRect(controller.cons.width * -1 - controller.cons.offset.x, controller.cons.height * -1 + controller.cons.offset.y, controller.cons.width * 2, controller.cons.height * 2);

    ////отрисовка сетки
    if(controller.cons.cellsDraw){drawCell();}



    controller.ctx.fillStyle = "green";
    controller.ctx.fillRect(input.getMousePosition().x * controller.unit - 1,input.getMousePosition().y * controller.unit - 1, 2,2);

    controller.ctx.strokeStyle = "green";

    // {
    //     var p1 = bodies[4].position;
    //     var p2 = input.getMousePosition();
    //     var crossPos = bodies[1].lineCross(p2, p1);
    //     controller.ctx.strokeStyle = crossPos == null ? "green" : "red";

    //     controller.ctx.beginPath();
    //     controller.ctx.moveTo(
    //         p1.x * controller.unit,
    //         p1.y * controller.unit,
    //     );
    //     if(crossPos == null){
    //         controller.ctx.lineTo(
    //             p2.x * controller.unit,
    //             p2.y * controller.unit,
    //         );
    //     }else{
    //         controller.ctx.lineTo(
    //             crossPos.x * controller.unit,
    //             crossPos.y * controller.unit,
    //         );
    //     }
    //     controller.ctx.stroke();

    // }

    // controller.ctx.fillStyle = "green";
    // cross1.forEach(e=>{
    //     controller.ctx.fillRect(e.x * controller.unit - 2,e.y * controller.unit - 2,5,5);
    // })

    bodies.forEach(p => {
        if(p == null){
            return;
        }
        p.draw(controller);
    });

    // {
    //     var p2 = new Vector( -.2144, 0.1634);
    //     var p1 = input.getMousePosition();

    //     controller.ctx.beginPath();
    //     controller.ctx.strokeStyle = "yellow";

    //     controller.ctx.moveTo(p1.x * controller.unit, p1.y * controller.unit);
    //     controller.ctx.lineTo(p2.x * controller.unit, p2.y * controller.unit);

    //     controller.ctx.stroke();
    //     // 0.2144
    //     // 0.1634
    //     var crossPos = bodies[0].lineCross(p1, p2);
    //     if(crossPos != null){
    //         debug["crossPos"] = crossPos;
    //         controller.ctx.fillStyle = "blue";
    //         controller.ctx.fillRect(crossPos.x * controller.unit - 1, crossPos.y * controller.unit - 1, 2,2);
    //     }
    // }


    function drawCell(){
        controller.ctx.lineWidth = 2;
        controller.ctx.strokeStyle = ColorTheme[settings.theme].color.grid;
        controller.ctx.beginPath();

        var factor = 1 / controller.zoomScale;
        // controller.cons.zoomScale
        var unit = controller.unit / 10;
        //h
        controller.ctx.moveTo(controller.cons.width / -factor, 0);
        controller.ctx.lineTo(controller.cons.width / factor, 0);
        //v
        controller.ctx.moveTo(0, controller.cons.height / -factor);
        controller.ctx.lineTo(0, controller.cons.height / factor);
        controller.ctx.closePath();
        controller.ctx.stroke();

        controller.ctx.strokeStyle = ColorTheme[settings.theme].color.grid;
        controller.ctx.beginPath();
        for(let i = 1;i < controller.cons.width / factor / unit;i++){
            //h
            controller.ctx.moveTo(unit * -i, controller.cons.height / -factor);
            controller.ctx.lineTo(unit * -i, controller.cons.height / factor);
        }
        for(let i = 1;i < controller.cons.width / factor / unit;i++){
            //h
            controller.ctx.moveTo(unit * i, controller.cons.height / -factor);
            controller.ctx.lineTo(unit * i, controller.cons.height / factor);
        }
        for(let i = 1;i < controller.cons.height / factor / unit;i++){
            //v
            controller.ctx.moveTo( controller.cons.width / -factor, unit * i);
            controller.ctx.lineTo( controller.cons.width / factor, unit * i);
        }
        for(let i = 1;i < controller.cons.height / factor / unit;i++){
            //v
            controller.ctx.moveTo( controller.cons.width / -factor, unit * -i);
            controller.ctx.lineTo( controller.cons.width / factor, unit * -i);
        }
        controller.ctx.closePath();
        controller.ctx.stroke();
    }
}