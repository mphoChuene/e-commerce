import React, { createContext, useState } from "react";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
    const [cartItems, SetCartitems] = useState([]);
    const [visible, setVisible] = useState(false);
    const [ItemOnModal,setItemOnModal]=useState(null);
    const [key, SetKey] = useState(null);
    
    return (
        <ProfileContext.Provider value={{
            cartItems, SetCartitems,
            ItemOnModal,setItemOnModal,
            visible, setVisible,
            key, SetKey
        }}>
            {children}
        </ProfileContext.Provider>
    );
}



export { ProfileContext, ProfileProvider };