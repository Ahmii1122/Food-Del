import { createContext, ReactNode, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// Define the type for the context
interface StoreContextType {
    food_list: {
        _id: string;
        name: string;
        image: string;
        price: number;
        description: string;
        category: string;
    }[];
    cartitems: Record<string, number>; // To store cart items
    setcartitems: React.Dispatch<React.SetStateAction<Record<string, number>>>;
    addtocart: (itemId: string) => void;
    removeformcart: (itemId: string) => void;
}

// Create the context with the defined type
export const StoreContext = createContext<StoreContextType | undefined>(undefined);

interface StoreContextProviderProps {
    children: ReactNode;
}

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
    const [cartitems, setcartitems] = useState<Record<string, number>>({});
    
    const addtocart = (itemId: string) => {
        setcartitems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };
    
    const removeformcart = (itemId: string) => {
        setcartitems((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
        }));
    };
    useEffect(()=>{
        console.log(cartitems)
    },[cartitems])
    const contextValue: StoreContextType = {
        food_list,
        cartitems,
        setcartitems,
        addtocart,
        removeformcart
    };
    
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
