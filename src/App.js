import logo from './logo.svg';
import React from "react";
import './App.css';
import ListContact from './Component/ListContact';


const mockContact = [
  {
    id: 1,
    name: "Jonathan",
    adressGPS: "Riviera State 32/106",
    adressStreet: " 795 Folsom Ave.Suite 600",
    adressCity: "San Francisco, CA 94107",
    phone: "(123) 456-7890",
    title: "CEO"
  },
  {
    id: 2,
    name: "Monica",
    adressGPS: "Riviera State 32/106",
    adressStreet: " 795 Folsom Ave.Suite 600",
    adressCity: "San Francisco, CA 94107",
    phone: "(123) 456-7890",
    title: "CTO",
  },
  {
    id: 3,
    name: "Michael",
    adressGPS: "Riviera State 32/106",
    adressStreet: " 795 Folsom Ave.Suite 600",
    adressCity: "San Francisco, CA 94107",
    phone: "(123) 456-7890",
    title: "Designer",
  },
  {
    id: 4,
    name: "Sandra",
    adressGPS: "Riviera State 32/106",
    adressStreet: " 795 Folsom Ave.Suite 600",
    adressCity: "San Francisco, CA 94107",
    phone: "(123) 456-7890",
    title: "Graphics designer",
  }
]
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: mockContact,
    }
  }

  addContact(newContact) {
    this.setState((state) => {
      return { contacts: [newContact, ...state.contacts] }
    });
  }

  handleDeleteContact(idContact) {
    const close = window.confirm("Are you sure that you want to delete this note ?");
    if (close) {
      let deleteContact = this.state.contacts;
      deleteContact = deleteContact.filter(contact => {
        return contact.id != idContact;
      });
      this.setState({
        contacts: deleteContact
      })
    }
  }

  handleUpdateContact(updateContact) {
    console.log(updateContact);
    let contacts = this.state.contacts;
    for (let index = 0; index < contacts.length; index++) {
      const element = contacts[index];
      if (element.id == updateContact.id) {
        contacts[index] = updateContact;
      }
    }
    this.setState({
      contacts: contacts
    })
  }
  render() {
    return (
      <div className="App">
        
        <ListContact
          listContact={this.state.contacts}
          addContact = {(contact) => this.addContact(contact)}
          handleDeleteContact={(idContact) => this.handleDeleteContact(idContact)}
          handleUpdateContact={(contact) => this.handleUpdateContact(contact)}
        />
        
      </div>
    );
  }
}

export default App;
