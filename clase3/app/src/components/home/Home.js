//Importaciones
//Modulos
import { useEffect } from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//Estilos
import './Home.css'
//Componetnes
//Core
/* const firebaseConfig = {
    apiKey: "AIzaSyDIWskJnaJwnssx_CMKOJ449zwQ5g2LnP8",
    authDomain: "react-34880-66130.firebaseapp.com",
    projectId: "react-34880-66130",
    storageBucket: "react-34880-66130.appspot.com",
    messagingSenderId: "288656447250",
    appId: "1:288656447250:web:c91dfb7448d979338fc5cb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

    // Get a list of cities from your database
    async function getCities(db) {
        const citiesCol = collection(db, 'listaProductos');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return cityList;
} */



//Logica
const Home = () => { //Funcion consructora
    
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

/* getCities() */


    //Retorno que se va a renderizar
    return(
        <div className='fondo'>
            <div className='fondoImg'> </div>
            <div className='fondoColor'> </div>
            <p className='nombre'>Piudulce</p>
        </div>
    )

}


//Exportacion 
export default Home
