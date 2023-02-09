/* import { initializeApp } from 'firebase/app';

import { getFirestore, collection } from 'firebase/firestore/lite';

const firebaseConfig = {

//*******

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const items = collection(db, "listaProductos") //cambiamos listaProductos por el nombre de nuestra coleccion */








/* import * as firebase from "firebase/app"
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDIWskJnaJwnssx_CMKOJ449zwQ5g2LnP8",
    authDomain: "react-34880-66130.firebaseapp.com",
    projectId: "react-34880-66130",
    storageBucket: "react-34880-66130.appspot.com",
    messagingSenderId: "288656447250",
    appId: "1:288656447250:web:c91dfb7448d979338fc5cb"
})

export function getFirebase(){
    return app
} 

export function getFirestore(){
    return firebase.firestore(app)
} */

/* import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIWskJnaJwnssx_CMKOJ449zwQ5g2LnP8",
    authDomain: "react-34880-66130.firebaseapp.com",
    projectId: "react-34880-66130",
    storageBucket: "react-34880-66130.appspot.com",
    messagingSenderId: "288656447250",
    appId: "1:288656447250:web:c91dfb7448d979338fc5cb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productRef = doc(db, "listaProductos", );
getDocs(productRef).then((snapshot) => {
    if(snapshot.exist()) {
        console.log(snapshot);
    }
})
 */
