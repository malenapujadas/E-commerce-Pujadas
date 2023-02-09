//Importaciones
//Modulos
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
//Estilos
import './ItemDetailContainer.css'
//Componetnes
import ItemDetail from '../itemDetail/ItemDetail'
//Core


//Logica
const ItemDetailContainer = () => { //Funcion consructora


    
    const {productoId} = useParams()
    const [producto, setProducto] = useState()
    const json = [
        {
            "id":1,
            "nombre":"Torta con deco rosa",
            "descripcion":"Torta de 20 cm de alto y 16 de diametro, forrada con fondant blanca y decoraciones de diferentes tipos de rosa",
            "precio": 7000,
            "categoria": "Tortas decoradas",
            "stock":5
        },
        {
            "id":2,
            "nombre":"Torta con deco margaritas",
            "descripcion":"Esta es una torta de 16 cm de alto, con 16 de diametro. Forrada con fondant blanco, deco celeste y unas margaritas muy delicadas",
            "precio":7000,
            "categoria": "Tortas decoradas",
            "stock":8
        },
        {
            "id":3,
            "nombre":"Torta con deco naranja",
            "descripcion":"Torta de 20 cm de alto y 16 de diametro, forrada con fondant blanca y decoraciones de diferentes tipos de naranjas y rojos",
            "precio":7000,
            "categoria": "Tortas decoradas",
            "stock":7
        },
        {
            "id":4,
            "nombre":"Torta con deco chocolate",
            "descripcion":"Esta torta es de 16 cm de alto y diametro. Esta forrada con fondant blanco, y tiene decoraciones con ganache de choco amargo. Por arriba esta decorada con muchos chocolates",
            "precio":9000,
            "categoria": "Tortas decoradas",
            "stock":5
        },
        {
            "id":5,
            "nombre":"Torta con deco violeta",
            "descripcion":"Esta torta tiene 20cm de alto y 16 de diametro. Tambien forrada con fondant blanco, decorada con unos celestes y violetas que combinan muy bien. Ademas, deco con ganache de choco blanco y unas decoraciones de chocolate hechas a mano",
            "precio":12000,
            "categoria": "Tortas decoradas",
            "stock":4
        },
        {
            "id":6,
            "nombre":"Brownie",
            "descripcion":"Esta torta tiene 20cm de alto y 16 de diametro. Tambien forrada con fondant blanco, decorada con unos celestes y violetas que combinan muy bien. Ademas, deco con ganache de choco blanco y unas decoraciones de chocolate hechas a mano",
            "precio":12000,
            "categoria": "Tortas clasicas",
            "stock":4
        },
        {
            "id":7,
            "nombre":"Chocotorta",
            "descripcion":"Esta torta tiene 20cm de alto y 16 de diametro. Tambien forrada con fondant blanco, decorada con unos celestes y violetas que combinan muy bien. Ademas, deco con ganache de choco blanco y unas decoraciones de chocolate hechas a mano",
            "precio":12000,
            "categoria": "Tortas clasicas",
            "stock":4
        },
        {
            "id":8,
            "nombre":"Lemon Pie",
            "descripcion":"Esta torta tiene 20cm de alto y 16 de diametro. Tambien forrada con fondant blanco, decorada con unos celestes y violetas que combinan muy bien. Ademas, deco con ganache de choco blanco y unas decoraciones de chocolate hechas a mano",
            "precio":12000,
            "categoria": "Tortas clasicas",
            "stock":4
        },
        {
            "id":9,
            "nombre":"Red Velvet",
            "descripcion":"Esta torta tiene 20cm de alto y 16 de diametro. Tambien forrada con fondant blanco, decorada con unos celestes y violetas que combinan muy bien. Ademas, deco con ganache de choco blanco y unas decoraciones de chocolate hechas a mano",
            "precio":12000,
            "categoria": "Tortas clasicas",
            "stock":4
        },
        {
            "id":10,
            "nombre":"Cheesecake",
            "descripcion":"Esta torta tiene 20cm de alto y 16 de diametro. Tambien forrada con fondant blanco, decorada con unos celestes y violetas que combinan muy bien. Ademas, deco con ganache de choco blanco y unas decoraciones de chocolate hechas a mano",
            "precio":12000,
            "categoria": "Tortas clasicas",
            "stock":4
        },
        {
            "id":11,
            "nombre":"Key Lime Pie",
            "descripcion":"Esta torta tiene 20cm de alto y 16 de diametro. Tambien forrada con fondant blanco, decorada con unos celestes y violetas que combinan muy bien. Ademas, deco con ganache de choco blanco y unas decoraciones de chocolate hechas a mano",
            "precio":12000,
            "categoria": "Tortas clasicas",
            "stock":4
        },
        {
            "id":12,
            "nombre":"Tiramisu",
            "descripcion":"Esta torta tiene 20cm de alto y 16 de diametro. Tambien forrada con fondant blanco, decorada con unos celestes y violetas que combinan muy bien. Ademas, deco con ganache de choco blanco y unas decoraciones de chocolate hechas a mano",
            "precio":12000,
            "categoria": "Tortas clasicas",
            "stock":4
        },
        {
            "id":13,
            "nombre":"Torta oreo",
            "descripcion":"Esta torta tiene 20cm de alto y 16 de diametro. Tambien forrada con fondant blanco, decorada con unos celestes y violetas que combinan muy bien. Ademas, deco con ganache de choco blanco y unas decoraciones de chocolate hechas a mano",
            "precio":12000,
            "categoria": "Tortas clasicas",
            "stock":4
        }
    ]
    

    useEffect(()=>{
        setProducto(<ItemDetail key={json.find(e => e.id == productoId).id} data={json.find(e=>e.id == productoId)} />)
        return () => {
        setProducto(<ItemDetail key={json.find(e => e.id == productoId).id} data={json.find(e=>e.id == productoId)} />)
        }
    },[])


    

    



    //Retorno que se va a renderizar
    return(
        <section className='itemDetail-box'>
            <Link to="/productos">Volver a mis productos</Link>
            {producto}
        </section>
    )

}


//Exportacion 
export default ItemDetailContainer