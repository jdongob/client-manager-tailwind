import React, { useState } from 'react'

import { useContext } from 'react';
import { ClientContext } from "../context/ClientContext"

import { useNavigate } from 'react-router-dom';  


import ClientForm from '../components/ClientForm';

import { createClient } from '../services/api'; // service to handle API POST request




function CreateClient () 
{

    const navigate = useNavigate();

    // Only need setClients from the context to update the global state after POST
    const { setClients } =  useContext(ClientContext);
    
    // Handle form submission
    const handleSubmit = async (client) => {

          // Basic validation: ensure required fields are filled
          if(!client.name || !client.email)
          {
              alert("Name and email are required");
              return;
          }


          try {
            
            // Call API service to create a new client
            const newClient = await createClient(client);

            // Update global state with the newly created client
            setClients( (prev) => [...prev, newClient] );

            /* 
                Call API : GET - Load clients again - database
                await fetchClients();
                  
                pedirias del Context solo el fetchClient arriba
                const { fetchClients } = useContext(ClientContext);
            */


            // Success message     
            alert("Client saved successfully");
            navigate("/"); // Navigate back to the home/clientList page



          } catch (error) {
            // Show friendly alert to user
            alert(error.message || "Unexpected error occurred");

            // Log technical details in console
            console.error("Technical details:", error);
            if (error.status){
              console.error("HTTP status:", error.status, error.statusText);
            }
          }
      };


    return (
        <div className="bg-white p-8 rounded shadow max-w-2xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Create Client - Reusable Form</h1>

            <ClientForm 
                initialValue={ { name: "", email: "", phone: "" } } // initial state for the form
                handleSubmit={handleSubmit}                         // ClientForm will pass the form state as "client"
                buttonText="Save"                                   // text for the submit button
            />
        </div>  
    );
    
}

export default CreateClient;