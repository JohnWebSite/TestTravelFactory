import React, {useState, useEffect} from 'react'
import '../CSS/ListContact.css';
import CardContact from './CardContact';
import { AiOutlinePlusCircle } from "react-icons/ai";
import ContactModal from './ContactModal';
import { getTheAdressGPS } from '../lib/api';

const ListContact = ({ listContact, addContact, handleDeleteContact, handleUpdateContact }) => {
    const [contact, setContact] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
	function toggleModal(currentContact) {
        console.log(currentContact);
        if(currentContact){
            setContact(currentContact);
        }
		setIsOpen(!modalIsOpen);
	}
    useEffect(() => {
        const test =getTheAdressGPS();
    }, [listContact])
    return (
        <div className="wrapper-contact">
            {listContact.map(contact =>
                <CardContact
                    key={contact.id}
                    contact={contact}
                    handleDeleteContact= {(idContact) => handleDeleteContact(idContact)}
                    toggleModal = {(currentContact) => toggleModal(currentContact)}
                />
            )}
            <div className="add-contact-option">
                <AiOutlinePlusCircle onClick = {() => toggleModal()}/>
            </div>
            <ContactModal
                contact = {contact}
                modalIsOpen={modalIsOpen}
                toggleModal={() => toggleModal({})}
                addContact = {(contact) => addContact(contact)}
                handleUpdateContact = {(contact) => handleUpdateContact(contact)}
            />
        </div>
    )
}

export default ListContact
