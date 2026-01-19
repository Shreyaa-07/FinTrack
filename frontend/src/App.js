import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import Auth from './Components/Auth/Auth';
import AllTransactions from './Components/AllTransactions/AllTransactions';

import { sun, moon } from './utils/Icons';

function App() {
  const [active, setActive] = useState(1)

  const { isAuthenticated, theme, toggleTheme } = useGlobalContext()

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <AllTransactions />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  if (!isAuthenticated) {
    return (
      <AppStyled bg={bg} className="App" data-theme={theme}>
        {orbMemo}
        <Auth />
      </AppStyled>
    )
  }

  return (
    <AppStyled bg={bg} className="App" data-theme={theme}>
      {orbMemo}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? moon : sun}
      </button>
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  .theme-toggle{
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--background-color);
    border: 2px solid var(--border-color);
    box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 20;
    i{
      font-size: 1.5rem;
      color: var(--primary-color);
    }
  }
  main{
    flex: 1;
    background: var(--background-color);
    border: 3px solid var(--border-color);
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;