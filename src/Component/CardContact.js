import React from 'react'
import '../CSS/CardContact.css';
import HeadContact from "../Img/alex jonathan.jpg";
import { BiPencil } from "react-icons/bi";
import { IoTrash } from "react-icons/io5"

const CardContact = ({ contact, handleDeleteContact, toggleModal}) => {
    return (
        <div className="card-contact">
            <div className="image-contact-wrapper">
                <img src={HeadContact}  className="image-contact"/>
                <p className ="job-title paragraph-contact">{contact.title}</p>
            </div>
            <div className="adress-contact">
                <h1 className="contact-name">{contact.name}</h1>
                <p className="contact-details paragraph-contact">{contact.adressGPS}</p>
                <h2 className= "twitter-inc">Twitter. Inc.</h2>
                <p className="contact-details paragraph-contact">{contact.adressStreet}</p>
                <p className="contact-details paragraph-contact">{contact.adressCity}</p>
                <p className="contact-details paragraph-contact">P: {contact.phone}</p>
            </div>
            <div className="option-contact">
                <BiPencil onClick = {() => toggleModal(contact)}/>
                <IoTrash onClick = {() => {handleDeleteContact(contact.id)}}/>
            </div>
        </div>
    )
}

export default CardContact
