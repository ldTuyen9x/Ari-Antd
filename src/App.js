import './App.css';
import { useState } from 'react';
import FormEmailComponent from './form-email';

function App() {
  const [emailstatus, setEmailstatus] = useState({});

  function onSubmit(res) {
    setEmailstatus(res);
  }
  
  return (
    <FormEmailComponent onEmailSubmit={onSubmit} />
  );
}
export default App;
