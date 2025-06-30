import React from 'react'
import rigoBaby from "../assets/img/rigo-baby.jpg";
import { useNavigate } from 'react-router-dom';
import ContactCard from '../components/ContactCard';

import { useEffect, useState } from 'react';

const Contact = () => {
    const [contact, setContact] = useState([]);  //crear una nueva funcion que contenga el fetch en vez de estar dentro del useEffect una vez creada llamo a la funcion dentro del useEffect, para poder reutizarlo las veces que quiera.

    useEffect(() => {
        fetch('https://playground.4geeks.com/contact/agendas/contactList/contacts')
            .then(res => res.json())
            .then(data => setContact(data.contacts)) 

            .catch(err => console.log('Error al obtener los contactos: ', err))
    }, []);
    console.log(contact)
    const navigate = useNavigate();
    const handleNavAdd = () => {
        navigate("/addContact");
    };

    return (
        <div className='container'>
            <h1>Lista contactos</h1>

            <button
                className="btn btn-success"
                onClick={handleNavAdd}
            >Add new contact</button>

            <div className="row">

                {
                    contact.map((contacto, index) => (
                        <ContactCard name={contacto.name} adress={contacto.address} phone={contacto.phone} email={contacto.email} id={contacto.id} />
                    ))
                }
            </div>
        </div>
    )
}


export default Contact;


