import { createContext, ReactNode, useContext, useState } from 'react';

// const ShoppingCartProviderProps = {
//   children: ReactNode,
// };

// const ShoppingCartContext = {
//     getItemQuantity: (id ) => number
// }

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function getTotalNumberItems() {
    return cartItems.length;
  }

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
  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function removeAllItems() {
    setCartItems([]);
  }

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
