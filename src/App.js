import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';

function App() {
  const [budget, setBudget] = useState(0);
  const [balance, setBalance] = useState(0);

  return (
    <div className='container'>
      <header>
        <h1>Budget</h1>
        <div className='contenido-principal contenido'>
          <Question 
          setBudget={setBudget}
          setBalance={setBalance}></Question>
          <div className='row'>
            <div className='one-half column'>
              <Form></Form>
            </div>
            <div className='one-half column'>
              2
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
