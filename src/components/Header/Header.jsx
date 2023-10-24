// Importera kärnfunktionalitet från React
import React from "react";

// Importera grid-system komponenter från React-Bootstrap för layoutändamål
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Importera egna komponenter för sökfunktionalitet
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchButton } from "../SearchButton/SearchButton";

// Importera bildresurser som används i headern
import logo from "../Logo.png";
import vector from "../Vector.png";

// Importera stilark för denna komponent
import "./style.css";

// Definiera en funktionell React-komponent som heter "Header"
function Header() {
    return (
      <Navbar className="justify-content-between header">
        <Form inline>
          <InputGroup>
                <img src={logo} alt="Logo" className="header-logo" />
          </InputGroup>
        </Form>
        <Col xs="auto">
            <SearchBar />
            </Col>  
           
        <Form inline>
        <InputGroup>
             
            <Col xs="auto">
            <SearchButton />
            </Col>  
            <Col xs="auto">
                {/* Visar inloggningsbild eller en annan ikon */}
                <img src={vector} alt="login" className="login" />
            </Col>           
            
          </InputGroup>
        
        </Form>
      </Navbar>
    );
  }

// Exportera "Header"-komponenten så att den kan användas i andra delar av applikationen
export default Header;