class pblPopup{
    static POPUP_TYPES = {
        "notification": 0,
        "alert": 1,
        "text-input": 2,
    };

    div = null;
    data = {};
    
    constructor(data = {type: "notification"}){
        this.Rebuild(data);
    }

    Rebuild(data){
        this.data = data;
        
        var div = document.createElement("div");
        div.classList.add("pbl-popup", data.type || "notification", data.startPosition || "center");
        console.log(data.classList);
        div.classList.add(...(data.classList || []));
        switch((data.type || "notification").toLowerCase()){
            case "notification":{
                let btns = "";

                div.innerHTML = `
                    <h2>${data.title || "Hello world"}</h2>
                    <p>${data.description || "test description"}</p>
                `;
                break;
            }
        }

        if(this.div != null){
            this.div.remove();
        }

        this.div = div;
        this.div.addEventListener("click",()=>{this.Fade()});
    }

    Show(){
        switch((this.data.type || "notification")){
            case "notification":{
                document.body.appendChild(this.div);
                setTimeout(()=>{
                    this.Fade();
                }, this.data.timeout || 1500);
                break;
            }
        }
    }
    Fade(){
        this.div.removeEventListener("click", ()=>{this.Fade()});
        this.div.classList.add("moving-out");
        setTimeout(()=>{
            this.div.remove();
        }, this.data.fadeTime || 1000);
    }
}

// var PBL_UI = {
//     popupContainer: null,
// }

// function CreateContainer(){
//     if(PBL_UI.popupContainer != null){
//         return;
//     }

//     var div = document.createElement("div");
//     div.classList.add("pbl-popup-container");

// }

window.addEventListener("load",()=>{
    setTimeout(debug, 100);
});

// function debug(){
//     new pblPopup({
//         startPosition: "top",
//         timeout: 5000,
//         title: "tttt",
//         description: "desc",
//     }).Show();
// }