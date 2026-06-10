// Base URL for the API

//const API_URL = "http://localhost:4000"
const API_URL = import.meta.env.VITE_API_URL;



// ------------------ CREATE CLIENT ------------------
export const createClient = async (clientData) => 
{
    const response =  await fetch (`${API_URL}/clients`,   
                        {
                        method: "POST",
                        headers: { "Content-Type": "application/json" }, 
                        body: JSON.stringify(clientData)
                        } );

    if ( !response.ok ) {
        throw new Error("Failed to create client");  
    }

    const newClient =  await response.json();

    return newClient;

}


// ------------------ GET ALL CLIENTS ------------------
//           getClients
export const fetchClients = async () => 
{
    const res = await fetch(`${API_URL}/clients`);

    if (!res.ok) {
        throw new Error("Failed to fetch clients");
    }

    return await res.json();
};



// ------------------ GET CLIENT BY ID ------------------
//           getClientById
export const fetchClientById = async (id) => 
{
    const res = await fetch(`${API_URL}/clients/${id}`);

    if (!res.ok) {
        throw new Error("Client not found");
    }

    const data = await res.json();

    return data;

};


// ------------------ UPDATE CLIENT BY ID ------------------
//export const updateClientById = async (id, form) => 

export const updateClientById = async (id, clientData) => 
{

    const response = await fetch(`${API_URL}/clients/${id}` ,  
               {
                   method: "PUT",
                   headers: {"Content-Type": "application/json"},
                   body: JSON.stringify(clientData)
               }
      );


        if (!response.ok) {
            throw new Error("Failed to update client")
        }

        //return await response.json()
}


// ------------------ DELETE CLIENT ------------------
export const deleteClient = async (id) => 
{
    const response = await fetch(`${API_URL}/clients/${id}`, 
                { method: "DELETE" }
    )

    if (!response.ok) {
        throw new Error("Failed to delete client")
    }
}

