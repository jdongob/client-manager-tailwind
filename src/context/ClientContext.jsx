import { createContext, useState, useEffect } from "react"; 

import { fetchClients } from "../services/api";

// Create global context
export const ClientContext = createContext();

// Provider component
export const ClientProvider = ( { children })  => {
    const [clients, setClients] = useState([]); 

      // Load clients into state (uses API service)
      const loadClients = async () => {

        try {
           const data = await fetchClients(); // call API
           setClients(data);                  // update state
            
        } catch (error) {
            console.error("Error loading clients:", error);
        }
    };


      // Run once when the app starts
     useEffect( () => { 
        loadClients(); 
    }, [] );


    return (
        <ClientContext.Provider value={ { clients, setClients, loadClients } } >
            {children} 
        </ClientContext.Provider>
    );
};