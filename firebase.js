import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
getFirestore,
doc,
setDoc,
getDoc,
updateDoc,
onSnapshot
}
from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {

apiKey:"YOUR_KEY",

authDomain:"YOUR_DOMAIN",

projectId:"YOUR_PROJECT_ID",

storageBucket:"",

messagingSenderId:"",

appId:""

};

const app=initializeApp(firebaseConfig);

export const db=getFirestore(app);

export {doc,setDoc,getDoc,updateDoc,onSnapshot};