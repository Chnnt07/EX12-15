import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useCart } from "./CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, cartCount, cartTotal } = useCart();
  return <section className="exercise"><h2>3. Cart (Real-time)</h2><p>Total items: {cartCount} | Total value: ${cartTotal.toFixed(2)}</p><ListGroup className="mb-3">{cartItems.map((item) => <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center"><span>{item.name} x {item.quantity} — ${(Number(item.price) * item.quantity).toFixed(2)}</span><Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button></ListGroup.Item>)}</ListGroup><Button variant="danger" disabled={!cartItems.length} onClick={clearCart}>Clear Cart</Button></section>;
}
