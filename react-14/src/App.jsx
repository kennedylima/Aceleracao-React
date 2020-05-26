import React from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filteredContacts: []
    }
  }

  componentDidMount() {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then(response => response.json())
      .then(contacts => {
        this.setState({ 
          contacts,
          filteredContacts: [...contacts]
        });
      })
  }

  handleFilter = (configFilter) => {
    let filteredContacts = [...this.state.contacts];
    filteredContacts = this.searchContacts(configFilter, filteredContacts)
    filteredContacts = this.sortItems(configFilter, filteredContacts);
    this.setState({ filteredContacts })
  }

  searchContacts = ({ search }, filteredContacts) => {
    return filteredContacts.filter(
      contact => contact.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  sortItems = ({ sort, order }, filteredContacts) => {
    return filteredContacts.sort((contactA, contactB) => {
      let result = 0;
      if (contactA[sort] > contactB[sort]) {
        result = 1;
      } else if (contactA[sort] < contactB[sort]) {
        result = -1;
      }
      
      return order === 'desc' ? result * -1 : result;
    })
  }

  render() {
    return (
      <>
      <div className="app" data-testid="app">
        <Topbar />
        <Filters handleFilter={this.handleFilter}/>
        <Contacts>
          {this.state.filteredContacts.map(contact => {
            return (
              <Contact data={contact} key={contact.id} />
            );
          })}
        </Contacts>
        </div>
      </>
    )
  }
}

export default App;
