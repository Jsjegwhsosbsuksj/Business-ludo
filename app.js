import {db,doc,setDoc,updateDoc,onSnapshot}
from "./firebase.js";

let currentClub="";
let currentCase=0;
let cases=[];

fetch("cases.json")
.then(r=>r.json())
.then(data=>cases=data);

window.openTeam=function(club){

currentClub=club;

document.getElementById("home").classList.add("hidden");

document.getElementById("teamPage").classList.remove("hidden");

loadCase();

}

function loadCase(){

let c=cases[currentCase];

document.getElementById("clubName").innerHTML=currentClub+" Team";

document.getElementById("caseNumber").innerHTML="Case "+(currentCase+1);

document.getElementById("caseStudy").innerHTML=c.case;

document.getElementById("dataset").innerHTML=c.dataset;

document.getElementById("questions").innerHTML=
`
<h3>Q1</h3>${c.q1}

<h3>Q2</h3>${c.q2}
`;

}

window.submitAnswer=async function(){

await setDoc(doc(db,"answers",
currentClub),{

club:currentClub,

case:currentCase,

answer:document.getElementById("answer").value,

status:"Waiting"

});

document.getElementById("status").innerHTML=
"Waiting for Admin...";

}

onSnapshot(doc(db,"answers","HR"),snap=>{

if(snap.exists()){

let data=snap.data();

if(data.status=="Correct"){

currentCase++;

loadCase();

}

if(data.status=="Wrong"){

document.getElementById("status").innerHTML=
"Incorrect. Re-enter answer.";

}

}

});