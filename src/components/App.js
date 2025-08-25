import React, { useState, useEffect } from 'react';

class App extends React.Component {
  state = {
    timestamp: new Date().toLocaleString(),
    isDarkMode: false,
    conversations: [],
    editing: false,
    editedMessage: '',
    searchTerm: '' // New state for search
  };

  toggleDarkMode = () => {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }));
  };

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  componentDidMount() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
      this.setState({ isDarkMode: true });
    }

    // Fetch conversations
    fetch('https://api.example.com/conversations')
      .then(response => response.json())
      .then(data => this.setState({ conversations: data }))
      .catch(error => console.error('Error fetching conversations:', error));
  }

  render() {
    const { conversations, searchTerm, isDarkMode } = this.state;
    const filteredConversations = conversations.filter(conversation =>
      conversation.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <input type="text" placeholder="Search..." onChange={this.handleSearch} />
        <ul>
          {filteredConversations.map(conversation => (
            <li key={conversation.id}>{conversation.text}</li>
          ))}
        </ul>
        <button onClick={this.toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    );
  }
}