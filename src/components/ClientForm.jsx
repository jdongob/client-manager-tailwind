import React, { useEffect } from "react";
import { useState } from "react";

function ClientForm( { initialValue, handleSubmit, buttonText } ){

    // Estado interno que controla los inputs
    const [form, setForm] = useState(initialValue);

    
    // useEffect en este codigo; se usa mas para el Edit, porque puede fallar porque el componente ya se monto y no refleja los datos traidos de la database con un editclient.
    
    // useState(initialValue) only uses the prop during the first render.
    // When editing a client, the data is loaded asynchronously (db), so
    // initialValue changes after the component has already mounted.
    // This effect updates the form state whenever initialValue changes.
    // Sincronizar estado local con props que llegan de forma asíncrona.
    // Si usas CustomHooks la parte que se reutiliza es el useEffect, no es el handlechange

    useEffect(() =>
     {
        if (initialValue) {
            setForm(initialValue);
        } 
     }, [initialValue]
    );


    // handleChange: Update the state (form) when an input value changes
    const handleChange = (e) =>
    {
        setForm(
            { ...form,
                [e.target.name]: e.target.value
            }
        );
    };

    
    // The correct way is to wrap (envolver) it in another function to prevent the function from running immediately and capture the "e" event
    // <form onSubmit={(e) => handleSubmit(e, form)}> 
    

    return (
        
         <form onSubmit={ (e) => {
                e.preventDefault();  // Prevent page reload // Even though e.preventDefault() is inside ClientForm, it affects the entire CreateClient component because the HTML <form> is rendered within it.
                handleSubmit(form);  // The "form" data sent from ClientForm is received in CreateClient. The parameter name can vary (e.g. client, formData, data, newClient), as long as it remains clear and consistent.                                 
              }}

              className="grid grid-cols-2 gap-3"  //2 columms grid
         >

             <input 
                name="name"
                placeholder="Name"
                value= {form?.name || ""}   
                onChange={handleChange}
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"

            />

            <input 
                name="email"
                placeholder="Email"
                value= {form?.email || ""}  
                onChange={handleChange}
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input 
                name="phone"
                placeholder="Phone"
                value= {form?.phone || ""} 
                onChange={handleChange}
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
            />

            <button 
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 col-span-2"
            > 
                {buttonText} 
            </button>

        </form>



    );
}

export default ClientForm;