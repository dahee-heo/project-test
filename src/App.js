import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import homePage from './page/homePage';
import BottomBar from './component/BottomBar';

const MaxWidth = styled.div`
  max-width: 640px;
  background-color: black;
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
            <Route path='/' element={<homePage></homePage>}></Route>
          </Routes>
        </BrowserRouter>
        <h1>Test</h1>
        <Button>button</Button>
      </MaxWidth >
      <BottomBar></BottomBar>
    </>
  );
}



export default App;
