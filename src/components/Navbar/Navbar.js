import './Navbar.css';
import logo from './assets/logo.png';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
/* import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase'; */

const NavBar = () =>{
/*     const [category, setCategory] = useState([])
    
    
    useEffect (() =>{
        const categoryRef = collection(db,'categories')

        getDocs(categoryRef).then(resp =>{
            const categoriesAdapt = resp.docs.map(doc =>{
                const data = doc.data();
                return({id:doc.id, ...data})
            })
            setCategory(categoriesAdapt)
        }).catch(error=>{console.log(error)})
    },[])//eslint-disable-line */
    
    return(
        <nav className='nav'>
            <NavLink to={'/'}><img src={logo} alt='logo' className='logo' /></NavLink>
            <div className='categories'>
                <NavLink to='/' className= {({isActive}) => isActive ? 'nav-link active link-dark' : 'nav-link link-secondary'}> Inicio</NavLink>
                <NavLink to='/categoria/agro' className= {({isActive}) => isActive ? 'nav-link active link-dark' : 'nav-link link-secondary'} >Agroindustria</NavLink>
                <NavLink to='/categoria/paraVos' className= {({isActive}) => isActive ? 'nav-link active link-dark' : 'nav-link link-secondary'} >Para vos</NavLink>
                <NavLink to='/categoria/paraTuEmpresa' className= {({isActive}) => isActive ? 'nav-link active link-dark' : 'nav-link link-secondary'} >Para tu empresa</NavLink>
{/*                 {category.map(cat =>
                    <NavLink key={cat.id} to={`/categoria/${cat.slug}`} className= {({isActive}) => isActive ? 'nav-link active link-dark' : 'nav-link link-secondary'}> {cat.label} </NavLink>
                )} */}
                <NavLink to='/cotizacion' className= {({isActive}) => isActive ? 'nav-link active link-dark' : 'nav-link link-secondary'} >Pedi tu cotizacion</NavLink>
                <NavLink to='/productores' className= {({isActive}) => isActive ? 'nav-link active link-dark' : 'nav-link link-secondary'} >Productores</NavLink>
                <NavLink to='/auditoria' className= {({isActive}) => isActive ? 'nav-link active link-dark' : 'nav-link link-secondary'} >Auditoria de riesgo</NavLink>
                <NavHashLink to='/#contacto' className='nav-link link-secondary'>Contacto</NavHashLink> 
            </div>
        </nav>
    )
}

export default NavBar