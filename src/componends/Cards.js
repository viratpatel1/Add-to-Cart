import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartState } from '../context/Context';
import "../CSS/Cards.css";

const Cards = ({ Prod }) =>
{
    const [check, setCheck] = useState(true);
    const { state: { Products } } = CartState();
    const { state: { cart }, dispatch } = CartState();
    console.log("9 ", Products)
    // const onClick = () =>
    // {
    //     setCheck(!check)
    // }
    return (
        <div>
            {Products.map((Prod) =>
            {
                return (
                    <div key={Prod.id} className="Cardss">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Prod.image} />
                            <Card.Body>
                                <Card.Title>{Prod.name}</Card.Title>
                                {
                                    cart.some((p) => p.id === Prod.id) ? (<Button disabled >Add to Cart</Button>) : (
                                        <Button onClick={() => { dispatch({ type: "Add-to-Cart", payload: Prod, }) }} disabled={!Prod.inStock} variant="primary">Add to Cart</Button>
                                    )
                                }

                            </Card.Body>
                        </Card>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Cards
