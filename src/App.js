import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './pages/PageRoutes';
import { UserContext } from './context/UserContext'
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({
      id: localStorage.getItem("id"),
      firstName: localStorage.getItem("firstName"),
      role: localStorage.getItem("role")
    })
  }, [])
  

  return (
   <div className='bg'>
      <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
          <PageRoutes />
        </UserContext.Provider>
      </BrowserRouter>
   </div>

  
  );
}

export default App;
