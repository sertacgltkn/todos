import React from 'react';
//import ContactForm from './components/contact-form';
import Header from './components/header'
import './App.css';
import TodoList from './components/todo-list';

export default function App() {
     
      

  return (
    <div className="App">
        <Header/>
        {/* <ContactForm/> */}
        <TodoList/>
    </div>
  );
}

