"use strict";

window.addEventListener("DOMContentLoaded", loadJson);
//fetch json

async function loadJson() {

    let jsonObject = await fetch("https://kea-alt-del.dk/kata-distortion/");
    let myJson = await jsonObject.json();

    console.log(myJson);


    function show() {
        // document.querySelector(".numberInQueue").textContent = `${myJson.inQueue}`;
        document.querySelector(".number").textContent = `${myJson.inQueue}`;
        document.querySelector(".bar").style.width = `${myJson.inQueue}0px`;
        if(myJson.inQueue<8){
            //console.log("has middle", request.middle)
            document.querySelector('.funnyComment').textContent=`Hurray, first come first serve. Go get your cold beer!!!`;
        } else if (myJson.inQueue>17){
            //console.log("no middle")
            document.querySelector('.funnyComment').textContent=`No chances, go home!`;
        }
        else{
            document.querySelector('.funnyComment').textContent=`Patience is gold! Try to wait, but no promises...`;
        }

    };


    show();

};


//load every 10s
setInterval(function () {
    loadJson();
}, 10000);


//