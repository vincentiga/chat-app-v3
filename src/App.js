import React from 'react';
import Contact from './components/Contact'
import user_kp from './components/user_kp.json'
import user_ln from './components/user_ln.json'
import user_sw from './components/user_sw.json'
import ContactList from './components/ContactList'

function App() {
  return (
    <div className="App">
      <Contact {...user_kp} />
      <Contact {...user_ln}/>  
      <Contact {...user_sw}/>
      <ContactList />  
    </div>
  );
}

export default App;
