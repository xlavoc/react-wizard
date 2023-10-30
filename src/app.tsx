import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import './App.css'
import { Button, Container } from '@mui/material';
import { Wizard } from './modules/wizard/components';
import { AppBar } from './modules/topnav';

export const App = () => {
  const [openWizard, setOpenWizard] = useState(false);

  return (
    <Container sx={{ height: '100vh', pt: 10 }}>
      <AppBar />
      <Button variant="outlined" onClick={() => setOpenWizard(true)}>
        Open the Wizard
      </Button>
      <Wizard isOpen={openWizard} onClose={() => setOpenWizard(false)} />
    </Container>
    
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  )
};
