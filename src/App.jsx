import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateClient from './pages/CreateClient';
import EditClient from './pages/EditClient';

import './App.css'
import DashboardLayout from './layouts/DashboardLayout'

function App() {
  return (
    <BrowserRouter>
     <DashboardLayout>
      
      <Routes>
        <Route path='/' element={ <Home /> } />          {/*http://localhost:5173/ */}
        <Route path='/create' element={ <CreateClient /> } />   {/*http://localhost:5173/create */}
        <Route path='/edit/:id' element={ <EditClient />} />    {/*http://localhost:5173/edit/2 */}
      </Routes> 

      </DashboardLayout>   
    </BrowserRouter>
    
  );
}

export default App;
