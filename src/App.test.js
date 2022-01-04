import React, { useEffect } from 'react';
import { useState } from 'react';
import FormEmailComponent from './form-email.component';

function App() {
  const [emailstatus, setEmailstatus] = useState({});

  function onSubmit(res) {
    setEmailstatus(res);
  }

  useEffect(() => {
    console.log('From App.js ', emailstatus);
  }, [emailstatus]);

  return (
    <FormEmailComponent onEmailSubmit={onSubmit} />
  );
}
export default App;