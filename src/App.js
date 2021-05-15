import React, { useState } from 'react'

import Login from './components/Login';
import Product from './components/Product';
import Register from './components/Register';

function App() {

  const [connected, setConnected] = useState(false);
  const [openRegister, setOpenRegister] = useState (false);

  const access = (state) => {
    setConnected(state);
  }

  const openReg = (state) => {
    setOpenRegister(state);
  }

  return (
    <Product />
    //connected ? <Product /> : <Login access={access} openReg={openReg}/>,
    //openRegister ? <Register /> : <Login access={access} openReg={openReg}/>
  );
}

export default App;
