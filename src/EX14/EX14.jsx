import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Theme from "./Theme";
import { CartProvider } from "./CartContext";
import DishesList from "./DishesList";
import Cart from "./Cart";

export default function EX14() {
  return <><ThemeProvider><Theme /></ThemeProvider><CartProvider><DishesList /><Cart /></CartProvider></>;
}
