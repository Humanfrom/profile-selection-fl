var _SHOW = false;
// const TEST_IMPORT = `
//     0;10;2;
//     0;40;
//     55;35;
//     80;45;
//     45;25;
//     45;35;
// `;
// const TEST_IMPORT = `1;0;12;2;55;50;90;50;90;20;`;
// const TEST_IMPORT = `1;0;14;2;100;15;-125;15;100;20;-125;20;100;20;-125;20;100;15;-125;15;`;
// const TEST_IMPORT = `0;0;7.5;2;100;10;90;20;90;15;-90;10;90;10;45;10;`;
const TEST_IMPORT = `3;0;4;2;100;10;90;10;90;10;-90;10;`;
// const TEST_IMPORT = `0;0;13;2;55;50;90;50;90;20;23;10;`;
const START_FROM_ORD = 0;

// const TEST_IMPORT = `
//     0;9;2;
//     0;10;
//     45;20;
//     45;30;
//     35;80;
//     45;85;
// `;

const presets = [
    [`Тарелка`,`9;155;1;155;2;155;3;155;6;155;7;155;8;`],
    [`Ложка`,`9;130;1;132;2;166;3;153;4;`],
    [`test`,`9;101;1;132;2;141;3;122;4;`],
    // [`Тарелка`,``],
]

const strengthTable = {
    rows: [0.5, 0.6, 0.8, 1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30],
    columns: [4, 6, 8, 10, 12, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200, 250],
    values: [
        [4, 3],
        [6, 4, 3],
        [12, 7, 5, 4],
        [undefined, 13, 8, 7],
        [undefined, 18,	13,	10,	8, 6],
        [undefined, undefined, 20, 16, 13, 11, 9],
        [undefined, undefined, undefined, 30, 25, 17, 13, 11],
        [undefined, undefined, undefined, undefined, 39, 29, 21, 18, 14],
        [undefined, undefined, undefined, undefined, undefined, 43, 32, 24, 19, 15],
        [undefined, undefined, undefined, undefined, undefined, undefined, 60, 43, 34, 25, 21, 17],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, 76, 52, 42, 32, 26, 21],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 85, 60, 48, 36, 30, 24],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 107, 85, 69, 50, 43],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 151, 109, 84, 63, 53, 42],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 173, 124, 96, 72, 60, 55],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 213, 150, 120, 95, 75],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 302, 215, 170, 135, 108],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 378, 269, 210, 170],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 240],

    ]
}

const spawnAnvils = [
    {
        id: 0,
        minAngle: 33,
        active: true,
        description:"Матрица BFH 1319 30 R0.6 H100",
        gap: 4,
        deg90: 2.8,
        price: 1
    },
    {
        id: 1,
        minAngle: 90,
        active: true,
        description:"Матрица STP 141 85 R0.8 H115 mod",
        gap: 6,
        deg90: 4,
        price: 2
    },
    {
        id: 2,
        minAngle: 63,
        active: true,
        description:"Матрица AM-3040-45°-V40-H80",
        gap: 8,
        deg90: 5.5,
        price: 3
    },
    {
        id: 3,
        minAngle: 30,
        active: true,
        description:"Матрица AM-2410-30°-3V-_V6_-10_-12_-H60",
        gap: 10,
        deg90: 6.5,
        price: 4
    },
    {
        id: 4,
        minAngle: 80,
        active: true,
        description:"Матрица AM 2040 85° V40 H60",
        gap: 12,
        deg90: 8,
        price: 5
    },
    {
        id: 5,
        minAngle: 30,
        active: true,
        description:"Матрица AT 1080 30° V6 H80",
        gap: 6,
        deg90: 10.5,
        price: 6
    },
    {
        id: 6,
        minAngle: 30,
        active: true,
        description:"Матрица AT 1081 30° V8 H80",
        gap: 8,
        deg90: 10.5,
        price: 7
    },
    {
        id: 7,
        minAngle: 30,
        active: true,
        description:"Матрица AT 1083 30° V12 H80",
        gap: 12,
        deg90: 10.5,
        price: 8
    },
    {
        id: 8,
        minAngle: 30,
        active: true,
        description:"Матрица AT 1084 30° V16 H80",
        gap: 16,
        deg90: 10.5,
        price: 9
    },
    {
        id: 9,
        minAngle: 30,
        active: true,
        description:"Матрица AT 1085 30° V20 H80",
        gap: 20,
        deg90: 10.5,
        price: 10
    },
    {
        id: 10,
        minAngle: 30,
        active: true,
        description:"Матрица AT 1086 30° V25 H80",
        gap: 25,
        deg90: 10.5,
        price: 11
    }
]

const spawnHeads = [
    {
        id: 0,
        active: true,
        description:"Пуансон M0773 V=12 85°",
    },
    {
        id: 1,
        active: true,
        description:"Пуансон M1083 30 V12",
    },
    {
        id: 2,
        active: true,
        description:"Пуансон AP-1023-45°-H100-R6",
    },
    {
        id: 3,
        active: true,
        description:"Пуансон AP-1037-26°-H117-R0,8",
    },
    {
        id: 4,
        active: true,
        description:"Пуансон AP 2002 85° H100 R0,6",
    },
    {
        id: 5,
        active: true,
        description:"Пуансон AP 1319 30° H100 R0,6",
    },
]


const pressVariants = [
    // {
    //     name: "Вариант №1", // название пресса в списке
    //     img: "/public/img/press-img/var-1.png", // картинка-превью пресса
    //     id: 0, // id для спавна
    //     active: true, //optional - добавлять в список - TRUE по умолчанию
    // },
    {
        name: "Матрица BFH 1319 30 R0.6 H100\nПуансон M0773 V=12 85°",
        img: "/public/img/press-img/var-1.png",
        id: 0,
        minAngle: 33,
        active: true,
        description:"BFH 1319 30 R0.6 H100<br>M0773 V=12 85°",
        gap: 4,
        deg90: 2.8
    },
    {
        name: "Матрица STP 141 85 R0.8 H115\nПуансон M1083 30 V12",
        img: "/public/img/press-img/var-2.png",
        id: 1,
        minAngle: 90,
        active: true,
        description:"STP 141 85 R0.8 H115 mod<br>M1083 30 V12 mod",
        gap: 6,
        deg90: 4
    },
    {
        name: "Матрица AM-3040-45°-V40-H80\nПуансон AP-1023-45°-H100-R6",
        img: "/public/img/press-img/var-3.png",
        id: 2,
        minAngle: 63,
        active: true,
        description:"AM-3040-45°-V40-H80<br>AP-1023-45°-H100-R6",
        gap: 8,
        deg90: 5.5
    },
    {
        name: "Матрица AM-2410-30°-3V-H60\nПуансон AP-1037-26°-H117-R0,8",
        img: "/public/img/press-img/var-4.png",
        id: 3,
        minAngle: 30,
        active: true,
        description:"AM-2410-30°-3V-_V6_-10_-12_-H60<br>AP-1037-26°-H117-R0_8",
        gap: 10,
        deg90: 6.5
    },
    {
        name: "Матрица AM 2040 85° V40 H60\nПуансон AP 2002 85° H100 R0,6",
        img: "/public/img/press-img/var-5.png",
        id: 4,
        minAngle: 80,
        active: true,
        description:"Матрица AM 2040 85° V40 H60<br>Пуансон AP 2002 85° H100 R0,6",
        gap: 12,
        deg90: 8
    },
    {
        name: "Матрица AT 1080 30° V6 H80\nПуансон AP 1319 30° H100 R0,6",
        img: "/public/img/press-img/var-6.png",
        id: 5,
        minAngle: 30,
        active: true,
        description:"Матрица AT 1080 30° V6 H80<br>Пуансон AP 1319 30° H100 R0,6",
        gap: 6,
        deg90: 10.5
    },
    {
        name: "Матрица AT 1081 30° V8 H80\nПуансон AP 1319 30° H100 R0,6",
        img: "/public/img/press-img/var-7.png",
        id: 6,
        minAngle: 30,
        active: true,
        description:"Матрица AT 1081 30° V8 H80<br>Пуансон AP 1319 30° H100 R0,6",
        gap: 8,
        deg90: 10.5
    },
    {
        name: "Матрица AT 1083 30° V12 H80\nПуансон AP 1319 30° H100 R0,6",
        img: "/public/img/press-img/var-8.png",
        id: 7,
        minAngle: 30,
        active: true,
        description:"Матрица AT 1083 30° V12 H80<br>Пуансон AP 1319 30° H100 R0,6",
        gap: 12,
        deg90: 10.5
    },
    {
        name: "Матрица AT 1084 30° V16 H80\nПуансон AP 1319 30° H100 R0,6",
        img: "/public/img/press-img/var-11.png",
        id: 8,
        minAngle: 30,
        active: true,
        description:"Матрица AT 1084 30° V16 H80<br>Пуансон AP 1319 30° H100 R0,6",
        gap: 16,
        deg90: 10.5
    },
    {
        name: "Матрица AT 1085 30° V20 H80\nПуансон AP 1319 30° H100 R0,6",
        img: "/public/img/press-img/var-9.png",
        id: 9,
        minAngle: 30,
        active: true,
        description:"Матрица AT 1085 30° V20 H80<br>Пуансон AP 1319 30° H100 R0,6",
        gap: 20,
        deg90: 10.5
    },
    {
        name: "Матрица AT 1086 30° V25 H80\nПуансон AP 1319 30° H100 R0,6",
        img: "/public/img/press-img/var-10.png",
        id: 10,
        minAngle: 30,
        active: true,
        description:"Матрица AT 1086 30° V25 H80<br>Пуансон AP 1319 30° H100 R0,6",
        gap: 25,
        deg90: 10.5
    }

]


function pressVarListGeneration(){
    var listNode = document.querySelector("#press-list > .list");

    for(let i = 0;i < pressVariants.length; i++){
        if(pressVariants[i].active === false || pressVariants[i].active === undefined){
            continue;
        }

        var item = document.createElement("div");
        item.innerText = pressVariants[i].name || `bending-press-id: ${pressVariants[i].id}`;
        item.addEventListener("click",()=>{
            pressVariantSelect(i);
            // pressVariantSelect(i);
        })
        // item.addEventListener("pointerover",()=>{
        //     pressVariantSelect(i);
        // })
        // item.addEventListener("pointerout",()=>{
        //     pressVariantSelect(uiController.pressList.selectedPress);
        // })
        listNode.append(item);
    }
}

function pressVariantSelect(index){
    document.querySelector("#press-list > .preview > img").src = pressVariants[index].img;
    document.querySelector("#press-list > .preview .info > h1").innerText = pressVariants[index].name || `bending-press-id: ${pressVariants[i].id}`;
    document.querySelector("#press-list > .preview .info #v").innerText = `v = ${pressVariants[index].gap} мм`
    document.querySelector("#press-list > .preview .info #b").innerText = `B = ${pressVariants[index].deg90} мм`

    uiController.pressList.selectedPress = index;
    bend.controller.selectedPress = pressVariants[index].id;
    bend._spawn();

    bend.updateCanvas();
    bend.inputsChanged();
    
}

function uiLoaded(){
    bend.importFromString(TEST_IMPORT);
}

window.addEventListener("load",()=>{

    var dropZone = document.getElementById("bend-input");
    dropZone.addEventListener("dragover", bend.dragOver);
    dropZone.addEventListener("dragend", bend.dragEnd);

    window.addEventListener("keypress",(e)=>{
        
        var isInput = e.target.nodeName === "INPUT";
        
        switch(e.code){
            case "Backquote":
                {
                inputPopup('input');
                break;
            }
            case "Digit1":{
                if(isInput){break;}
                if(e.shiftKey){
                    pressVariantSelect(0);
                }else{
                    inputPopup('input');
                }
                break;

            }
            case "Digit2":{
                if(isInput){break;}
                if(e.shiftKey){
                    
                    pressVariantSelect(1);
                }else{
                    inputPopup('press-list');
                }
                break;
            }
            // case "KeyB":{
            //     inputPopup();
            //     bend.bend();
            //     break;
            // }
            case "KeyS":{
                inputPopup('settings-popup');
                break;
            }
            case "KeyF":{
                inputPopup('input');
                break;
            }
            case "KeyB":{
                inputPopup('press-list');
                break;
            }
        }
    });
    pressVarListGeneration();
    
    // inputPopup('press-list', true);
    // inputPopup('pressets-list', true);
    // inputPopup('input', true);

    // // // //debug
    // inputPopup();
    // bend.bend();

    {
        var pressetsList = document.getElementById("pressets-list");

        var s = ``;

        n = 0;
        IMPORT_STRING_EXAMPLES.forEach(e=>{
            s += `
                <p onpointerenter="selectPreset(${n});" onclick="selectPreset(${n});inputPopup('pressets-list',false)">${e.title}</p>
            `
            n++;
        })
        pressetsList.innerHTML = s;
    }
});

function selectPreset(n){
    bend.importFromString(IMPORT_STRING_EXAMPLES[n].string);
    bend.updateCanvas();
    bend.inputsChanged();

    // tab(0);
}

function inputPopup(form, state){

    var _prevState = {};

    [
        'press-list',
        'form',
        'result-rotate',
        'pressets-list',
        'settings-popup',
    ].forEach(e=>{
        var f = document.getElementById(e);
        _prevState[f.id] = f.classList.contains("active");
        toggle(f, false);
    });

    var curState = state;

    switch(form){
        case 'input':{
            toggle(document.getElementById("form"), state);
            toggle(document.getElementById("pressets-list"), false);
            break;
        }
        case 'press-list':{
            toggle(document.getElementById("press-list"), state);
            break;
        }
        case 'settings-popup':{
            toggle(document.getElementById("settings-popup"), state);
            break;
        }
        case 'pressets-list':{
            toggle(document.getElementById("pressets-list"), state);
            toggle(document.getElementById("form"), true);
        }
        default:{
            toggle(document.getElementById("result-rotate"), state);
            break;
        }
    }


    if(curState === false){
        toggle(document.getElementById("result-rotate"), true);
    }

    

    function toggle(element, _state){
        if(_state == undefined){
            if(_prevState[element.id]){
                element.classList.remove("active");
                curState = false;
            }else{
                element.classList.add("active");
                curState = true;
            }
        }else{
            if(_state){
                element.classList.add("active")
                curState = true;
            }else{
                element.classList.remove("active")
                curState = false;
            }
        }
    }

    bend.updateForm();
    bend.updateCanvas();
    bend.inputsChanged();
}


function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

var uiController = {
    resultPrevAngle: 0,
    previewAngle: 90,

    pressList:{
        selectedPress: 0,
    },

    calcPogressPopup(state){
        var f = document.getElementById("unactive-popup");
        if(bend.controller.drawCombinations){
            f.classList.add("non-full");
        }else{
            f.classList.remove("non-full");
        }
        if(state == undefined){
            if(f.classList.contains("active")){
                f.classList.remove("active")
            }else{
                f.classList.add("active")
            }
        }else{
            
            if(!state){
                f.classList.remove("active")
            }else{
                f.classList.add("active")
            }
        }
    }
}


var bend = {
    controller: null,
    _bend:null,
    _spawn:null,
    points:[],
    initialPoints:[],
    length:0.61,
    bendStarted:false,
    currentBend:0,
    _calcBendPoint:null,

    currentHoveredInputN: -1,
    
    bendOrd: [

    ],
    currentBendOrd: 0,

    dragStart(e){

    },
    dragOver(e){
        e.preventDefault();
    },
    dragEnd(e){
        // prevent default action (open as link for some elements)
        e.preventDefault();
        var dropZone = document.getElementById("bend-input");
        var height = dropZone.clientHeight;
        var lineHeight = height / dropZone.childElementCount;
        var offset = getOffset(dropZone);
        var dropPos = e.clientY - offset.top;
        var dropIndex = Math.floor(dropPos / lineHeight);

        var dir = dropPos < lineHeight * (dropIndex + 0.5) ? 0 : 1;
        dropIndex = dropIndex + dir;


        document.getElementById("project-name").innerText = dropIndex;

        if(dropIndex >= 0 && dropIndex <= dropZone.childElementCount){

            if(dropIndex == dropZone.childElementCount){
                dropZone.appendChild(e.target);
                bend.updateForm();
                bend.updateCanvas();
                bend.inputsChanged();
            }else{
                dropZone.insertBefore(e.target, dropZone.childNodes[dropIndex + 1]);
                bend.updateForm();
                bend.updateCanvas();
                bend.inputsChanged();
            }

        }
        // move dragged element to the selected drop target
        // if (e.target.id === "bend-input") {
        //     dragged.parentNode.removeChild(dragged);
        //     e.target.appendChild(dragged);
        // }
        this.inputsChanged();
    },

    inputPointerEnter(e){
        bend.currentHoveredInputN = parseInt(e.target.getAttribute("row-n"));
        bend.updateCanvas();
    },
    inputPointerLeave(e){
        bend.currentHoveredInputN = -5;
        bend.updateCanvas();
    },

    calculateB(degree = 90) {
        let a = (4 * Math.pow(degree, 5)) / (3645 * Math.pow(10, 6))
        let b = (31 * Math.pow(degree, 4)) / (648 * Math.pow(10, 5))
        let c = (83 * Math.pow(degree, 3)) / (108 * Math.pow(10, 4))
        let d = (397 * Math.pow(degree, 2)) / (72 * Math.pow(10, 3))
        let e = (2909 * degree) / (180 * Math.pow(10, 2))

        return Math.round((a - b + c - d + e) * 100) / 100
    },

    parseForm(preview = true){
        var bi = document.querySelectorAll("#bend-input > div");
        
        var p = [];
        for(let i = 1;i < bi.length;i++){
            var prevDist = 0;

            if(p.length > 0 && preview){
                prevDist = p[p.length - 1].distance;
            }
            p.push({
                angle: 180 - parseFloat(bi[i].querySelector("input[name='plane-angle']").value),
                distance: prevDist + parseFloat(bi[i - 1].querySelector("input[name='plane-length']").value) / 100,
                localDistance: parseFloat(bi[i - 1].querySelector("input[name='plane-length']").value) / 100,
            });
        }

        var length = parseFloat(document.getElementById("plane-length").value) / 10;

        return {
            points: p,
            length: length
        };
    },

    simEnd(){
        new pblPopup({
            startPosition: "top",
            timeout: 5000,
            title: "Ошибка. Комбинации не найдено.",
            description: "Если вы уверены что произошла ошибка симуляции попробуйте поставить точность симуляции выше.",
        }).Show();
    },
    simEndAllVariants(){
        if(uiController.pressList.selectedPress >= pressVariants.length - 1){
            new pblPopup({
                startPosition: "top",
                timeout: 5000,
                title: "Ошибка. Комбинации не найдено.",
                description: "Если вы уверены что произошла ошибка симуляции попробуйте поставить точность симуляции выше.",
            }).Show();
        }else{
            uiController.pressList.selectedPress++;
            bend.controller.selectedPress++;

            while(bend.bend(bend.simEndAllVariants) == false){
                console.log('aaa: '+ pressVariants.length - 1)
                uiController.pressList.selectedPress++;
                bend.controller.selectedPress++;
                if(uiController.pressList.selectedPress > pressVariants.length - 1){
                    new pblPopup({
                        startPosition: "top",
                        timeout: 5000,
                        title: "Ошибка.",
                        description: "Один или несколько углов меньше минимального значения для всех вариантов инструментов.",
                    }).Show();
    
                    break;
                }
            }
        }
    },

    bendAllVars(){
        console.log(settings.preview.lineWidth)
        uiController.pressList.selectedPress = 0;
        bend.controller.selectedPress = 0;

        // console.log(bend.bend(bend.simEndAllVariants))

        while(bend.bend(bend.simEndAllVariants) == false){
            uiController.pressList.selectedPress++;
            bend.controller.selectedPress++;
            console.log(uiController.pressList.selectedPress);
            if(uiController.pressList.selectedPress > pressVariants.length - 1){
                new pblPopup({
                    startPosition: "top",
                    timeout: 5000,
                    title: "Ошибка.",
                    description: "Один или несколько углов меньше минимального значения для всех вариантов инструментов.",
                }).Show();

                break;
            }
        }
    },

    bend(_simEnd = bend.simEnd){

        // this.controller.drawCombinations = false;
        this.controller.stopWhenCollide = false;
        var br = false;
        var parsed = this.parseForm();
        var sides = [
            parsed.points[0],
            {
                angle: 180 - parsed.points[parsed.points.length-1].angle,
                localDistance: parsed.length - parsed.points[parsed.points.length-1].distance
            }
        ]

        const min = Math.min(...sides.map(side => side.localDistance))
        const angleOfMin = Math.abs(sides.find(side => side.localDistance === min).angle)

        if(bend.controller != undefined){
            var inp = document.querySelectorAll("input[name='plane-angle']");
            var n = 0;
            inp.forEach(e=>{
                var _angle = Math.abs(e.value % 180);
                if(_angle > 180 - pressVariants[bend.controller.selectedPress].minAngle && n != 0){
                    br = true;
                }

                n++;
            });
            // HERE!
            const instrument = pressVariants[bend.controller.selectedPress]

            const row = strengthTable.rows.indexOf(+settings.preview.lineWidth)
            const col = strengthTable.columns.indexOf(instrument.gap)

            if (!strengthTable.values[row][col]) {
                br = true
                const messageStrength = `Инструмент ${instrument.description.replace('<br>', '\n')} не подходит по тоннажу для толщины ${settings.preview.lineWidth}мм`;
                if(settings.message == 'console'){
                    console.log(messageStrength);
                } else {
                    alert(messageStrength)
                }
            }

            const currentWeight = strengthTable.values[row][col] * (parsed.length / 100) / 1000; 

            /*if (currentWeight > 100) {
                br = true
                const messageWeigth = `Инструмент ${instrument.description.replace('<br>', '\n')} не подходит по тоннажу для длинны ${parsed.length}мм`;
                if(settings.message == 'console'){
                    console.log(messageWeigth);
                } else {
                    alert(messageWeigth)
                }
            }*/

            const resultB = Math.round(min * 100) * this.calculateB(angleOfMin)

            if (resultB > instrument.deg90) {
                br = true
                const messageInstrument = `Инструмент ${instrument.description.replace('<br>', '\n')} не подходит для гибки данной детали согласно минимальному отгибу B=${resultB}мм`;
                if(settings.message == 'console'){
                    console.log(messageInstrument);
                } else {
                    alert(messageInstrument);
                }
            }
        }

        if(br) return false;

        inputPopup();

        setTimeout(() => {
            // this.controller.drawCombinations = true;

            if(settings.drawCombinations == true){
                this.controller.drawCombinations = true;
                uiController.calcPogressPopup(true);
            }else{
                this.controller.drawCombinations = false;
                uiController.calcPogressPopup(true);
            }

            // HERE!
            // console.log(pressVariants[bend.controller.selectedPress].gap, settings.preview.lineWidth)
            // console.log(strengthTable.values[strengthTable.rows.indexOf(+settings.preview.lineWidth)][strengthTable.columns.indexOf(pressVariants[bend.controller.selectedPress].gap)])

            this.initialPoints = [];
            this.bendOrd = [];
            // var parsed = this.parseForm();

            this.length = parsed.length;
            this.points = parsed.points;
            this.initialPoints = parsed.points;
    
            this.controller.finalBend = false;

            console.log(pressVariants[bend.controller.selectedPress].name)

    
            this.currentBend = 0;
            this.currentBendOrd = START_FROM_ORD;
            this.bendStarted = true;
    
            var combNum = 1;
            for(let i = 1; i < this.initialPoints.length + 1;i++){
                combNum *= i;
            }
            var arr = [];
            for(let i = 0;i < this.initialPoints.length;i++){
                arr.push(i);
            }
            this.bendOrd = this.permutator(arr);

            this._spawn();
            this._calcBendPoint(_simEnd);
        }, 10);

        return true;
    },
    permutator(inputArr) {
        var results = [];
      
        function permute(arr, memo) {
            var cur, memo = memo || [];
        
            for (var i = 0; i < arr.length; i++) {
                cur = arr.splice(i, 1);
                if (arr.length === 0) {
                results.push(memo.concat(cur));
                }
                permute(arr.slice(), memo.concat(cur));
                arr.splice(i, 0, cur[0]);
            }
        
            return results;
        }
      
        return permute(inputArr);
    },
    removeNode(node, update = true){
        var bc = document.getElementById("bend-input");
        bc.removeChild(node);
        if(update){
            this.updateForm();
            this.updateCanvas();
            this.inputsChanged();
        }
    },
    setPlaneLength(n){
        var i = document.querySelector("input#plane-length").value = n;
    },
    setPlaneWidth(n){
        var i = document.querySelector("input#plane-width").value = n;
        setLineWidth();
    },
    updateForm(){
        
        
        var bi = document.querySelectorAll("#bend-input > div");
        
        var p = 0;
        for(let i = 0;i < bi.length;i++){
            p += parseFloat(bi[i].querySelector("input[name='plane-length']").value) / 10;
            bi[i].querySelector(`input[name="plane-angle"]`).removeAttribute("disabled");
        }

        bi[0].querySelector(`input[name="plane-angle"]`).setAttribute("disabled", true);

        document.getElementById("plane-length").value = p;
    },
    inputsChanged(){
        if(bend.controller != undefined){
            var inp = document.querySelectorAll("input[name='plane-angle']");
            var btn = document.getElementById("preview-next-btn");
            var b = false;
            var n = 0;
            inp.forEach(e=>{
                e.classList.remove("wrong");
                e.title = "";
                var _angle = Math.abs(e.value % 180);

                // if(_angle < 0){
                //     _angle += 180;
                // }
                if(_angle > 180 - pressVariants[bend.controller.selectedPress].minAngle && n != 0){
                    e.classList.add("wrong");
                    e.title = `Для выбранного варианта инструмента минимальный угол равен ${pressVariants[bend.controller.selectedPress].minAngle}, значение поля должно находится в пределах [${180 - pressVariants[bend.controller.selectedPress].minAngle}, -${180 - pressVariants[bend.controller.selectedPress].minAngle}]`;

                    b = true;
                }

                if(b){
                    btn.classList.add("disabled");
                    btn.parentNode.querySelector(".notation").innerText = "Один или несколько углов меньше минимального значения для выбранного варианта инструмента";
                }else{
                    btn.classList.remove("disabled");
                    btn.parentNode.querySelector(".notation").innerText = "";
                }
                
                e.parentNode.parentNode.setAttribute("row-n", n);
                n++;
            });
        }
    },
    updateCanvas(){
        var canvas = document.getElementById("preview-canvas");
        var ctx = canvas.getContext("2d");

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        
        ctx.restore();
        // ctx.transform(1, 0, 0, -1, 0, canvas.height)
        ctx.translate(canvas.clientWidth / 2, canvas.clientHeight / 2);
        ctx.clearRect(-canvas.clientWidth, -canvas.clientHeight, canvas.clientWidth * 2, canvas.clientHeight * 2);
        var parsed = this.parseForm(false);
        
        if(parsed.points.length == 0){
            return;
        }
        var points = [];
        var dir = {x:1, y: 0};
        var initDir = dir;

        points.push({x:0,y:0});
        points.push({x:parsed.points[0].distance * -1,y:0});

        var distanceSumm = parsed.points[0].distance;

        for(let i = 0;i < parsed.points.length - 1;i++){
            var p = {
                x:points[points.length - 1].x,
                y:points[points.length - 1].y
            };
    
            dir = lilMath.rotateAroundPoint(dir, (180 - parsed.points[i].angle));
            
            distanceSumm += parsed.points[i + 1].distance;
            p.x -= dir.x * parsed.points[i + 1].distance;
            p.y += dir.y * parsed.points[i + 1].distance;
            points.push(p);

        }
        {
            var p = {
                x:points[points.length - 1].x,
                y:points[points.length - 1].y
            };

            dir = lilMath.rotateAroundPoint(dir, (180 - parsed.points[parsed.points.length - 1].angle) );
            
            var distance = parsed.length - distanceSumm;
            p.x -= dir.x * distance;
            p.y += dir.y * distance;
            points.push(p);
        }
        // dir = lilMath.rotateAroundPoint(dir, (180 - parsed.points[i].angle));


        var min1 = [];
        var min2 = [];

        points.forEach(p => {
            min1.push(Math.abs(p.x));
            min1.push(Math.abs(p.y));
            // min2.push(p.y);
        });
        min1.sort((a,b)=>{return a < b ? 1 : -1});

        var offset = {x:0,y:0};

        points.forEach(p => {
            offset.x += p.x;
            offset.y += p.y;
        });

        offset.x /= points.length;
        offset.y /= points.length;

        if(_SHOW == true){
            
            _SHOW = false;
        }
        

        var unit = Math.max(canvas.width, canvas.height) / min1[0] / 2;

        
        ctx.translate(offset.x * unit * -1, offset.y * unit * -1);

        for(let i = 0;i < points.length;i++){
            points[i] = lilMath.rotateAroundPoint(points[i], uiController.previewAngle, offset);
        }

        
        // lilMath.rotateAroundPoint(offset, uiController.previewAngle,rotAround);
        // ctx.translate(offset.x * unit * -1, offset.y * unit * -1);
        // unit = 30;

        ctx.lineWidth = parseInt(settings.preview.lineWidth || document.getElementById("plane-width").value);

        if(points.length > 0){

            var _p = points[0];

            var n = 0;

            points.forEach(p => {
                ctx.beginPath();

                ctx.moveTo(_p.x * unit, _p.y * unit);
                ctx.lineTo(p.x * unit, p.y * unit);

                if(n - 1 == bend.currentHoveredInputN){
                    var w = ctx.lineWidth;
                    ctx.lineWidth = w * 2;
                    ctx.stroke();
                    ctx.strokeStyle = '#0193E0';
                    ctx.stroke();
                    ctx.lineWidth = w;
                }else{
                    ctx.strokeStyle = 'black';
                    ctx.stroke();
                }
                
                _p = p;
                n++;
            });
    
            ctx.stroke();

            ctx.fillStyle = '#0193E0';
            ctx.strokeStyle = '#0193E0';
            
            var n = 0;

            points.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x * unit, p.y * unit, 0.005 * unit, 0, Math.PI * 2, true); // Outer circle
                if(n == bend.currentHoveredInputN){
                    var w = ctx.lineWidth;
                    ctx.lineWidth = w * 2;
                    ctx.stroke();
                    ctx.lineWidth = w;
                }else{
                    ctx.fill();
                }

                n++;
            });
            var fontSize = Math.floor(Math.min(canvas.width, canvas.height) / 40);
            ctx.font = `${fontSize}px serif`;

            if(settings.preview.pointAngle){
                for(let i = 1; i < points.length - 1;i++){
                    var text = parsed.points[i-1].angle;
                    if(text > 180){
                        text = (parsed.points[i - 1].angle - 360).toString();
                    }else{
                        text = (parsed.points[i - 1].angle).toString();
                    }
                    text = `${text}°`;

                    // var p = {
                    //     x:(points[i].x - (0.0075 * (angle.length))),
                    //     y: (points[i].y - 0.025)
                    // };
                    var initP = {
                        x: points[i].x,
                        y: points[i].y
                    };
                    var p = {
                        x: points[i].x,
                        y: points[i].y
                    };

                    var dir1 = {
                        x:points[i].x - points[i - 1].x,
                        y:points[i].y - points[i - 1].y,
                    };
                    var dir2 = {
                        x:points[i].x - points[i + 1].x,
                        y:points[i].y - points[i + 1].y,
                    };

                    dir1 = lilMath.normalize(dir1);
                    dir2 = lilMath.normalize(dir2);
                    

                    var clockwise = (parsed.points[i - 1].angle) > 180;

                    // angle1 = 0;
                    // angle2 = 180;

                    var angle1 = i % 2 == 0 ? -90 : 90;
                    var angle2 = i % 2 == 0 ? -90 : 90;

                    for(let n = 0;n < i - 1;n++){
                        angle1 += (parsed.points[n].angle);
                    }
                    for(let n = 0;n < i;n++){
                        angle2 += (parsed.points[n].angle);
                    }

                    angle1 = angle1 % 360;
                    angle2 = angle2 % 360;

                    


                    var textPoint = p;

                    // var rotP = dir;
                    var angle = lilMath.angle(dir1, dir2, false) / 2
                    var rotP = {x: dir1.x, y: dir1.y};
                    var rotP = {x: dir1.x, y: dir1.y};
                    rotP = lilMath.rotateAroundPoint(rotP, angle);


                    var offset = {
                        x: text.length / 6 * fontSize,
                        y: fontSize / -2 - unit * 0.025
                    }
                    // if((parsed.points[i - 1].angle) <= 180){
                    //     rotP.x *= -1;
                    //     rotP.y *= -1;

                        
                    // }


                    
                    var dir3 = {
                        x: dir1.x + dir2.x,
                        y: dir1.y + dir2.y,
                    }

                    textPoint.x += rotP.x * 0.025;
                    textPoint.y += rotP.y * 0.025;
                    if(parsed.points[i - 1].angle == 90 || parsed.points[i - 1].angle == 270){
                        ctx.beginPath();
                        // ctx.moveTo((initDir.x + dir1.x * 0.025) * unit, (initDir.y + dir1.y) * unit);
                        // ctx.lineTo((initDir.x) * unit, (initDir.y) * unit);
                        ctx.moveTo(
                            (initP.x * unit) + ((dir1.x * -unit) * 0.025),
                            (initP.y * unit) + ((dir1.y * -unit) * 0.025) 
                        );
                        ctx.lineTo(
                            (initP.x * unit) + ((dir3.x * -unit) * 0.025),
                            (initP.y * unit) + ((dir3.y * -unit) * 0.025)
                        );
                        ctx.lineTo(
                            (initP.x * unit) + ((dir2.x * -unit) * 0.025),
                            (initP.y * unit) + ((dir2.y * -unit) * 0.025) 
                        );
                        // ctx.lineTo(0,0);
                        ctx.stroke();
                    }else{
                        ctx.beginPath();
                        
                        ctx.arc(initP.x * unit, initP.y * unit, 0.025 * unit, lilMath.degToRad(angle1), lilMath.degToRad(angle2), clockwise); // Outer circle
                        ctx.stroke();
                    }

                    dir3 = lilMath.normalize(dir3);

                    var offset = {
                        x:0,
                        y:0,
                    }

                    offset.y -= (fontSize * dir3.y) * (clockwise ? 1.5 : 2.5);

                    offset.x = text.length * fontSize / 3 * (clockwise ? dir.x : dir.x);
                    if(clockwise == false){
                        // offset.x += text.length * fontSize * dir3.x;
                        // offset.x = text.length * fontSize / 3;
                    }

                    ctx.fillText(
                        `${text}`,
                        (initP.x * unit) + ((dir3.x * -unit) * 0.025) + offset.x,
                        (initP.y * unit) + ((dir3.y * -unit) * 0.025) + offset.y
                    );

                    // ctx.fillText(`${text}`, textPoint.x * unit - offset.x, textPoint.y * unit + offset.y);
                }
            }
            if(settings.preview.edgeLength){
                var d = 0;
                for(let i = 0;i < parsed.points.length;i++){
                    d += parsed.points[i].distance;
                }
                d = parsed.length - d;
                parsed.points.push({
                    angle:0,
                    distance: d
                });

                for(let i = 0; i < points.length - 1;i++){
                    
                    
                    var p = points[i];
                    p.x += points[i + 1].x;
                    p.y += points[i + 1].y;
                    p.x /= 2;
                    p.y /= 2;
                    var angle = (parsed.points[i].distance * 100).toFixed(0).toString() + " мм";

                    // while(angle[angle.length - 1] === '0'){
                    //     angle = angle.slice(0, angle.length - 1);
                    // }
                    ctx.fillText(`${angle}`, (p.x + 0.0) * unit + fontSize, (p.y - 0.0) * unit + fontSize);
                }
            }
        }
    },
    
    importFromString(s){
        s.replace("\n",'');
        s = s.split(";");
        this.clear();
        this.controller.selectedPress = parseInt(s[0]);
        settings.bendFormInputType = parseInt(s[1]);
        this.setPlaneLength(parseFloat(s[2]));
        this.setPlaneWidth(parseFloat(s[3]));

        s.splice(0,4);

        switch(settings.bendFormInputType){
            case 1:{
        
                for(let i = 0;i < s.length;i+=2){
                    if(isNaN(parseFloat(s[i]))){
                        continue;
                    }
                    this.toEnd(parseFloat(s[i]), parseFloat(s[i + 1]));
                }
                break;
            }
            case 0:
            default:{

                
                for(let i = 0;i < s.length;i+=2){
                    if(isNaN(parseFloat(s[i]))){
                        continue;
                    }
                    this.toEnd(parseFloat(s[i]), parseFloat(s[i + 1]));
                }


                break;
            }
        }

        this.updateForm();
        this.updateCanvas();
        this.inputsChanged();

        this._spawn();

    },
    exportString(){
        var bi = document.querySelectorAll("#bend-input > div");

        var s= ``;
        s += `${this.controller.selectedPress};`;
        s += `${settings.bendFormInputType};`;
        s += `${parseFloat(document.querySelector("input#plane-length").value)};`;
        s += `${parseFloat(document.querySelector("input#plane-width").value)};`;
        for(let i = 0;i < bi.length;i++){
            s+= `${parseFloat(bi[i].querySelector("input[name='plane-angle']").value)};${parseFloat(bi[i].querySelector("input[name='plane-length']").value)};`;
        }
        return s;
        // navigator.clipboard.writeText(s);
        this.copyToClipboard(s);
    },
    importFromClipboard(){
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.readText().then((text)=>{
                this.importFromString(text);
            })
        }else{
            this.importFromString(prompt(`Вставьте строку импорта.`));
        }
    },
    exportToClipborad(){
        return this.copyToClipboard(this.exportString());
    },
    // return a promise
    copyToClipboard(textToCopy) {
        // navigator clipboard api needs a secure context (https)
        if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard api method'
            return navigator.clipboard.writeText(textToCopy);
        } else {
            // text area method
            let textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            // make the textarea out of viewport
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            return new Promise((res, rej) => {
                // here the magic happens
                document.execCommand('copy') ? res() : rej();
                textArea.remove();
            });
        }
    },
    clear(){
        var bc = document.getElementById("bend-input");
        while(bc.childElementCount != 0){
            this.removeNode(bc.firstChild, false);
        }
    },
    toStart(angle = 90, distance = 10){
        var n = this._createInput(angle, distance, settings.bendFormInputType);
        var bc = document.getElementById("bend-input");
        if(bc.querySelectorAll(".row").length == 0){
            bc.append(bc);
        }else{
            bc.insertBefore(n, bc.firstChild);
        }
    },
    toEnd(angle = 0, distance = 10){
        var n = this._createInput(angle, distance, settings.bendFormInputType);
        var bc = document.getElementById("bend-input");
        bc.append(n);
        this.updateForm();
        this.updateCanvas();
        this.inputsChanged();
    },
    _createInput(angle = 90, distance = 10, type = -1, ){
        var d = document.createElement("div");
        type = settings.bendFormInputType;
        d.innerHTML = `
                <a class="btn cross" onclick="bend.removeNode(this.parentNode);">X</a>
                <input title="Угол сгиба" type="range" name="angle" min="-180" max="180" value="${angle}" oninput="this.nextElementSibling.value = '&angle; ' + this.value">
                <output onclick="bend.inputAngle(this.parentNode);">&angle; ${angle}</output>
                <input title="Важно! Дистанция отсчитывается от края, а не от предыдущей точки сгиба!" type="number" name="distance" value="${distance}">
        `;
        switch(type){
            case 1:{

                break;
            }
            case 0:
            default:{
                d.classList.add("row");
                d.setAttribute("draggable", true);
                d.addEventListener("dragstart",(bend.dragStart));
                d.addEventListener("dragover",(bend.dragOver));
                d.addEventListener("dragend",(e)=>{e.preventDefault();});
                d.innerHTML = `
                        <div class="col">
                            <img src="/public/img/drag-n-drop-icon.svg" class="drag" draggable="false">
                            <input type="number" name="plane-length" value="${distance}">
                        </div>
                        <div class="col">
                            <input type="number" name="plane-angle" value="${angle}" min="-360">
                            <img src="/public/img/x-cross.svg" class="cross" draggable="false" onclick="bend.removeNode(this.parentNode.parentNode);">
                        </div>`;
                        

                        

                    d.querySelector(`input[name="plane-length"]`).addEventListener("input",()=>{bend.updateForm(); bend.updateCanvas();bend.inputsChanged();});
                    d.querySelector(`input[name="plane-angle"]`).addEventListener("input",()=>{bend.updateForm(); bend.updateCanvas();bend.inputsChanged();});

                    d.addEventListener("pointerenter",bend.inputPointerEnter);
                    d.addEventListener("pointerleave",bend.inputPointerLeave);

                break;
            }
        }
        // <a class="btn">&#8593</a>
        // <a class="btn">&#8595</a>

        this.inputsChanged();

        return d;
    },
    inputAngle(cont){
        angle = parseFloat(prompt());
        if(isNaN(angle)){
            return;
        }

        cont.querySelector("input[name='angle']").value = angle;
        cont.querySelector("output").innerHTML = `&angle; ${angle}`;
    }
}

const lilMath = {
    
    rotateAroundPoint(t1, deg, t0 = {x:0,y:0}) {
        
        // t0 = {x:0,y:0};
        var t_new = {};
    
        // Переводим угол поворота из градусов в радианы
        var rad = (Math.PI / 180) * deg;
    
        // И рассчитываем координаты новой точки по формуле
        t_new.x = t0.x + (t1.x - t0.x) * Math.cos(rad) - (t1.y - t0.y) * Math.sin(rad);
        t_new.y = t0.y + (t1.x - t0.x) * Math.sin(rad) + (t1.y - t0.y) * Math.cos(rad);
    
        // Возвращаем полученное значение
        t1.x = t_new.x;
        t1.y = t_new.y;

        return t1;
    },
    
    length(v){
        return Math.sqrt((v.x * v.x) + (v.y * v.y));
    },
    
    normalize(v){
        let l = lilMath.length(v);
        v.x /= l;
        v.y /= l;

        return v;
    },
    
    dot(v1,v2){
        return (v1.x * v2.x) + (v1.y * v2.y);
    },
    angle(v1,v2, min = false){
        let d = lilMath.dot(v1,v2);
        d = (d / lilMath.length(v1)) / lilMath.length(v2);
        d = pblMath.acos(d);
        v1 = {
            x: v1.y,
            y: v1.x * -1
        };

        if(min){
            return d * 180/Math.PI;
        }

        
        let d2 = lilMath.dot(v1,v2);
        d2 = (d2 / lilMath.length(v1)) / lilMath.length(v2);
        d2 = pblMath.acos(d2);
        
        if(d2 > d){
            d *= -1
        }

        return d * 180/Math.PI;
    },
    degToRad(deg){
        deg = deg % 360;
        if(deg < 0){
            deg = 360 - deg;
        }
        return (Math.PI / 180) * deg;
    }
}