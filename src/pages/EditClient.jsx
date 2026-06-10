import React, {  useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ClientContext } from '../context/ClientContext';

import ClientForm from '../components/ClientForm';
import { fetchClientById, updateClientById } from "../services/api"; // usar servicio API


function EditClient()
{

    // 1️⃣ Get client ID from the URL
      const { id } =  useParams();

    // Siempre los hooks se inicializan aqui arriba.
      const navigate = useNavigate();
      const { loadClients } = useContext(ClientContext); //data from ClientContext

    // 2️⃣ Local state
    const [client, setClient] =useState(null); // Estado local para almacenar el cliente
    const [loading, setLoading] = useState(true); // UX : Mensaje " Cargando Cliente..."" para mostrar mientras carga la data


    // 2️⃣ Form Load = useEffect() => Traer el cliente desde la BD - (API) al montar el componente con useEffect
    //  Cargar cliente al montar el componente

    useEffect( () => {
          const loadClientById = async () => {
            try {
              const data = await fetchClientById(id);
              setClient(data);

            } catch (err) {
              alert("Failed to load client");
              console.error(err);
              
            } finally {
              setLoading(false);  //Siempre llega a este codigo, asi treiga data o haya un error.
            }
          }; loadClientById();
      }, [id]
      );

        
      if (loading) {
        return <p>Loading client...</p>;
      }


    // 4️⃣ Guardar cambios (UPDATE)
    const handleSubmit = async (updated) => {
    
      if(!updated.name || !updated.email) {
        alert("Name and email are required");
        return;
      }

      //Call API - Update client using API service
      try {
        
        await updateClientById(id, updated); // ← Aquí usamos nuestro service
        
        // 5️⃣ Refrescar la lista global– DATA desde CONTEXT,varGlobal
        await loadClients();

        // 6️⃣ Mensaje y redirección a otra pagina.
        alert("Client updated successfully");
        navigate("/");
        

        //para los errores diferentes de response.ok creo que es 200, otros status llega aqui al catch
      } catch (error) {

        alert(error.message || "Unexpected error occurred");
        console.error("Error updating client:", error);
      }

    };

    return (
      <div className="bg-white p-8 rounded shadow max-w-2xl mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4" >Edit Client - Reusable Form</h1>
        
          {client && (
            <ClientForm 
                initialValue={client} // PASAMOS EL ESTADO QUE VIENE DE LA API - Pasamos la data al formulario compartido.
                handleSubmit={handleSubmit} //handleSubmit={() => {}}  // Por ahora dejamos vacío
                buttonText="Save Changes"
            />
          )}

      </div>
    );
    
}

export default EditClient;