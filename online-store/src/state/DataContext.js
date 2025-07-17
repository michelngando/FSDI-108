import { createContext } from "react";

/**
 * Context is an interface
 * (blueprint / promise / idea )
 * it does not contain real implementation
 */
const DataContext = createContext({
    cart: [],   //holds the data about the product. It's a blueprint, a promise
    user: {},  //holds the info of the user. It's a blueprint, a promise
    addProductToCart: () => {},
    clearCart: () => {},
});
    

export default DataContext;