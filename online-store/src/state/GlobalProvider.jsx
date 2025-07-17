import { useState } from "react";
import DataContext from "./DataContext";


//the Provider" provides the components access to the context

function GlobalProvider(props) {  //creating the implementation for the promise
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ loggedIn:true, name:"Michel" });

    function addProductToCart(prod){   
        //console.log("global add", prod);
        
        // For an obj and array in state varialbe
        //1- create a copy
        //2- modify the copy
        //3- set the copy back

        let copyOfCart =[...cart];
        copyOfCart.push(prod);
        setCart(copyOfCart);
           
    }

    function clearCart(){

        let copyOfCart =[...cart];
        copyOfCart.splice(prod);
        setCart(copyOfCart);

    }


    return(
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;

//value={{}} provides the cart; cart: cart fulfills the promised cart in DataContext
// user uses {} because it's an object, whereas cart [] is an array;