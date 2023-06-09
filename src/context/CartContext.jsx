import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // funciones de manejo de carrito
    const [cart, setCart] = useState([]); // estado del carrito

    const addItem = (item, quantity) => {//agregar item al carrito
        const itemAdded = { ...item, quantity };
        const newCart = [...cart];//copia del carrito para manejar por metodos de array
        const isInCart = newCart.find((i) => i.id === itemAdded.id); //verificar si el item ya esta en el carrito
        if (isInCart) {
            isInCart.quantity += quantity; //si esta en el carrito se suma la cantidad
        } else {
            newCart.push(itemAdded); //si no esta en el carrito se agrega
        }
        setCart(newCart);//se actualiza el estado del carrito
    }

    const removeItem = (itemId) => {//remover item del carrito
        const newCart = cart.filter((item) => item.id !== itemId);//se filtra el item a remover
        setCart(newCart);//se actualiza el estado del carrito
    }

    const totalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);//suma de la cantidad de items en el carrito
    }
    const totalPrices = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);//suma de los precios de los items en el carrito
    }
    const clean = () => {
        setCart([]);//limpiar el carrito
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalItems, totalPrices, clean }}>
            {children}
        </CartContext.Provider>
    )
}
