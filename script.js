"use strict";

window.addEventListener("DOMContentLoaded", loadJson);
//fetch json

    async function loadJson(){

        let jsonObject = await fetch("https://kea-alt-del.dk/kata-distortion/");
        let myJson = await jsonObject.json();

        console.log(myJson);


        function show(){
            document.querySelector(".numberInQueue").textContent=`${myJson.inQueue}`;

        };


        show();
        
};


//load every 10s
setInterval(function(){
    loadJson();
}, 10000);


//
