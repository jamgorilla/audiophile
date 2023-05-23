import { createContext, ReactNode, useContext, useState } from 'react';

// Context for the shopping cart
const ShoppingCartContext = createContext({});

// Custom hook for other components to access the shopping cart context
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// Provider component that wraps the application and provides shopping cart functionality
export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Get the quantity of a specific item in the cart
  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  // Get the total number of items in the cart
  function getTotalNumberItems() {
    return cartItems.length;
  }

  // Increase the quantity of an item in the cart
  function increaseCartQuantity(id, numValue) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: numValue }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + numValue };
          } else {
            return item;
          }
        });
      }
    });
  }

  // Initialise quantity of an item in the cart value from product stepper button
  function dropCartincreaseQuantity(id, numValue) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: numValue }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: numValue };
          } else {
            return item;
          }
        });
      }
    });
  }
  // Decrease value of item in cart by specified amount
  function dropCartdecreaseQuantity(id, numValue) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItemsfilter((item) => item.id != id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: numValue };
          } else {
            return item;
          }
        });
      }
    });
  }
  // Decrease the quantity of an item in the cart by one
  function decreaseCartQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItemsfilter((item) => item.id != id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  // Remove an item from the cart
  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  // Remove all items from the cart
  function removeAllItems() {
    setCartItems([]);
  }

  // Provide the shopping cart context with methods to child components
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        getTotalNumberItems,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        dropCartincreaseQuantity,
        dropCartdecreaseQuantity,
        removeAllItems,
        cartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
