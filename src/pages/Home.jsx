import React from 'react';

import { useContext  } from 'react'; 
import { ClientContext } from '../context/ClientContext'; 
import { Link } from 'react-router-dom'; 

import { deleteClient } from '../services/api';

function Home() {

    const { clients, loadClients } = useContext(ClientContext);


    const handleDelete = async (id) =>
    {
      

      try {
        
        const confirmDelete = window.confirm("Are you sure you want to delete this client?");
        if (!confirmDelete) return;

        await deleteClient(id); // Call API and wait to finish.
        loadClients();         //  refresh List
 
      } catch (error) {
        console.error("Error deleting Client:", error);
      }
    };

        
    return (
      <div className="p-6">

          <h1 className="text-3xl font-bold mb-4" >Client Manager</h1>
          <Link 
              to="/create"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create Client
          </Link>

          
          <ul>
            {
              clients.map( (client) => (
                  <li 
                    key={client.id}
                    className="bg-white p-4 rounded shadow flex justify-between items-center mb-3"
                  >

                    {/* LEFT SIDE (info) */}
                    <div>
                      <h3 className="font-bold text-lg">{client.name}</h3>
                      <p className="text-gray-600">{client.email}</p>
                      <p className="text-gray-500 text-sm">{client.phone}</p>
                    </div>

                    {/*
                    {client.name} - {client.email} - {client.phone}
                    {" "}
                    */}

                    {/* RIGHT SIDE (buttons) */}
                     <div className="flex gap-2">
                        
                        {/* <Link to="/edit/:id">Editar</Link> */}
                        <Link 
                            to={`/edit/${client.id}`}
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >Edit</Link> {" "}
                      
                          {/* <button onClick={ () => deleteClient(client.id) }>Eliminar</button> */}
                          <button 
                              onClick={ () => handleDelete(client.id) }
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >Delete</button>                      
                    
                    </div>

                  </li> 
                  )
                )
            }

            {/* 
              <li>
                Test
              </li>
            */}
            
          </ul>
      </div> 
    );


}

export default Home;