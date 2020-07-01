import HEAD from 'next/head'
import React, { useState } from 'react';
import {
    Collapse,
    Container,
    Jumbotron,
    Button,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <HEAD>
                <title>Home - Trucks Controll</title>
                <meta name="description" content="Sistema de gerenciamento logístico" />
                <meta name="author" content="Walter Baleco" />
            </HEAD>
            <Navbar color="dark" dark expand="md" className="fixed-top">
                <Container>
                    <NavbarBrand href="/">Trucks Controll</NavbarBrand>

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Inicio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Portfólio</NavLink>
                            </NavItem>
                        </Nav>

                    </Collapse>
                </Container>
            </Navbar>
            <Jumbotron fluid className="desc-top">
                <Container>
                    <h3 className="display-2">TRUCKS CONTROLL</h3>
                    <p className="lead">Com o nosso sistema sua empresa poderá gerenciar todos os departamentos e processos com maior agilidade e segurança.</p>
                    <hr className="my-2" />
                    <p>Para solicitar uma demonstração do <strong>Trucks Controll</strong> clique no botão abaixo.</p>
                    <p className="lead">
                        <Button color="primary">Solicitar demonstração</Button>
                    </p>
                </Container>
            </Jumbotron>

        </div>
    )

}

export default HomePage