import React from 'react'
import Modal from 'react-modal';
import ContactForm from './ContactForm';
const ContactModal = ({ modalIsOpen, toggleModal, addContact, contact, handleUpdateContact  }) => {
    return (
        <Modal
            className=""
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
        >
            {console.log(contact)}
            <ContactForm
                contact = {contact}
                toggleModal={() => toggleModal()}
                addContact = {(contact) => addContact(contact)}
                handleUpdateContact = {(contact) => handleUpdateContact(contact)}
            />
        </Modal>
    )
}

export default ContactModal
