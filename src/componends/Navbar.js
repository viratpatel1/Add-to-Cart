import React from 'react';
import { BsCart, BsCartCheck } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import * as ReactBootstrap from "react-bootstrap";
import Dropdown from '@restart/ui/esm/Dropdown';
import { CartState } from '../context/Context';
import "../CSS/Navbar.css";

const Navbar = () =>
{
    const { state: { cart }, dispatch } = CartState();
    return (
        <div>
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootstrap.Container>
                    <ReactBootstrap.Navbar.Brand href="#home">Add to Cart</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootstrap.Nav className="me-auto">
                            {/* <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link> */}
                        </ReactBootstrap.Nav>
                        <ReactBootstrap.Nav>
                            <ReactBootstrap.Dropdown style={{ padding: "0 0 0 0", backgroundColor: "blue", width: "70px", borderRadius: "5px" }} alignRight>
                                {/* <ReactBootstrap.Dropdown.Toggle> */}
                                <div style={{ margin: "10px 0 -10px 0" }}>
                                    <BsCartCheck color="white" fontSize="25px" />
                                    <ReactBootstrap.Badge >{cart.length}</ReactBootstrap.Badge>
                                </div>
                                <ReactBootstrap.NavDropdown style={{ minWidth: "100px" }} >
                                    {cart.length > 0 ? (
                                        <>
                                            {
                                                cart.map((Prod) =>
                                                (
                                                    <div className="CartItem">
                                                        <img src={Prod.image} />
                                                        <div>
                                                            <span>{Prod.name}</span>
                                                        </div>
                                                        <AiFillDelete fontSize="20px" style={{ cursor: "pointer" }} onClick={() => dispatch({ type: "Remove-from-Cart", payload: Prod, })} />
                                                    </div>
                                                )
                                                )}
                                        </>
                                    ) : (<span style={{ padding: "10px" }} >Cart is empty</span>)
                                    }

                                </ReactBootstrap.NavDropdown>
                                {/* </ReactBootstrap.Dropdown.Toggle> */}
                            </ReactBootstrap.Dropdown>
                            {/* </ReactBootstrap.Nav.Link> */}
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Container>
            </ReactBootstrap.Navbar>
        </div>
    )
}

export default Navbar
