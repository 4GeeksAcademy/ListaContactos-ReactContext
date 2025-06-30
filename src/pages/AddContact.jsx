import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function AddContact() {

    const [name, setName] = useState('')
    const [adress, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const saveContact = (e) => {
        e.preventDefault()
        fetch('https://playground.4geeks.com/contact/agendas/contactList/contacts', {
            method: 'POST',
            body: JSON.stringify({ name, address: adress, phone, email }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log('Error', err))
    }

    return (
        <div>
            <form className="mx-4">

                <h1 className="text-center">Add a new contact</h1>
                <div className="mb-3">
                    <label for="exampleInputEmai4" className="form-label fw-bold">Full Name</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Full Name" />

                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label fw-bold">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail" placeholder="Enter Email" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail2" className="form-label fw-bold">Phone</label>
                    <input onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="exampleInputPhone" aria-describedby="emailHelp" placeholder="Enter Phone" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail3" className="form-label fw-bold">Address</label>
                    <input onChange={(e) => setAdress(e.target.value)} type="text" className="form-control" id="exampleInputAddress" aria-describedby="emailHelp" placeholder="Enter Address" />
                </div>

                <button onClick={saveContact} type="submit" className="btn btn-primary w-100">Save</button>

                <Link to="/contact">to contacts</Link>

            </form>
        </div>
    )
}

export default AddContact
