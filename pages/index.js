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
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
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
            <Navbar color="dark" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Trucks Controll</NavbarBrand>

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                           {/*  <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem> */}
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Cadastro
              </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Motorista
                </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Veículo
                </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Equipamento
                </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Cliente
                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                   Consulta
              </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Motorista
                </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Veículo
                </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Equipamento
                </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Cliente
                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>Usuário</NavbarText>
                    </Collapse>
                </Container>
            </Navbar>

            <Jumbotron>
                <Container>
                    <h1 className="display-3">TRUCKS CONTROLL</h1>
                    <p className="lead">Com o<strong>Trucks Controll</strong> sua empresa poderá gerenciar todos os departamentos com maior agilidade e segurança</p>
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