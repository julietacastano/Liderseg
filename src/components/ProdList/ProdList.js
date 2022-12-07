import './ProdList.css'
import Prods from "../Prods/Prods";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProd } from '../../services/firestore/productsFirestore';
import { Link } from 'react-router-dom';
import cedasaba from './assets/cedasaba.png'


const ProdList = () =>{
    const [products, setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const {categoryId} = useParams()
    
    useEffect(()=>{
        setLoading(true)
        getProd(categoryId).then(prod=>{
            setProducts(prod)

        }).catch(error =>console.log(error)
        ).finally(()=>{
            setLoading(false)
        })
    },[categoryId])   

    if (loading === true){
        return <div className="spinner-border m-5"></div>
    }

    const logCedasaba = () => {
        return(
            <div className='cedasaba'>
                <h4>Principal socio esctratégico</h4>
                <a href='https://cedasaba.org.ar/convenios/' target="_blank" rel="noreferrer"><img src={cedasaba} alt='logo cedasaba'/></a>
            </div>
            
        )
    }
    const blank = () =>{
        return
    }

    const AgregadoAgro = categoryId === 'agro' ? logCedasaba : blank;
    
    return (
        <div>
            <div className='tituliLinea'>
                <h4 className='titulo'>PRODUCTOS QUE COMERCIALIZAMOS</h4>
            </div>    
            <div className="cardGroup">
                {products.map(prod => <Prods key={prod.id} {...prod} />)}
            </div>
            <div>
                <Link to={'/cotizacion'} className="btn btn-success btCotizar">PEDÍ TU PRESUPUESTO</Link>
            </div>
            <AgregadoAgro />
        </div>
    )
}

export default ProdList