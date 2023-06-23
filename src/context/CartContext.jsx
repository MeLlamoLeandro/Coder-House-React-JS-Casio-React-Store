import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // funciones de manejo de carrito
    const [cart, setCart] = useState([]); // estado del carrito
    //guardo carrito en localstorage
    if (cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    //obtengo carrito de localstorage
    if (cart.length === 0 && localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
    }


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
        //limpiar localstorage
        localStorage.removeItem('cart');
        //guardo carrito en localstorage
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    const removeItem = (itemId) => {//remover item del carrito
        const newCart = cart.filter((item) => item.id !== itemId);//se filtra el item a remover
        setCart(newCart);//se actualiza el estado del carrito
        //limpiar localstorage
        localStorage.removeItem('cart');
    }

    const totalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);//suma de la cantidad de items en el carrito
    }
    const totalPrices = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);//suma de los precios de los items en el carrito
    }
    const clean = () => {
        setCart([]);//limpiar el carrito
        //limpiar localstorage
        localStorage.removeItem('cart');
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalItems, totalPrices, clean }}>
            {children}
        </CartContext.Provider>
    )
}
