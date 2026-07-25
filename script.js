// LIVE CLOCK

function updateTime(){

const now = new Date();


let hour =
String(now.getHours()).padStart(2,"0");

let minute =
String(now.getMinutes()).padStart(2,"0");

let second =
String(now.getSeconds()).padStart(2,"0");


document.getElementById("clock").innerHTML =
`${hour}:${minute}:${second}`;



let options = {

weekday:"long",
year:"numeric",
month:"long",
day:"numeric"

};


document.getElementById("date").innerHTML =
now.toLocaleDateString(
"id-ID",
options
);

}


setInterval(updateTime,1000);

updateTime();





// CURSOR GLOW


const cursor =
document.getElementById("cursor");


document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left =
e.clientX+"px";


cursor.style.top =
e.clientY+"px";


});





// MUSIC


function playMusic(){

const music = document.getElementById("music");

if(music.muted){

    music.muted = false;
    music.play();

    event.target.innerHTML =
    "Pause Music 🎵";

}

else if(music.paused){

    music.play();

    event.target.innerHTML =
    "Pause Music 🎵";

}

else{

    music.pause();

    event.target.innerHTML =
    "Play Music 🎵";

}

}





// CARD SCROLL ANIMATION


const cards =
document.querySelectorAll(".card");


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},
{
threshold:.2
}
);



cards.forEach(card=>{

card.style.opacity="0";

card.style.transform=
"translateY(50px)";

observer.observe(card);

});





// RANDOM STAR PARTICLES


for(let i=0;i<80;i++){


let star =
document.createElement("div");


star.className="particle";


star.style.position="fixed";

star.style.width="2px";

star.style.height="2px";

star.style.background="white";

star.style.borderRadius="50%";


star.style.left =
Math.random()*100+"%";


star.style.top =
Math.random()*100+"%";


star.style.opacity =
Math.random();



star.style.animation =
`twinkle ${2+
Math.random()*5}s infinite`;



document.body.appendChild(star);


}




// PARALLAX BACKGROUND


window.addEventListener(
"mousemove",
(e)=>{


let x =
(e.clientX/window.innerWidth-.5)*20;


let y =
(e.clientY/window.innerHeight-.5)*20;



document.body.style.backgroundPosition =
`${50+x}% ${50+y}%`;



});