import { useState, useEffect } from 'react';
import Progress from './Progress.jsx';
import AppBar from './AppBar.jsx';
import './Abouts.css'
import perfil from '../assets/PROFILE-CINTHYA.png'; // Ruta de la imagen



const DATA_URL = 'http://api.open-notify.org/astros.json'


const About = () => {
    return (
        <div className='about--container'>
            <h2 className='about--title'>Cinthya Abigail Gomez Carreto</h2>
            <img src={perfil} className='about--img' alt="Cinthya"></img>
            <h3 className='about--title'>Contacto</h3>
            <p className='about--desc'>cinthyaabigail994@gmail.com</p>
            <h3 className='about--title'>Descripcion</h3>
            <p className='about--desc'>Desarrolladora Fullstack</p>
        </div>
    )
}

export default About;
