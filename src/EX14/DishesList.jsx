import { Button, Card } from "react-bootstrap";
import { dishes } from "./dishes";
import { useCart } from "./CartContext";

export default function DishesList() {
  const { addToCart, cartCount, cartTotal } = useCart();
  return <section className="exercise"><h2>2. Dishes List</h2><p>Cart: {cartCount} item(s) — ${cartTotal.toFixed(2)}</p><div className="dish-grid">{dishes.map((dish) => <Card key={dish.id}><Card.Img variant="top" className="dish-image" src={dish.image} onError={(e) => { e.currentTarget.style.display = "none"; }} /><Card.Body><Card.Title>{dish.name} {dish.label && <span className="badge bg-danger">{dish.label}</span>}</Card.Title><Card.Text>{dish.description}</Card.Text><p>${Number(dish.price).toFixed(2)}</p><Button onClick={() => addToCart(dish)}>Add to Cart</Button></Card.Body></Card>)}</div></section>;
}
