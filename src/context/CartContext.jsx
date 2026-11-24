import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ascle_cart") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("ascle_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (p, qty = 1) => {
    setCart((prev) => {
      const ex = prev.find((i) => i.id === p.id);
      if (ex)
        return prev.map((i) =>
          i.id === p.id ? { ...i, qty: i.qty + qty } : i
        );
      return [...prev, { ...p, qty }];
    });
  };
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id));
  const updateQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };
  const clearCart = () => setCart([]);

  const totalItems = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart]);
  const subtotal = useMemo(
    () =>
      cart.reduce((s, i) => {
        const match = (i.price || "").match(/([\d.]+)/);
        const num = match ? parseFloat(match[1]) : 0;
        return s + num * i.qty;
      }, 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
