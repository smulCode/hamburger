import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './components/styles/Global';
import { theme } from './components/styles/theme';
import Burger from './components/Burger'
import Menu from './components/Menu'
import React, { useState, useRef } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef(); 
useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>Hello. This is a burger menu </h1>
          <img src="https://media.giphy.com/media/xTiTnwj1LUAw0RAfiU/giphy.gif" alt="animated burger" />
        </div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
