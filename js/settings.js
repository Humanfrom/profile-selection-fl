const Cookie = {
    set(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
    get(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },
    erase(name) {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}



const IMPORT_STRING_EXAMPLES = [
    {
        title: `Корона`,
        string:`0;0;14;2;100;15;-125;15;100;20;-125;20;100;20;-125;20;100;15;-125;15;`,
        img:null,
    },
    {
        title: `Большая медведица - пресс №1`,
        string:`0;0;8.7;2;0;20;30;11;-5;15;60;11;-85;20;-85;11;`,
        img:null,
    },
    {
        title: `Большая медведица - пресс №2`,
        string:`1;0;8.2;2;0;20;30;11;-5;15;60;11;-85;20;-85;11;`,
        img:null,
    },
    {
        title: `Козел - пресс №1`,
        string:`0;0;10.799999999999999;2;0;6;-22.5;6;-22.5;6;-22.5;6;-22.5;30;140;30;-22.5;6;-22.5;6;-22.5;6;-22.5;6;`,
        img:null,
    },
    {
        title: `Козел - пресс №2`,
        string:`1;0;10.799999999999999;2;0;6;-22.5;6;-22.5;6;-22.5;6;-22.5;30;90;30;-22.5;6;-22.5;6;-22.5;6;-22.5;6;`,
        img:null,
    },
    {
        title: `Лесенка - пресс №1`,
        string:`0;0;9.200000000000001;2;100;11;-90;11;90;12;-90;12;90;12;-90;12;90;11;-90;11;`,
        img:null,
    },
    {
        title: `Лесенка - пресс №2`,
        string:`1;0;12;2;100;15;-90;15;90;15;-90;15;90;15;-90;15;90;15;-90;15;`,
        img:null,
    },
    // {
    //     title: ``,
    //     string:``,
    //     img:null,
    // },
    // {
    //     title: ``,
    //     string:``,
    //     img:null,
    // },
];

var settings = {
    theme: "white",
    message: "alert",//"console",
    bendFormInputType: 0,
    preview:{
        edgeLength: true,
        pointAngle: false,
    }
}


function loadSettings(){
    if(localStorage.getItem("settings") != null){
        settings = JSON.parse(localStorage.getItem("settings"));
    }
    if(settings.simTickDelta == undefined) settings.simTickDelta = 0.0001;
    else settings.simTickDelta = parseFloat(settings.simTickDelta);

    document.getElementById("SimTickDelta-select").value = settings.simTickDelta;
    document.getElementById("canvas").style.backgroundColor = ColorTheme[settings.theme].color.canvas;
    document.body.style.backgroundColor = ColorTheme[settings.theme].color.canvas;
    document.body.style.color = ColorTheme[settings.theme].color.text;

    document.getElementById("plane-width").value = settings.preview.lineWidth || 2;

    
    document.getElementById("preview-check-length").checked = settings.preview.edgeLength;
    document.getElementById("preview-check-angle").checked = settings.preview.pointAngle;
    document.getElementById("drawCombinations-checkbox").checked = settings.drawCombinations == undefined ? false : settings.drawCombinations;
    

    
}
function saveSettings(){
    localStorage.setItem("settings", JSON.stringify(settings));
}
function edgeLengthCheck(){
    var c = document.getElementById("preview-check-length");

    settings.preview.edgeLength = c.checked;
    saveSettings();

    bend.updateCanvas();
}
function pointAngleCheck(){
    var c = document.getElementById("preview-check-angle");

    settings.preview.pointAngle = c.checked;
    saveSettings();

    
    bend.updateCanvas();
}
function drawCombinationsCheck(){
    var c = document.getElementById("drawCombinations-checkbox");

    settings.drawCombinations = c.checked;

    saveSettings();
}
function setLineWidth(){
    settings.preview.lineWidth = document.getElementById("plane-width").value;
    saveSettings();
    bend.updateCanvas();
}
function setSimTickDelta(){
    settings.simTickDelta = parseFloat(document.getElementById("SimTickDelta-select").value);
    saveSettings();
}



const ColorTheme = {
    "white":{
        color:{
            pressPoint: "black",
            press: "red",
            planePoint: "#0193E0",
            plane: "#68676C",
            grid: "#f3f3f3",
            canvas: "white",
            text: "black",
            rootElement: "grey",
        },
        fill:{
            point: false,
            press: true,
        }
    },
    "black":{
        color:{
            pressPoint: "white",
            press: "red",
            planePoint: "pink",
            plane: "green",
            grid:"gray",
            canvas: "black",
            text: "white",
            rootElement: "grey",
        },
        fill:{
            point: false,
            press: true,
        }
    }
}


loadSettings();



function acosTest(n = 1000000){
    var now = new Date();
    var ticks = now.getTime();

    for(let i = 0;i < n;i++){
        Math.acos(1);
    }
    now = new Date();
    ticks = now.getTime() - ticks;
    return ticks;

}