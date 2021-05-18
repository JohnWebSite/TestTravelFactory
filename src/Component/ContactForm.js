import React, { useState, useEffect } from 'react'
import { Form, Button, Col, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/AddContactForm.css";
import { useHistory } from "react-router-dom";

export default function ContactForm({ toggleModal, addContact, contact, handleUpdateContact }) {
    const [people, setPeople] = useState({
        name: contact.name,
        adressStreet: contact.adressStreet,
        adressCity: contact.adressCity,
        title: contact.title,
        phone: contact.phone,
        id: contact.id,
    })
    const [error, setError] = useState({});
    const history = useHistory();
    const verifyPhone = () => {
        const tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '(', ')', '+'];
        const phoneContact = people.phone.split('');
        console.log(phoneContact);
        let flag = false;
        let phoneVerified = true;
        for (let index = 0; index < phoneContact.length; index++) {
            const element = phoneContact[index];
            flag = false;
            for (let j = 0; j < tab.length; j++) {
                const el = tab[j];
                if (element == el) {
                    flag = true;
                }
            }
            if (!flag) {
                phoneVerified = false;
            }
        }
        if (!phoneVerified) {
            console.log("yooo")
            setError({...error,  phone: "Please enter a correct phone number" });
            return false;
        } else {
            return true;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const phoneVerified = verifyPhone();
        if (phoneVerified) {
            if (contact.name) {
                handleUpdateContact(people);
            } else {
                addContact(people);
            }
            toggleModal();
        }

        
    }
    useEffect(() => {
        if (!contact.name) {
            setPeople({ ...people, id: Date.now() });
        }
    }, [])
    return (
        <div className="wrapper_add_person">
            <div className="form_add_people mt-1">
                <h2 className="text-center mb-3 title">Add Contact</h2>
                <Form
                    onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group as={Col}>
                        <Form.Label className="my_label ml-2">Name </Form.Label>
                        <Form.Control name="name" type="text" placeholder="Name" value={people.name} required onChange={(e) => setPeople({ ...people, name: e.target.value })} />
                        <Form.Text className=" ml-2 text-danger">{error.name}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label className="my_label ml-2">Adress Street</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Name" value={people.adressStreet} required onChange={(e) => setPeople({ ...people, adressStreet: e.target.value })} />
                        <Form.Text className=" ml-2 text-danger">{error.adressStreet}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label className="my_label ml-2">Adress City</Form.Label>
                        <Form.Control name="lastname" type="text" placeholder="lastname" value={people.adressCity} required onChange={(e) => setPeople({ ...people, adressCity: e.target.value })} />
                        <Form.Text className=" ml-2 text-danger">{error.adressCity}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label className="my_label ml-2">Job Title</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Name" value={people.title} required onChange={(e) => setPeople({ ...people, title: e.target.value })} />
                        <Form.Text className=" ml-2 text-danger">{error.title}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label className="my_label ml-2">Phone</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Name" value={people.phone} required onChange={(e) => setPeople({ ...people, phone: e.target.value })} />
                        <Form.Text className=" ml-2 text-danger">{error.phone}</Form.Text>
                    </Form.Group>
                    <div className="wrapper-button px-3">
                        <Button className="btn btn-primary px-3 " variant="primary" type="submit" onClick={() => toggleModal()}>
                            Cancel
                        </Button>
                        <Button className="btn btn-primary px-3  " variant="primary" type="submit">
                            {contact.name ? "Update Contact" : "Add Contact"}
                        </Button>

                    </div>

                </Form>
            </div >
        </div>

    )
}
