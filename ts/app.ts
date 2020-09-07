import * as PIXI from "pixi.min.js"
// import * as validator from "../js";

window.onload = function(){
    initGame();
}

function initGame(): void{
    let container: any = document.getElementById('game');
    let config: object  = {
        width: 300,
        height: 300,
        backgroundColor: 0x131317,
    }
    let mainScene: any = new PIXI.Application(config);
    container.appendChild(mainScene.view);
}
