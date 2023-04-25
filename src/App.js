import Pages from "./pages/Pages";
import Category from "./components/Category";
import {  BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import { Link } from "react-router-dom";
import { FaCross } from "react-icons/fa";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      
    <Router>
    <h1>Praise be to JESUS</h1>
    <Nav>
      <CrossStyle>
        <FaCross />
      </CrossStyle>
      <Logo to ={'/'}>Delicious Recipes</Logo>
    </Nav>
      <Search/>
      <Category/>
      <Pages/>
    </Router>  
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;  
`
const Nav = styled.div `
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const CrossStyle = styled.div `
  color:#DC143C
  ;
`
export default App;
