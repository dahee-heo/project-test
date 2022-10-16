import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './page/HomePage';
import BottomBar from './component/BottomBar';
import MapView from './component/MapView';

const MaxWidth = styled.div`
  max-width: 640px;
`
const Button = styled.button`
  width: 200px;
  height: 44px;
  background-color: blue; 
`

function App() {
  return (
    <>
      <MaxWidth>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
          </Routes>
        </BrowserRouter>
        <Button>button</Button>
      </MaxWidth >
      <BottomBar></BottomBar>
    </>
  );
}



export default App;
